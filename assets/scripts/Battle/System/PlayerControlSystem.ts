import type { World } from '../../Engine/World';
import type { System } from '../../Engine/System';
import type { PlayerEntity } from '../Entity/PlayerEntity';
import { BATTLE_EVENT } from '../BattleEvents';
import { GameData } from '../../Core/Data/GameData';

export class PlayerControlSystem implements System {

    private _world: World = null!;

    onStart(world: World): void {
        this._world = world;
        world.bus.on(BATTLE_EVENT.PLAYER_MOVE, this._onPlayerMove, this);
    }

    onDestroy(world: World): void {
        world.bus.off(BATTLE_EVENT.PLAYER_MOVE, this._onPlayerMove, this);
        this._world = null!;
    }

    onTick(_world: World, _dt: number): void {}

    private _onPlayerMove(dx: number, dy: number): void {
        for (const p of this._world.query<PlayerEntity>('player')) {
            p.x += dx;
            p.y += dy;
            this._clampToScreen(p);
        }
    }

    private _clampToScreen(p: PlayerEntity): void {
        const halfW = GameData.viewW / 2;
        const halfH = GameData.viewH / 2;
        const margin = 20;
        p.x = Math.max(-halfW + margin, Math.min(halfW - margin, p.x));
        p.y = Math.max(-halfH + margin, Math.min(halfH - margin, p.y));
    }
}