import { Entity } from '../../Engine/Entity';
import { HealthComp } from './Components/HealthComp';
import { WeaponComp } from './Components/WeaponComp';
import { ExpComp } from './Components/ExpComp';

export class PlayerEntity extends Entity {
    readonly kind = 'player';

    health = new HealthComp();
    weapon = new WeaponComp();
    exp = new ExpComp();

    constructor() {
        super();
        this.faction = 'player';
        this.collisionRadius = 20;
        this.health.hitInvincibleDuration = 1.0;
    }
}