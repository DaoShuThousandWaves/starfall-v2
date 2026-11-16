import { _decorator, Color, Component, Graphics,  } from 'cc';
import type { EntityView } from '../../Engine/ViewRegistry';
import type { Entity } from '../../Engine/Entity';
import type { BossEntity } from '../Entity/BossEntity';

const { ccclass} = _decorator;

@ccclass('BossView')
export class BossView extends Component implements EntityView{

    private _boss: BossEntity | null = null;


    onLoad() {
        const g = this.node.addComponent(Graphics);
        g.fillColor = new Color(220, 60, 60, 255);
        // 先画个占位方块，大小按 collisionRadius 后续可调
        g.rect(-50, -50, 100, 100);
        g.fill();
    }

    bind(entity: Entity): void {
        this._boss = entity as BossEntity;
        this.sync(0);
    }

    sync(dt: number): void {
        if(!this._boss){return;}
        this.node.setPosition(this._boss.x,this._boss.y);

    }   


    unbind(): void {
        this._boss = null;
    }
}


