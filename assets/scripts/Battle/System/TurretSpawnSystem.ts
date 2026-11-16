import type { System } from '../../Engine/System';
import type { World } from '../../Engine/World';
import type { BossEntity } from '../Entity/BossEntity';
import { TurretEntity } from '../Entity/TurretEntity';
import { BATTLE_EVENT } from '../BattleEvents';

export class TurretSpawnSystem implements System {

    private _world: World = null!;

    onStart(world: World): void {
        this._world = world;
        world.bus.on(BATTLE_EVENT.TURRET_REBUILD_REQUEST, this._onRebuild, this);
        world.bus.on(BATTLE_EVENT.BOSS_KILLED, this._onBossKilled, this);
        world.bus.on(BATTLE_EVENT.TURRET_KILLED, this._onTurretKilled, this);
    }

    onDestroy(world: World): void {
        world.bus.off(BATTLE_EVENT.TURRET_REBUILD_REQUEST, this._onRebuild, this);
        world.bus.off(BATTLE_EVENT.BOSS_KILLED, this._onBossKilled, this);
        world.bus.off(BATTLE_EVENT.TURRET_KILLED, this._onTurretKilled, this);
        this._world = null!;
    }

    onTick(): void {}

    private _onRebuild(boss: BossEntity, stageIndex: number): void {
        const oldIds = new Set(boss.turretIds.filter(id => id !== 0));
        for (const t of this._world.query<TurretEntity>('turret')) {
            if (oldIds.has(t.id)) this._world.remove(t);
        }
        boss.turretIds = [];

        const stage = boss.config.stages[stageIndex];
        if (!stage) return;

        for (const cfg of stage.turrets) {
            const turret = new TurretEntity();
            turret.ownerId = boss.id;
            turret.config = cfg;
            turret.health.hp = cfg.hp;
            turret.health.maxHp = cfg.hp;
            turret.collisionRadius = cfg.collisionRadius;
            turret.aim.aimAngle = cfg.baseAngle;
            turret.x = boss.x + cfg.offsetX;
            turret.y = boss.y + cfg.offsetY;
            this._world.add(turret);
            boss.turretIds.push(turret.id);
        }
    }

    private _onTurretKilled(turret: TurretEntity): void {
        for (const boss of this._world.query<BossEntity>('boss')) {
            const idx = boss.turretIds.indexOf(turret.id);
            if (idx >= 0) boss.turretIds[idx] = 0;
        }
    }

    private _onBossKilled(boss: BossEntity): void {
        const oldIds = new Set(boss.turretIds.filter(id => id !== 0));
        for (const t of this._world.query<TurretEntity>('turret')) {
            if (oldIds.has(t.id)) this._world.remove(t);
        }
    }
}