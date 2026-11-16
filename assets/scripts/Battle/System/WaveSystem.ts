import type { System } from '../../Engine/System';
import type { World } from '../../Engine/World';
import { BATTLE_EVENT } from '../BattleEvents';
import { LEVELS, type LevelConfigData, type EnemyGroupConfig } from '../Config/LevelConfig';
import type { GameState } from './BattleStateSystem';

type WaveState = 'idle' | 'running' | 'finished';

interface RunningGroup {
    config: EnemyGroupConfig;
    remain: number;
    timer: number;
    started: boolean;
}

interface RunningWave {
    startTime: number;
    bossId: string | null;
    bossDelay: number;
    bossSpawned: boolean;
    groups: RunningGroup[];
    started: boolean;
}

export class WaveSystem implements System {

    private _world: World = null!;
    private _level: LevelConfigData | null = null;
    private _state: WaveState = 'idle';
    private _levelTime = 0;
    private _runningWaves: RunningWave[] = [];


    onStart(world: World): void {
        this._world = world;
        this._level = LEVELS['level_1'];
        world.bus.on(BATTLE_EVENT.GAME_STATE_CHANGED, this._onStateChanged, this);
        world.bus.on(BATTLE_EVENT.ENEMY_KILLED, this._checkClear, this);
        world.bus.on(BATTLE_EVENT.BOSS_KILLED, this._checkClear, this);
        this._state = 'idle';
    }

    onDestroy(world: World): void {
        world.bus.off(BATTLE_EVENT.GAME_STATE_CHANGED, this._onStateChanged, this);
        world.bus.off(BATTLE_EVENT.ENEMY_KILLED, this._checkClear, this);
        world.bus.off(BATTLE_EVENT.BOSS_KILLED, this._checkClear, this);
        this._world = null!;
    }

    /** 由 BattleScene 在 tick.begin 之后调 */
    public begin(): void {
        if (this._state !== 'idle') return;
        if (!this._level || this._level.waves.length === 0) {
            console.warn('[WaveSystem] 关卡没有波次');
            return;
        }

        this._levelTime = 0;
        this._runningWaves = [];
        this._state = 'running';

        for (const wave of this._level.waves) {
            this._runningWaves.push({
                startTime: wave.startTime,
                bossId: wave.boss?.bossId ?? null,
                bossDelay: wave.boss?.delay ?? 0,
                bossSpawned: false,
                groups: wave.enemyGroups.map(cfg => ({
                    config: cfg,
                    remain: cfg.count,
                    timer: cfg.delay,
                    started: cfg.delay <= 0,
                })),
                started: false,
            });
        }

        console.log(`[WaveSystem] 关卡 ${this._level.name} 开始`);
    }

    onTick(_world: World, dt: number): void {
        if (this._state !== 'running') return;
        this._levelTime += dt;

        for (const wave of this._runningWaves) {
            if (!wave.started) {
                if (this._levelTime >= wave.startTime) {
                    wave.started = true;
                    console.log(`[WaveSystem] 第 ${this._runningWaves.indexOf(wave) + 1} 波开始`);
                } else {
                    continue;
                }
            }
            this._tickWave(wave, dt);
        } 
    }

    private _tickWave(wave: RunningWave, dt: number): void {
        for (let i = wave.groups.length - 1; i >= 0; i--) {
            const g = wave.groups[i];

            if (!g.started) {
                g.timer -= dt;
                if (g.timer <= 0) g.started = true;
                else continue;
            }else{
                g.timer -= dt;
            }
            let guard = 0;
            while (g.timer <= 0 && g.remain > 0 && guard++ < 16) {
                this._world.bus.emit(
                    BATTLE_EVENT.ENEMY_SPAWN_REQUEST,
                    g.config.enemyType,
                    g.config.spawnSide ?? 'top',
                );
                g.remain--;

                if (g.config.spawnInterval <= 0) {
                    while (g.remain > 0) {
                        this._world.bus.emit(
                            BATTLE_EVENT.ENEMY_SPAWN_REQUEST,
                            g.config.enemyType,
                            g.config.spawnSide ?? 'top',
                        );
                        g.remain--;
                    }
                    g.timer = Infinity;
                } else {
                    g.timer += g.config.spawnInterval;
                }
            }

            if (g.remain <= 0) wave.groups.splice(i, 1);
        }


        if (wave.bossId && !wave.bossSpawned) {
            wave.bossDelay -= dt;
            if (wave.bossDelay <= 0) {
                this._world.bus.emit(BATTLE_EVENT.BOSS_SPAWN_REQUEST, wave.bossId);
                wave.bossSpawned = true;
            }
        }
    }

    private _onStateChanged(state: GameState): void {
        if (state === 'game_over' || state === 'level_clear') {
            this._state = 'finished';
        }
    }


    private _checkClear(): void {
        if (this._state !== 'running') return;

        const allSpawned = this._runningWaves.every(w => w.started && w.groups.length === 0);
        if (!allSpawned) return;

        const hasEnemies = this._world.hasAny('enemy') || this._world.hasAny('boss');
        if (!hasEnemies) {
            this._state = 'finished';
            // 在ExpSystem给经验之前，先发出通关信号
            this._world.bus.emit(BATTLE_EVENT.LEVEL_CLEAR);
        }
    }
}