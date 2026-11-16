import type { EmitterConfig } from './EmitterConfig';

export type TurretAimMode = 'fixed' | 'target' | 'spin' | 'oscillate';

export interface TurretScheduleConfig {
    mode: 'volley' | 'sequence';
    burstDuration?: number;
    burstGap?: number;
    loop?: boolean;
}

export interface TurretConfig extends EmitterConfig {
    /** 相对 Boss 中心的固定偏移（像素） */
    offsetX: number;
    offsetY: number;

    /** 炮台 HP。可被玩家子弹摧毁 */
    hp: number;
    /** 碰撞检测半径（像素） */
    collisionRadius: number;

    aimMode: TurretAimMode;
    aimSpeed: number;
    baseAngle: number;
    oscRange: number;

    spreadCount: number;
    spreadAngle: number;
}