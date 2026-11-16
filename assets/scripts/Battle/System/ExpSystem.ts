import type { System } from '../../Engine/System';
import type { World } from '../../Engine/World';
import type { PlayerEntity } from '../Entity/PlayerEntity';
import { BATTLE_EVENT } from '../BattleEvents';
import { EXP_REWARD, expForLevel } from '../Config/ExpConfig';

export class ExpSystem implements System {

    private _world: World = null!;

    onStart(world: World): void {
        this._world = world;
        world.bus.on(BATTLE_EVENT.ENEMY_KILLED, this._onEnemyKilled, this);
        world.bus.on(BATTLE_EVENT.BOSS_KILLED, this._onBossKilled, this);
    }

    onDestroy(world: World): void {
        world.bus.off(BATTLE_EVENT.ENEMY_KILLED, this._onEnemyKilled, this);
        world.bus.off(BATTLE_EVENT.BOSS_KILLED, this._onBossKilled, this);
        this._world = null!;
    }

    onTick(_world: World, _dt: number): void {}

    private _onEnemyKilled(): void { this._addExp(EXP_REWARD.enemy); }
    private _onBossKilled(): void  { this._addExp(EXP_REWARD.boss); }

    private _addExp(amount: number): void {
        const player = this._findPlayer();
        if (!player) return;

        const e = player.exp;
        e.exp += amount;

        let levelsGained = 0;
        while (e.exp >= e.expToNext) {
            e.exp -= e.expToNext;
            e.level++;
            e.expToNext = expForLevel(e.level);
            levelsGained++;
        }

        if (levelsGained > 0) {
            console.log(`[ExpSystem] 升级到 Lv.${e.level}`);
            this._world.bus.emit(BATTLE_EVENT.LEVEL_UP, levelsGained);
        }

        this._world.bus.emit(BATTLE_EVENT.EXP_CHANGED, e.exp, e.expToNext, e.level);
    }

    private _findPlayer(): PlayerEntity | null {
        for (const p of this._world.query<PlayerEntity>('player')) return p;
        return null;
    }
}