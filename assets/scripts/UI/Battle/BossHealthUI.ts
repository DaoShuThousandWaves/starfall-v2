import { _decorator, Component, Label, Node, ProgressBar } from 'cc';
import type { Bus } from '../../Engine/Bus';
import { BATTLE_EVENT } from '../../Battle/BattleEvents';

const { ccclass, property } = _decorator;

@ccclass('BossHealthUI')
export class BossHealthUI extends Component {

    @property(Node)
    rootNode: Node = null!;

    @property(Label)
    nameLabel: Label = null!;

    @property(ProgressBar)
    progressBar: ProgressBar = null!;

    private _bus: Bus = null!;

    setup(bus: Bus): void {
        this._bus = bus;
        this.rootNode.active = false; 
        this._bus.on(BATTLE_EVENT.BOSS_SPAWNED, this._onBossSpawned, this);
        this._bus.on(BATTLE_EVENT.BOSS_HP_CHANGED, this._onHpChanged, this);
        this._bus.on(BATTLE_EVENT.BOSS_KILLED, this._onBossKilled, this);
    }

    onLoad() {
        this.rootNode.active = false;
    }

    onDestroy() {
        this._bus?.off(BATTLE_EVENT.BOSS_SPAWNED, this._onBossSpawned, this);
        this._bus?.off(BATTLE_EVENT.BOSS_HP_CHANGED, this._onHpChanged, this);
        this._bus?.off(BATTLE_EVENT.BOSS_KILLED, this._onBossKilled, this);
    }

    // ⭐ UI 自己决定“Boss 出现了”怎么显示
    private _onBossSpawned(bossName: string): void {
        this.rootNode.active = true;
        this.nameLabel.string = bossName;
        this.progressBar.progress = 1;
    }

    // ⭐ UI 自己决定“血量变了”怎么显示
    private _onHpChanged(ratio: number): void {
        this.progressBar.progress = Math.max(0, Math.min(1, ratio));
    }

    // ⭐ UI 自己决定“Boss 死了”怎么显示
    private _onBossKilled(): void {
        this.rootNode.active = false;
    }
}