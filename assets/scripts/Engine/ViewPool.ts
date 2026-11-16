import type { EntityView } from './ViewRegistry';

/**
 * EntityView 实例池。按 kind 分池。
 * 节点还池时 active = false + removeFromParent，不 destroy。
 * 出池时 active = true，由 ViewRegistry.attach 重新挂 parent。
 */
export class ViewPool {
    private _pools = new Map<string, EntityView[]>();
    private _maxPerKind: number;

    constructor(maxPerKind = 256) {
        this._maxPerKind = maxPerKind;
    }

    public get(kind: string, factory: () => EntityView): EntityView {
        const pool = this._pools.get(kind);
        if (pool && pool.length > 0) {
            const view = pool.pop()!;
            view.node.active = true;   // 复位可见性（PlayerView 无敌闪烁可能置过 false）
            return view;
        }
        return factory();
    }

    public release(kind: string, view: EntityView): void {
        let pool = this._pools.get(kind);
        if (!pool) {
            pool = [];
            this._pools.set(kind, pool);
        }
        if (pool.length < this._maxPerKind) {
            view.node.active = false;
            view.node.removeFromParent();
            pool.push(view);
        } else {
            view.node.destroy();
        }
    }

    public clear(): void {
        for (const pool of this._pools.values()) {
            for (const view of pool) {
                if (view.node && view.node.isValid) {
                    view.node.destroy();
                }
            }
        }
        this._pools.clear();
    }
}