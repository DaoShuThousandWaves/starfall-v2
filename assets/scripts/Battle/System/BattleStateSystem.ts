import type { System } from "../../Engine/System";
import type { World } from "../../Engine/World";
import { BATTLE_EVENT } from "../BattleEvents";



export type GameState = 
    | 'playing'      // 正常游玩
    | 'paused'       // 玩家主动暂停
    | 'upgrading'    // 升级选卡中
    | 'game_over'    // 玩家死亡
    | 'level_clear'; // 关卡通关（最高优先级）



export class BattleStateSystem implements System {

    private _world: World = null!;
    private _state: GameState = 'playing';

    onStart(world: World): void {
        this._world = world;
        world.bus.on(BATTLE_EVENT.PLAYER_DIED, this._onPlayerDied, this);
        world.bus.on(BATTLE_EVENT.CARDS_DRAWN, this._onCardsDrawn, this);
        world.bus.on(BATTLE_EVENT.LEVEL_CLEAR, this._onLevelClear, this);
        world.bus.on(BATTLE_EVENT.PAUSE_TOGGLE_REQUEST, this._onPauseToggle, this);
        world.bus.on(BATTLE_EVENT.UPGRADE_FINISHED, this._onUpgradeFinished, this);
        world.bus.emit(BATTLE_EVENT.GAME_STATE_CHANGED, this._state);
    }

    onDestroy(world: World): void {
        world.bus.off(BATTLE_EVENT.PLAYER_DIED, this._onPlayerDied, this);
        world.bus.off(BATTLE_EVENT.CARDS_DRAWN, this._onCardsDrawn, this);
        world.bus.off(BATTLE_EVENT.LEVEL_CLEAR, this._onLevelClear, this);
        world.bus.off(BATTLE_EVENT.PAUSE_TOGGLE_REQUEST, this._onPauseToggle, this);
        world.bus.off(BATTLE_EVENT.UPGRADE_FINISHED, this._onUpgradeFinished, this);
        this._world = null!;
    }

    onTick(world: World, dt: number): void {
        
    }

    get state(): GameState {
        return this._state;
    }

     private _changeState(newState: GameState): void {
        if (this._state === newState) return;
        this._state = newState;
        this._world.bus.emit(BATTLE_EVENT.GAME_STATE_CHANGED, newState);
    }

    private _onPlayerDied(): void {
        if (this._state === 'game_over' || this._state === 'level_clear') return;
        this._changeState('game_over');
    }

    private _onLevelClear(): void {
        // 通关优先级最高，不管你是在选卡还是游玩，直接强制转为通关
        this._changeState('level_clear');
    }

    private _onCardsDrawn(): void {
        if (this._state === 'game_over' || this._state === 'level_clear') return;

        // 兜底：即使WaveSystem信号迟到，这里也直接拦截
        const hasEnemies = this._world.hasAny('enemy') || this._world.hasAny('boss');
        if (!hasEnemies) return; // 不进入upgrading状态

        this._changeState('upgrading');
    }

    private _onUpgradeFinished(): void {
        if (this._state === 'upgrading') {
            this._changeState('playing');
        }
    }

    private _onPauseToggle(): void {
        if (this._state === 'playing') {
            this._changeState('paused');
        } else if (this._state === 'paused') {
            this._changeState('playing');
        }
    }
}


