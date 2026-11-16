

export type BulletType = 'blue' | 'yellow' | 'laser' | 'homing' | 'particle';

/** 发射参数公共部分。纯配置，只读，不含运行时状态 */
export interface EmitterConfig {
    /** 开火间隔（秒） */
    fireInterval: number;
    bulletType: BulletType;
    /** 子弹速度（像素/秒） */
    bulletSpeed: number;
    /** 子弹伤害 */
    bulletDamage: number;
    /** 一次发射几颗。不填 = 1 */
    spreadCount?: number;
    /** 扇形总角度（度）。spreadCount > 1 时生效。不填 = 0 */
    spreadAngle?: number;
}