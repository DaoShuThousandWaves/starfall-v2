import type { Entity } from "../../Engine/Entity";
import type { System } from "../../Engine/System";
import type { World } from "../../Engine/World";
import { BATTLE_EVENT } from "../BattleEvents";
import type { Bullet } from "../Entity/Bullet";


export class DamageSystem implements System {

    private _world: World = null!;
  

    onStart(world: World): void {
        this._world = world;
        world.bus.on(BATTLE_EVENT.BULLET_HIT, this._onBulletHit, this);
    }

    onDestroy(world: World): void {
        world.bus.off(BATTLE_EVENT.BULLET_HIT, this._onBulletHit, this);
        this._world = null!;
    }

    onTick(world: World, dt: number): void {
        
    }

    private _onBulletHit(bullet: Bullet, target: Entity): void {
        if (!target.alive) return;
        const dmg = bullet.damage;
        this._world.remove(bullet);

        const health = target.health;
        if (!health) return;
        if (health.invincibleTimer > 0) return;

        health.hp -= dmg;

        if (target.kind === 'boss') {
            this._world.bus.emit(BATTLE_EVENT.BOSS_HP_CHANGED, health.hp / health.maxHp);
        }
        if (target.kind === 'player') {
            this._world.bus.emit(BATTLE_EVENT.PLAYER_HP_CHANGED, health.hp / health.maxHp);
        }
        // turret 目前没有 HP UI，不 emit

         if (health.hitInvincibleDuration > 0) {
            health.invincibleTimer = health.hitInvincibleDuration;
        }

        if (health.hp  <= 0) {
            this._world.remove(target);
            switch (target.kind) {
                case 'enemy':
                    this._world.bus.emit(BATTLE_EVENT.ENEMY_KILLED, target);
                    break;
                case 'boss':
                    this._world.bus.emit(BATTLE_EVENT.BOSS_KILLED, target);
                    break;
                case 'player':
                    this._world.bus.emit(BATTLE_EVENT.PLAYER_DIED);
                    break;
                case 'turret':
                    this._world.bus.emit(BATTLE_EVENT.TURRET_KILLED, target);
                    break;
            }
        }
    }



}


