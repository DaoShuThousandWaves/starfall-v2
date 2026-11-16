import type { Entity } from '../../Engine/Entity';
import type { System } from '../../Engine/System';
import type { World } from '../../Engine/World';


export class InvincibleSystem implements System {

    onTick(world: World, dt: number): void {
        this._tickKind(world, 'player', dt);
        this._tickKind(world, 'enemy', dt);
        this._tickKind(world, 'boss', dt);
        this._tickKind(world, 'turret', dt);
    }

    private _tickKind(world: World, kind: string, dt: number): void {
        for (const p of world.query<Entity>(kind)) {
            const h = p.health;
            if (!h || h.invincibleTimer <= 0) continue;
            h.invincibleTimer -= dt;
            if (h.invincibleTimer < 0) h.invincibleTimer = 0;
        }
    }
}