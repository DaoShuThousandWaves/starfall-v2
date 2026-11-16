import type { WeaponData } from '../WeaponData';

export class WeaponComp {
    weapons: WeaponData[] = [];

    // 卡牌修正值。配置只读，修正值写在这里
    damageMultiplier = 1;
    fireRateMultiplier = 1;
    bulletSpeedMultiplier = 1;
    extraBulletCount = 0;
}