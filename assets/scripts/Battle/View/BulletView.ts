import { _decorator, Color, Component, Graphics } from 'cc';
import type { EntityView } from '../../Engine/ViewRegistry';
import type { Entity } from '../../Engine/Entity';
import type { Bullet } from '../Entity/Bullet';

const { ccclass } = _decorator;

const BULLET_COLORS: Record<string, Color> = {
    blue:     new Color(80, 160, 255, 255),
    yellow:   new Color(255, 220, 80, 255),
    laser:    new Color(255, 80, 200, 255),
    homing:   new Color(180, 80, 255, 255),
    particle: new Color(255, 255, 255, 255),
};

@ccclass('BulletView')
export class BulletView extends Component implements EntityView {

    private _bullet: Bullet | null = null;
    private _g: Graphics | null = null;

    bind(entity: Entity): void {
        this._bullet = entity as Bullet;
        this._draw();
        this.sync(0);
    }

    sync(_dt: number): void {
        if (!this._bullet) return;
        this.node.setPosition(this._bullet.x, this._bullet.y);
    }

    private _draw(): void {
        if (!this._bullet) return;
        if (!this._g) {
            this._g = this.node.getComponent(Graphics) ?? this.node.addComponent(Graphics);
        }
        this._g.clear();
        this._g.fillColor = BULLET_COLORS[this._bullet.bulletType] ?? BULLET_COLORS.yellow;
        this._g.circle(0, 0, 8);
        this._g.fill();
    }

    unbind(): void {
        this._bullet = null;
    }
}