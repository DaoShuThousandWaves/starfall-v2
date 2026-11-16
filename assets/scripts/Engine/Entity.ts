import type { HealthComp } from '../Battle/Entity/Components/HealthComp';

export type Faction = 'player' | 'enemy' | 'neutral';

export class Entity {
    private static _nextId = 1;
    public readonly id: number;
    public x = 0;
    public y = 0;
    public alive = true;
    public readonly kind: string = '';
    public faction: Faction = 'neutral';
    public collisionRadius = 0;

    /**
     * 可选的生命值组件。子弹没有 health，玩家/敌人/Boss/炮台有。
     * 基类声明为可选，子类覆盖为必选。
     */
    public health?: HealthComp;

    constructor() {
        this.id = Entity._nextId++;
    }
}