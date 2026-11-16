import { Node } from 'cc';
import { Entity } from './Entity';
import { ViewPool } from './ViewPool';

export interface EntityView {
    readonly node: Node;
    bind(entity: Entity): void;
    sync(dt: number): void;
    unbind(): void;
}

export class ViewRegistry {
    private _viewsById: Map<number, EntityView> = new Map();
    private _activeViews: EntityView[] = [];
    private _factories: Map<string, (e: Entity) => EntityView> = new Map();
    private _layer: Node;
    private _pool: ViewPool;

    constructor(layer: Node, pool?: ViewPool) {
        this._layer = layer;
        this._pool = pool ?? new ViewPool(256);
    }

    public registerFactory(kind: string, factory: (e: Entity) => EntityView): void {
        this._factories.set(kind, factory);
    }

    public attach(e: Entity): EntityView | null {
        const factory = this._factories.get(e.kind);
        if (!factory) {
            console.warn(`[ViewRegistry] 未注册 kind = ${e.kind} 的工厂`);
            return null;
        }
        const view = this._pool.get(e.kind, () => factory(e));
        view.bind(e);
        view.node.parent = this._layer;
        this._viewsById.set(e.id, view);
        this._activeViews.push(view);
        return view;
    }

    public detach(e: Entity): void {
        const view = this._viewsById.get(e.id);
        if (!view) return;
        view.unbind();
        this._pool.release(e.kind, view);
        this._viewsById.delete(e.id);

        const idx = this._activeViews.indexOf(view);
        if (idx >= 0) {
            this._activeViews[idx] = this._activeViews[this._activeViews.length - 1];
            this._activeViews.pop();
        }
    }

    public syncAll(dt: number): void {
        for (let i = 0; i < this._activeViews.length; ++i) {
            this._activeViews[i].sync(dt);
        }
    }

    public clear(): void {
        for (let i = 0; i < this._activeViews.length; i++) {
            const view = this._activeViews[i];
            view.unbind();
            if (view.node && view.node.isValid) {
                view.node.destroy();
            }
        }
        this._viewsById.clear();
        this._activeViews.length = 0;
        this._pool.clear();
    }
}