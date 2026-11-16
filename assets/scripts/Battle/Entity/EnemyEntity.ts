import { Entity } from '../../Engine/Entity';
import { HealthComp } from './Components/HealthComp';
import { WeaponComp } from './Components/WeaponComp';
import { MoveComp } from './Components/MoveComp';

export class EnemyEntity extends Entity {
    readonly kind = 'enemy';

    health = new HealthComp();
    weapon = new WeaponComp();
    move = new MoveComp();

    constructor() {
        super();
        this.faction = 'enemy';
        this.collisionRadius = 20;
    }
}