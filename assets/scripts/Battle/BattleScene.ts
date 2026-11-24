import { _decorator, Component, Node } from 'cc';
import { World } from '../Engine/World';
import { Bus } from '../Engine/Bus';
import { ViewRegistry } from '../Engine/ViewRegistry';
import { FixedTick } from '../Engine/Tick';
import { GameData } from '../Core/Data/GameData';

import { BulletView } from './View/BulletView';
import { PlayerView } from './View/PlayerView';
import { EnemyView } from './View/EnemyView';
import { BossView } from './View/BossView';
import { TurretView } from './View/TurretView';

import { BattleStateSystem, GameState } from './System/BattleStateSystem';
import { BossStageSystem } from './System/BossStageSystem';
import { TurretSpawnSystem } from './System/TurretSpawnSystem';
import { TurretScheduleSystem } from './System/TurretScheduleSystem';
import { TurretAimSystem } from './System/TurretAimSystem';
import { FireSystem } from './System/FireSystem';
import { BulletSpawnSystem } from './System/BulletSpawnSystem';
import { PlayerControlSystem } from './System/PlayerControlSystem';
import { EnemySpawnSystem } from './System/EnemySpawnSystem';
import { WaveSystem } from './System/WaveSystem';
import { MovementSystem } from './System/MovementSystem';
import { CombatSystem } from './System/CombatSystem';
import { DamageSystem } from './System/DamageSystem';
import { InvincibleSystem } from './System/InvincibleSystem';
import { ExpSystem } from './System/ExpSystem';
import { CardApplySystem } from './System/CardApplySystem';
import { CardSystem } from './System/CardSystem';
import { OutOfBoundsSystem } from './System/OutOfBoundsSystem';


import { expForLevel } from './Config/ExpConfig';
import { BATTLE_EVENT } from './BattleEvents';
import { BattleInputHandler } from './BattleInputHandler';
import { BattleViewModel } from './ViewModel/BattleViewModel';

import { PauseButton } from '../UI/Common/PauseButton';
import { BossHealthUI } from '../UI/Battle/BossHealthUI';
import { PlayerHealthUI } from '../UI/Battle/PlayerHealthUI';
import { ExpBarUI } from '../UI/Battle/ExpBarUI';
import { UpgradePanel } from '../UI/Battle/UpgradePanel';
import { ResultPanel } from '../UI/Battle/ResultPanel';
import { PlayerEntity } from './Entity/PlayerEntity';
import { EntityPool } from '../Core/Pool/EntityPool';
import { ViewPool } from '../Engine/ViewPool';

const { ccclass, property } = _decorator;

@ccclass('BattleScene')
export class BattleScene extends Component {

    // ===== UI 引用（Inspector 注入）=====
    @property(PauseButton)    pauseButton: PauseButton = null!;
    @property(BossHealthUI)   bossHealthUI: BossHealthUI = null!;
    @property(PlayerHealthUI) playerHealthUI: PlayerHealthUI = null!;
    @property(ExpBarUI)       expBarUI: ExpBarUI = null!;
    @property(UpgradePanel)   upgradePanel: UpgradePanel = null!;
    @property(ResultPanel)    resultPanel: ResultPanel = null!;

    // ===== 运行时核心 =====
    private _bus: Bus = null!;
    private _world: World = null!;
    private _views: ViewRegistry = null!;
    private _tick: FixedTick = null!;
    private _inputHandler: BattleInputHandler = null!;
    private _viewModel: BattleViewModel = null!;
    private _stateSystem: BattleStateSystem = null!;
    private _waveSystem: WaveSystem = null!;

    // =========================================================
    //  生命周期
    // =========================================================
    protected start(): void {
        GameData.init();
        this._createBus();
        this._rebuildViewModel();
        this._setupHUD();
        this._setupInput();
        this._registerSceneListeners();
        this._launchBattle();
    }

    onDestroy(): void {
        this._unregisterSceneListeners();
        this._haltBattle();
        this._viewModel?.onDestroy();
    }

    // =========================================================
    //  创建总线 / ViewModel / HUD / 输入
    // =========================================================
    private _createBus(): void {
        this._bus = new Bus();
    }

    /** 销毁旧 ViewModel，重建并把两个 Panel 重新挂到新的 ViewModel 上 */
    private _rebuildViewModel(): void {
        this._viewModel?.onDestroy();
        this._viewModel = new BattleViewModel(this._bus);
        this.upgradePanel.setup(this._bus, this._viewModel);
        this.resultPanel.setup(this._bus, this._viewModel);
    }

    private _setupHUD(): void {
        this.pauseButton.setup(this._bus);
        this.bossHealthUI.setup(this._bus);
        this.playerHealthUI.setup(this._bus);
        this.expBarUI.setup(this._bus);
    }

    private _setupInput(): void {
        this._inputHandler = this.node.addComponent(BattleInputHandler);
        this._inputHandler.setup(this._bus);
    }

    // =========================================================
    //  Scene 层监听（跨 World 生命周期的操作）
    // =========================================================
    private _registerSceneListeners(): void {
        this._bus.on(BATTLE_EVENT.RESTART_REQUEST, this._onRestartRequest, this);
        this._bus.on(BATTLE_EVENT.QUIT_REQUEST,    this._onQuitRequest,    this);
        this._bus.on(BATTLE_EVENT.GAME_STATE_CHANGED, this._onGameStateChanged, this);
    }

    private _unregisterSceneListeners(): void {
        this._bus?.off(BATTLE_EVENT.RESTART_REQUEST, this._onRestartRequest, this);
        this._bus?.off(BATTLE_EVENT.QUIT_REQUEST,    this._onQuitRequest,    this);
        this._bus?.off(BATTLE_EVENT.GAME_STATE_CHANGED, this._onGameStateChanged, this);
    }

    // =========================================================
    //  启动 / 终止 一局战斗（首次和重开共用）
    // =========================================================
    private _launchBattle(): void {
        this._buildWorld();
        this._createPlayer();
        this._startTick();
        this._inputHandler.enabled = true;
    }

    private _haltBattle(): void {
        this._stopTick();
        this._world?.destroy();
        this._world = null!;
        this._views = null!;
        this._stateSystem = null!;
        this._waveSystem = null!;
    }

    // =========================================================
    //  建立世界
    // =========================================================
    private _buildWorld(): void {
        this._views = new ViewRegistry(this.node, new ViewPool(256));
        const pool = new EntityPool(512);
        this._world = new World(this._bus, this._views,pool);
        this._registerViewFactories();
        this._installSystems();
    }

    private _registerViewFactories(): void {
        this._views.registerFactory('bullet', (e) => {
            const node = new Node(`bullet_${e.id}`);
            return node.addComponent(BulletView);
        });
        this._views.registerFactory('player', (e) => {
            const node = new Node(`player_${e.id}`);
            return node.addComponent(PlayerView);
        });
        this._views.registerFactory('enemy', (e) => {
            const node = new Node(`enemy_${e.id}`);
            return node.addComponent(EnemyView);
        });
        this._views.registerFactory('boss', (e) => {
            const node = new Node(`boss_${e.id}`);
            return node.addComponent(BossView);
        });
        this._views.registerFactory('turret', (e) => {
            const node = new Node(`turret_${e.id}`);
            return node.addComponent(TurretView);
        });
    }

    /**
     * 装配 System：按"业务域 + 时序依赖"分组
     *
     * 【关键时序约束】
     *  - BossStage / TurretSchedule / TurretAim 必须在 Fire 之前（Fire 读 active + aimAngle）
     *  - Wave 必须在 Exp / Card 之前（先通关再结算经验，防止打死最终 Boss 后弹选卡）
     *  - Combat 必须在 Damage 之前（Combat 发 BULLET_HIT，Damage 消费它）
     */
    private _installSystems(): void {
        const w = this._world;

        // ── ① Boss 生命周期：阶段切换 → 炮台重建 → 编排 → 瞄准 ──
        w.addSystem(new BossStageSystem());
        w.addSystem(new TurretSpawnSystem());
        w.addSystem(new TurretScheduleSystem());
        w.addSystem(new TurretAimSystem());

        // ── ② 发射：武器/炮台计时 + 统一造子弹 ──
        w.addSystem(new FireSystem());
        w.addSystem(new BulletSpawnSystem());

        // ── ③ 输入驱动 ──
        w.addSystem(new PlayerControlSystem());

        // ── ④ 实体刷新 ──
        w.addSystem(new InvincibleSystem());
        w.addSystem(new EnemySpawnSystem());

        // ── ⑤ 波次（必须在 Exp/Card 之前，让 LEVEL_CLEAR 先于 LEVEL_UP） ──
        this._waveSystem = new WaveSystem();
        w.addSystem(this._waveSystem);

        // ── ⑥ 移动 → 碰撞 → 伤害 ──
        w.addSystem(new MovementSystem());
        w.addSystem(new CombatSystem());
        w.addSystem(new DamageSystem());

        // ── ⑦ 数据结算：经验、卡牌生效、抽卡 ──
        w.addSystem(new ExpSystem());
        w.addSystem(new CardApplySystem());
        w.addSystem(new CardSystem());

        // ── ⑧ 状态机（全局裁决者） ──
        this._stateSystem = new BattleStateSystem();
        w.addSystem(this._stateSystem);

        // ── ⑨ 清理 ──
        w.addSystem(new OutOfBoundsSystem());
    }

    // =========================================================
    //  创建玩家
    // =========================================================
    private _createPlayer(): void {
        const player = new PlayerEntity();
        player.x = 0;
        player.y = -GameData.viewH / 2 + 100;
        player.health.hp = 100;
        player.health.maxHp = 100;
        player.exp.exp = 0;
        player.exp.level = 1;
        player.exp.expToNext = expForLevel(1);
        player.weapon.weapons.push({
            config: {
                fireInterval: 0.2,
                bulletType: 'blue',
                bulletSpeed: 400,
                bulletDamage: 10,
                fireDirX: 0,
                fireDirY: 1,
            },
            cooldownTimer: 0,
            enabled: true,
        });
        this._world.add(player);
        this._bus.emit(BATTLE_EVENT.PLAYER_HP_CHANGED, player.health.hp / player.health.maxHp);
        this._bus.emit(BATTLE_EVENT.EXP_CHANGED, player.exp.exp, player.exp.expToNext, player.exp.level);
    }

    // =========================================================
    //  Tick 启停
    // =========================================================
    private _startTick(): void {
        if (!this._tick) {
            this._tick = this.node.addComponent(FixedTick);
        }
        this._tick.setup(this._world, this._views);
        this._tick.begin();
    }

    private _stopTick(): void {
        this._tick?.stop();
    }

    private _resumeTick(){
        this._tick?.resume();
    }

    // =========================================================
    //  Scene 层事件响应
    // =========================================================
    private _onGameStateChanged(state: GameState): void {
        const shouldRun = state === 'playing';

        if (shouldRun) {
            if (this._tick && !this._tick.isRunning) {
                this._resumeTick();
            }
        } else {
            this._stopTick();
        }

        if (this._inputHandler) this._inputHandler.enabled = shouldRun;
        if (this.pauseButton) {
            this.pauseButton.setEnabled(shouldRun || state === 'paused');
        }
    }

    private _onRestartRequest(): void {
        console.log('[BattleScene] 重开');
        this._haltBattle();
        this._rebuildViewModel();
        this._launchBattle();
    }

    private _onQuitRequest(): void {
        console.log('[BattleScene] 退出战斗');
        this._haltBattle();
        this._viewModel?.onDestroy();
        // TODO: director.loadScene('HallScene');
    }
}