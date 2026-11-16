import type { WeaponConfig } from '../Config/WeaponConfig';


export interface WeaponData {
    config: WeaponConfig;
    cooldownTimer: number;   
    enabled: boolean;
}