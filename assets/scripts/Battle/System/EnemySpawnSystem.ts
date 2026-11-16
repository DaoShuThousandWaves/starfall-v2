import { GameData } from '../../Core/Data/GameData';
import type { System } from '../../Engine/System';
import type { World } from '../../Engine/World';
import { BATTLE_EVENT } from '../BattleEvents';
import { BOSS_CONFIG } from '../Config/BossConfig';
import type { EnemyType, SpawnSide } from '../Config/LevelConfig';
import { BossEntity } from '../Entity/BossEntity';
import { EnemyEntity } from '../Entity/EnemyEntity';


export class EnemySpawnSystem implements System {

    private _world: World = null!;

    onStart(world: World): void {
        this._world = world;
        world.bus.on(BATTLE_EVENT.ENEMY_SPAWN_REQUEST, this._onSpawnEnemy, this);
        world.bus.on(BATTLE_EVENT.BOSS_SPAWN_REQUEST, this._onSpawnBoss, this);
    }

    onDestroy(world: World): void {
        world.bus.off(BATTLE_EVENT.ENEMY_SPAWN_REQUEST, this._onSpawnEnemy, this);
        world.bus.off(BATTLE_EVENT.BOSS_SPAWN_REQUEST, this._onSpawnBoss, this);
        this._world = null!;
    }

    onTick(_world: World, _dt: number): void {
        // 事件驱动，无需每帧
    }

    private _onSpawnEnemy(enemyType: EnemyType, spawnSide: SpawnSide): void {
        const e = this._world.acquire('enemy', () => new EnemyEntity());
        this._resetEnemy(e);
        this._setSpawnPosition(e, spawnSide);
        e.move.originX = e.x;
        e.move.originY = e.y;
        this._configureEnemy(e, enemyType, spawnSide);
        this._world.add(e);
    }

    private _resetEnemy(e: EnemyEntity): void {
        e.alive = true;
        // health
        e.health.hp = 100;
        e.health.maxHp = 100;
        e.health.invincibleTimer = 0;
        e.health.hitInvincibleDuration = 0;
        // move
        e.move.pattern = 'none';
        e.move.dirX = 0;
        e.move.dirY = 0;
        e.move.speed = 100;
        e.move.originX = 0;
        e.move.originY = 0;
        e.move.phase = 0;
        e.move.frequency = 3;
        e.move.amplitude = 80;
        // weapon：清空，_configureEnemy 会重新 push
        e.weapon.weapons.length = 0;
    }

    private _setSpawnPosition(e: EnemyEntity, side: SpawnSide): void {
        const halfW = GameData.viewW / 2;
        const halfH = GameData.viewH / 2;

        if (side === 'left') {
            e.x = -halfW - 30;
            e.y = -halfH * 0.6 + Math.random() * halfH * 0.6;
            e.move.dirX = 1;
            e.move.dirY = 0;
        } else if (side === 'right') {
            e.x = halfW + 30;
            e.y = -halfH * 0.6 + Math.random() * halfH * 0.6;
            e.move.dirX = -1;
            e.move.dirY = 0;
        } else {
            e.x = -halfW + Math.random() * GameData.viewW;
            e.y = halfH + 30;
            e.move.dirX = 0;
            e.move.dirY = -1;
        }
    }

    private _configureEnemy(e: EnemyEntity, type: EnemyType, side: SpawnSide): void {
        switch (type) {
            case 'sine':
                e.health.hp = 25;
                e.health.maxHp = 25;
                e.move.speed = 120;
                e.move.pattern = 'sine';
                e.move.frequency = 3;
                e.move.amplitude = 80;
                break;
            case 'basic':
            default:
                e.health.hp = 30;
                e.health.maxHp = 30;
                e.move.speed = 100;
                e.move.pattern = (side === 'top' && Math.random() < 0.5) ? 'sine' : 'straight';
                break;
        }

        e.weapon.weapons.push({
            config: {
                fireInterval: 2.0,
                bulletType: 'yellow',
                bulletSpeed: 200,
                bulletDamage: 8,
                fireDirX: 0,
                fireDirY: -1,
            },
            cooldownTimer: Math.random() * 2.0,
            enabled: true,
        });
    }


    private _onSpawnBoss(bossId: string): void {
        const config = BOSS_CONFIG[bossId];
        if (!config) {
            console.warn(`[EnemySpawnSystem] 未知 Boss: ${bossId}`);
            return;
        }
        const boss = new BossEntity(config);
        boss.x = 0;
        boss.y = GameData.viewH / 2 - 300;
        this._world.add(boss);
        this._world.bus.emit(BATTLE_EVENT.BOSS_SPAWNED, config.name);
        this._world.bus.emit(BATTLE_EVENT.TURRET_REBUILD_REQUEST, boss, 0);
    }
}