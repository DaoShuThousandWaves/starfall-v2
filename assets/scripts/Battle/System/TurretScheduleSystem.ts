import type { System } from '../../Engine/System';
import type { World } from '../../Engine/World';
import type { BossEntity } from '../Entity/BossEntity';
import type { TurretEntity } from '../Entity/TurretEntity';
import type { TurretScheduleState } from '../Entity/TurretSchedule';

export class TurretScheduleSystem implements System {

    onTick(world: World, dt: number): void {
        for (const boss of world.query<BossEntity>('boss')) {
            if (!boss.alive || boss.health.hp <= 0) continue;
            this._tickSchedule(world, boss, dt);
        }
    }

    private _tickSchedule(world: World, boss: BossEntity, dt: number): void {
        const turrets = this._collectTurrets(world, boss);
        const schedule = boss.turretSchedule;

        if (!schedule || schedule.config.mode === 'volley') {
            for (const t of turrets) if (t) t.aim.active = true;
            return;
        }

        this._tickSequence(boss, schedule, turrets, dt);
    }

    private _collectTurrets(world: World, boss: BossEntity): (TurretEntity | null)[] {
        const result: (TurretEntity | null)[] = [];
        for (const id of boss.turretIds) {
            if (id === 0) { result.push(null); continue; }
            result.push(this._findTurretById(world, boss, id));
        }
        return result;
    }

    private _findTurretById(world: World, boss: BossEntity, id: number): TurretEntity | null {
        for (const t of world.query<TurretEntity>('turret')) {
            if (t.id === id && t.ownerId === boss.id && t.alive && t.health.hp > 0) {
                return t;
            }
        }
        return null;
    }

    private _tickSequence(
        boss: BossEntity,
        schedule: TurretScheduleState,
        turrets: (TurretEntity | null)[],
        dt: number,
    ): void {
        for (const t of turrets) if (t) t.aim.active = false;
        if (schedule.activeIndex < 0) return;

        if (schedule.gapTimer > 0) {
            schedule.gapTimer -= dt;
            if (schedule.gapTimer <= 0) {
                schedule.gapTimer = 0;
                schedule.burstElapsed = 0;
            }
            return;
        }

        const turret = turrets[schedule.activeIndex];
        if (!turret) {
            this._advanceTurret(turrets, schedule);
            return;
        }
        turret.aim.active = true;

        schedule.burstElapsed += dt;
        const burstDuration = schedule.config.burstDuration ?? 2;
        if (schedule.burstElapsed >= burstDuration) {
            this._advanceTurret(turrets, schedule);
        }
    }

    private _advanceTurret(
        turrets: (TurretEntity | null)[],
        schedule: TurretScheduleState,
    ): void {
        const n = turrets.length;
        if (n === 0) { schedule.activeIndex = -1; return; }

        const loop = schedule.config.loop ?? true;
        let next = schedule.activeIndex;
        let guard = 0;

        do {
            next++;
            if (next >= n) {
                if (!loop) {
                    schedule.activeIndex = -1;
                    schedule.burstElapsed = 0;
                    schedule.gapTimer = 0;
                    return;
                }
                next = 0;
            }
            if (guard++ > n) { schedule.activeIndex = -1; return; }
        } while (!turrets[next]);

        schedule.activeIndex = next;
        const t = turrets[next];
        if (t) t.aim.cooldownTimer = 0;
        schedule.gapTimer = schedule.config.burstGap ?? 1;
        schedule.burstElapsed = 0;
    }
}