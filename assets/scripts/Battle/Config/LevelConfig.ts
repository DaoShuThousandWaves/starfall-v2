export type EnemyType = 'basic' | 'sine' | 'arc' | 'dive' | 'sprint';
export type SpawnSide = 'top' | 'left' | 'right';

export interface EnemyGroupConfig {
    enemyType: EnemyType;
    count: number;
    /** 组内间隔（秒）。0 = 一次性全出 */
    spawnInterval: number;
    /** 波次开始后延迟几秒才刷这组 */
    delay: number;
    spawnSide?: SpawnSide;    // 默认 'top'
}

export interface BossGroupConfig {
    bossId: string;           // 对应 BOSS_CONFIG 的 key
    delay: number;            // 波次开始后延迟几秒出 Boss
}

export interface WaveConfig {
    /** 关卡开始后第几秒开始这一波 */
    startTime: number;
    enemyGroups: EnemyGroupConfig[];
    boss?: BossGroupConfig;
}

export interface LevelConfigData {
    id: string;
    name: string;
    waves: WaveConfig[];
}



export const LEVELS: Record<string, LevelConfigData> = {
    level_1: {
        id: 'level_1',
        name: '冰原边境',
        waves: [
            {
                startTime: 0,
                enemyGroups: [
                    { enemyType: 'basic', count: 5, spawnInterval: 0.5, delay: 0, spawnSide: 'top' },
                ],
            },
            {
                startTime: 2,
                enemyGroups: [
                    { enemyType: 'basic', count: 4, spawnInterval: 0.4, delay: 0, spawnSide: 'top' },
                    { enemyType: 'sine',  count: 3, spawnInterval: 0.6, delay: 1.0, spawnSide: 'left' },
                ],
            },
            {
                startTime: 4,
                enemyGroups: [],
                boss: { bossId: 'whale_boss', delay: 1.0 },
            },
        ],
    },
};