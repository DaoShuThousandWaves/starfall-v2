import { Entity } from '../../Engine/Entity';
import type { TurretConfig } from '../Config/TurretConfig';
import { HealthComp } from './Components/HealthComp';
import { AimComp } from './Components/AimComp';

export class TurretEntity extends Entity {
    readonly kind = 'turret';

    health = new HealthComp();
    aim = new AimComp();

    /** 所属 Boss 的 id */
    ownerId = 0;

    /** 配置（只读） */
    config: TurretConfig = null!;

    constructor() {
        super();
        this.faction = 'enemy';
        this.collisionRadius = 14;
    }
}