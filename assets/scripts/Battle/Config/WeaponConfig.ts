import type { EmitterConfig } from './EmitterConfig';

export interface WeaponConfig extends EmitterConfig {
    /** 发射方向（单位向量） */
    fireDirX: number;
    fireDirY: number;
}