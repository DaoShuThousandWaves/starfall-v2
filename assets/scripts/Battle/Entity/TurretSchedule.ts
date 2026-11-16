import type { TurretScheduleConfig } from '../Config/TurretConfig';

export interface TurretScheduleState {
    /** 配置（不变） */
    config: TurretScheduleConfig;

    /** 当前活跃炮台索引。-1 = 已结束（loop = false 打完一圈） */
    activeIndex: number;

    /** 当前炮台已持续开火时间（秒） */
    burstElapsed: number;

    /** 喘息剩余时间（秒）。> 0 时所有炮台停火 */
    gapTimer: number;
}