import type { System } from '../../Engine/System';
import type { World } from '../../Engine/World';
import type { PlayerEntity } from '../Entity/PlayerEntity';
import type { TurretEntity } from '../Entity/TurretEntity';

export class TurretAimSystem implements System {

    onTick(world: World, dt: number): void {
        for (const turret of world.query<TurretEntity>('turret')) {
            if (!turret.alive || turret.health.hp <= 0) continue;
            this._tickAim(world, turret, dt);
        }
    }

    private _tickAim(world: World, turret: TurretEntity, dt: number): void {
        const c = turret.config;
        switch (c.aimMode) {
            case 'fixed':
                turret.aim.aimAngle = c.baseAngle;
                break;
            case 'target':
                this._aimAtPlayer(world, turret, dt);
                break;
            case 'spin':
                turret.aim.aimAngle = (turret.aim.aimAngle + c.aimSpeed * dt) % 360;
                break;
            case 'oscillate':
                turret.aim.oscPhase += (c.aimSpeed * Math.PI / 180) * dt;
                turret.aim.aimAngle = c.baseAngle + Math.sin(turret.aim.oscPhase) * c.oscRange;
                break;
        }
    }

    private _aimAtPlayer(world: World, turret: TurretEntity, dt: number): void {
        const player = this._findPlayer(world);
        if (!player) return;

        const c = turret.config;
        const targetAngle = Math.atan2(player.y - turret.y, player.x - turret.x) * 180 / Math.PI;

        let diff = targetAngle - turret.aim.aimAngle;
        diff = ((diff + 180) % 360 + 360) % 360 - 180;

        const maxStep = c.aimSpeed * dt;
        if (Math.abs(diff) <= maxStep) {
            turret.aim.aimAngle = targetAngle;
        } else {
            turret.aim.aimAngle += Math.sign(diff) * maxStep;
        }
    }

    private _findPlayer(world: World): PlayerEntity | null {
        for (const p of world.query<PlayerEntity>('player')) return p;
        return null;
    }
}