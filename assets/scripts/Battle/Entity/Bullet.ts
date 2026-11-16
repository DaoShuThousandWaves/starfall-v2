import { Entity } from "../../Engine/Entity";
import type { BulletType } from "../Config/EmitterConfig";

export class Bullet extends Entity {
    readonly kind = 'bullet';

    public dirX = 0;
    public dirY = 1;
    public speed = 0;
    public damage = 0;
    public bulletType: BulletType = 'yellow';
    public collisionRadius = 8;
}