import { _decorator, Color, Component, Graphics, Node } from 'cc';
import type { EntityView } from '../../Engine/ViewRegistry';
import type { Entity } from '../../Engine/Entity';
import type { EnemyEntity } from '../Entity/EnemyEntity';

const { ccclass, } = _decorator;

@ccclass('EnemyView')
export class EnemyView extends Component implements EntityView {

    private _plane: EnemyEntity | null = null;

    onLoad() {
        const g = this.node.addComponent(Graphics);
        g.fillColor = new Color(255, 80, 80, 255);
        g.rect(-18, -18, 36, 36);
        g.fill();
    }


    bind(entity: Entity): void {
        this._plane = entity as EnemyEntity;    
        this.sync(0);
    }

    sync(dt: number): void {
        if(!this._plane) return;
        this.node.setPosition(this._plane.x, this._plane.y);
    }

    unbind(): void {
        this._plane = null;
    }
}


