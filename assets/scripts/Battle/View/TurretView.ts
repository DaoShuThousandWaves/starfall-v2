import { _decorator, Color, Component, Graphics, Node } from 'cc';
import type { EntityView } from '../../Engine/ViewRegistry';
import type { Entity } from '../../Engine/Entity';
import type { TurretEntity } from '../Entity/TurretEntity';
const { ccclass,  } = _decorator;

@ccclass('TurretView')
export class TurretView extends Component implements EntityView{

    private _turret: TurretEntity | null = null;

    onLoad() {
        const g = this.node.addComponent(Graphics);
        g.fillColor = new Color(180, 40, 40, 255);
        g.circle(0, 0, 14);
        g.fill();

        g.strokeColor = new Color(255, 200, 100, 255);
        g.lineWidth = 4;
        g.moveTo(0, 0);
        g.lineTo(0, 24);
        g.stroke();
    }

    bind(entity: Entity): void {
        this._turret = entity as TurretEntity;
        this.sync(0);
    }

    sync(dt: number): void {
        if (!this._turret) return;
        this.node.setPosition(this._turret.x, this._turret.y);
        this.node.angle = this._toCocosAngle(this._turret.aim.aimAngle);
    }

    /**
     * 数学角度 → Cocos node.angle。
     * 数学：0° = 右，90° = 上（Math.atan2 的约定）
     * Cocos：0° = 上，正数 = 逆时针
     * 转换：cocosAngle = mathAngle - 90
     */
    private _toCocosAngle(mathAngle: number): number {
        return mathAngle - 90;
    }

    unbind(): void {
        this._turret = null;
    }
}


