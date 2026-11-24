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

    reset(): void {
        this.alive = true;
        this.x = 0;
        this.y = 0;
        this.health.hp = 100;
        this.health.maxHp = 100;
        this.health.invincibleTimer = 0;
        this.health.hitInvincibleDuration = 0;
        this.move.pattern = 'none';
        this.move.dirX = 0;
        this.move.dirY = 0;
        this.move.speed = 100;
        this.move.originX = 0;
        this.move.originY = 0;
        this.move.phase = 0;
        this.move.frequency = 3;
        this.move.amplitude = 80;
        this.weapon.weapons.length = 0;
        this.weapon.damageMultiplier = 1;
        this.weapon.fireRateMultiplier = 1;
        this.weapon.bulletSpeedMultiplier = 1;
        this.weapon.extraBulletCount = 0;
    }
}