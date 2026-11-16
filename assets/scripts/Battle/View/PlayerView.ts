import { _decorator, Color, Component, Graphics } from 'cc';
import type { EntityView } from '../../Engine/ViewRegistry';
import type { Entity } from '../../Engine/Entity';
import type { PlayerEntity } from '../Entity/PlayerEntity';
const { ccclass } = _decorator;

@ccclass('PlayerView')
export class PlayerView extends Component implements EntityView {

    private _plane: PlayerEntity | null = null;

    onLoad() {
        const g = this.node.addComponent(Graphics);
        g.fillColor = new Color(80, 200, 255, 255);
        g.moveTo(0, 20);
        g.lineTo(-15, -10);
        g.lineTo(15, -10);
        g.close();
        g.fill();
    }

    bind(entity: Entity): void {
        this._plane = entity as PlayerEntity;
        this.sync(0);
    }

    sync(_dt: number): void {
        if (!this._plane) return;
        this.node.setPosition(this._plane.x, this._plane.y);

        const h = this._plane.health;
        if (h.invincibleTimer > 0) {
            const flash = Math.floor(h.invincibleTimer * 10) % 2 === 0;
            this.node.active = flash;
        } else if (!this.node.active) {
            this.node.active = true;
        }
    }

    unbind(): void {
        this._plane = null;
    }
}