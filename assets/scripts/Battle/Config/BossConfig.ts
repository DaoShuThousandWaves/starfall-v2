import type { TurretConfig, TurretScheduleConfig } from "./TurretConfig";


export interface BossStageConfig {
    /**
     * 进入这个阶段的 HP 比例阈值。
     * - 第一阶段不写（永远是 100% 进入）
     * - 第二阶段写 0.7（HP ≤ 70% 进入）
     * - 第三阶段写 0.35（HP ≤ 35% 进入）
     */
    hpRatio?: number;

    /** 这个阶段的炮台配置 */
    turrets: TurretConfig[];

    /** 这个阶段的炮台调度。不填 = volley */
    turretSchedule?: TurretScheduleConfig;
}

export interface BossConfigData {
    id: string;
    name: string;
    maxHp: number;
    collisionRadius: number;

    /** 阶段配置数组。索引 0 = 初始阶段 */
    stages: BossStageConfig[];
}


export const BOSS_CONFIG: Record<string, BossConfigData> = {
    whale_boss: {
        id: 'whale_boss',
        name: '吴鲸波',
        maxHp: 3000,
        collisionRadius: 105,
        stages: [
            // ===== 阶段 0：双炮交替（100%） =====
            {
                turrets: [
                    {
                        offsetX: -80, offsetY: 0,
                        hp: 200, collisionRadius: 14, 
                        aimMode: 'target', aimSpeed: 90,
                        baseAngle: 180, oscRange: 0,
                        fireInterval: 1.0,
                        bulletDamage: 8, bulletSpeed: 200, bulletType: 'yellow',
                        spreadCount: 1, spreadAngle: 0,
                    },
                    {
                        offsetX: 80, offsetY: 0,
                        hp: 200, collisionRadius: 14, 
                        aimMode: 'target', aimSpeed: 90,
                        baseAngle: 180, oscRange: 0,
                        fireInterval: 1.0,
                        bulletDamage: 8, bulletSpeed: 200, bulletType: 'yellow',
                        spreadCount: 1, spreadAngle: 0,
                    },
                ],
                turretSchedule: {
                    mode: 'sequence',
                    burstDuration: 2,
                    burstGap: 1,
                    loop: true,
                },
            },

            // ===== 阶段 1：四炮扇形（70%） =====
            {
                hpRatio: 0.7,
                turrets: [
                    {
                        offsetX: -120, offsetY: 20,
                         hp: 200, collisionRadius: 14,
                        aimMode: 'target', aimSpeed: 120,
                        baseAngle: 180, oscRange: 0,
                        fireInterval: 0.8,
                        bulletDamage: 10, bulletSpeed: 220, bulletType: 'yellow',
                        spreadCount: 3, spreadAngle: 30,   // ← 扇形 3 发
                    },
                    {
                        offsetX: 120, offsetY: 20,
                         hp: 200, collisionRadius: 14,
                        aimMode: 'target', aimSpeed: 120,
                        baseAngle: 180, oscRange: 0,
                        fireInterval: 0.8,
                        bulletDamage: 10, bulletSpeed: 220, bulletType: 'yellow',
                        spreadCount: 3, spreadAngle: 30,
                    },
                ],
                turretSchedule: {
                    mode: 'volley',   // ← 齐射
                },
            },

            // ===== 阶段 2：单炮狂射（35%） =====
            {
                hpRatio: 0.35,
                turrets: [
                    {
                        offsetX: 0, offsetY: -60,
                        hp: 200, collisionRadius: 14,
                        aimMode: 'target', aimSpeed: 180,
                        baseAngle: 270, oscRange: 0,
                        fireInterval: 0.4,       // ← 射速翻倍
                        bulletDamage: 12, bulletSpeed: 260, bulletType: 'yellow',
                        spreadCount: 2, spreadAngle: 20,
                    },
                ],
                turretSchedule: {
                    mode: 'volley',
                },
            },
        ],
    },
};