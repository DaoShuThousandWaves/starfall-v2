import type { System } from "../../Engine/System";
import type { World } from "../../Engine/World";
import { BATTLE_EVENT } from "../BattleEvents";
import { EnemyEntity } from "../Entity/EnemyEntity";
import type { PlayerEntity } from "../Entity/PlayerEntity";
import type { TurretEntity } from "../Entity/TurretEntity";
import { BulletFireRequest } from "./BulletSpawnSystem";
import { advanceCooldown } from "./FireCooldown";

export class FireSystem implements System {

    onTick(world: World, dt: number): void {
        for (const p of world.query<PlayerEntity>('player')) this._tickPlayer(world, p, dt);
        for (const p of world.query<EnemyEntity>('enemy'))  this._tickEnemy(world, p, dt);
        for (const t of world.query<TurretEntity>('turret')) this._tickTurret(world, t, dt);
    }

    private _tickPlayer(world: World, p: PlayerEntity, dt: number): void {
        for (const w of p.weapon.weapons) {
            if (!w.enabled) continue;

            const interval = w.config.fireInterval * p.weapon.fireRateMultiplier;
            const n = advanceCooldown(w, interval, dt);

            const spreadCount = (w.config.spreadCount ?? 1) + p.weapon.extraBulletCount;
            const baseAngle = w.config.spreadAngle ?? 0;
            const spreadAngle = baseAngle > 0 ? baseAngle : (spreadCount > 1 ? 20 : 0);

            for (let i = 0; i < n; i++) {
                const req: BulletFireRequest = {
                    x: p.x + w.config.fireDirX * 20,
                    y: p.y + w.config.fireDirY * 20,
                    dirX: w.config.fireDirX,
                    dirY: w.config.fireDirY,
                    bulletSpeed: w.config.bulletSpeed * p.weapon.bulletSpeedMultiplier,
                    bulletDamage: w.config.bulletDamage * p.weapon.damageMultiplier,
                    bulletType: w.config.bulletType,
                    isPlayerBullet: true,
                    spreadCount,
                    spreadAngle,
                };
                world.bus.emit(BATTLE_EVENT.WEAPON_FIRE, req);
            }
        }
    }

    private _tickEnemy(world: World, p: EnemyEntity, dt: number): void {
        for (const w of p.weapon.weapons) {
            if (!w.enabled) continue;
            const n = advanceCooldown(w, w.config.fireInterval, dt);
            for (let i = 0; i < n; i++) {
                const req: BulletFireRequest = {
                    x: p.x + w.config.fireDirX * 20,
                    y: p.y + w.config.fireDirY * 20,
                    dirX: w.config.fireDirX,
                    dirY: w.config.fireDirY,
                    bulletSpeed: w.config.bulletSpeed,
                    bulletDamage: w.config.bulletDamage,
                    bulletType: w.config.bulletType,
                    isPlayerBullet: false,
                    spreadCount: w.config.spreadCount,
                    spreadAngle: w.config.spreadAngle,
                };
                world.bus.emit(BATTLE_EVENT.WEAPON_FIRE, req);
            }
        }
    }

    private _tickTurret(world: World, t: TurretEntity, dt: number): void {
        if (!t.aim.active || !t.alive || t.health.hp <= 0) return;
        const c = t.config;
        const n = advanceCooldown(t.aim, c.fireInterval, dt);
        for (let i = 0; i < n; i++) {
            const rad = t.aim.aimAngle * Math.PI / 180;
            const req: BulletFireRequest = {
                x: t.x,
                y: t.y,
                dirX: Math.cos(rad),
                dirY: Math.sin(rad),
                bulletSpeed: c.bulletSpeed,
                bulletDamage: c.bulletDamage,
                bulletType:  c.bulletType,
                isPlayerBullet: false,
                spreadCount: c.spreadCount,
                spreadAngle: c.spreadAngle,
            };
            world.bus.emit(BATTLE_EVENT.WEAPON_FIRE, req);
        }
    }

}