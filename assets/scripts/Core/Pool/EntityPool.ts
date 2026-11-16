import type { Entity } from '../../Engine/Entity';

export class EntityPool {
    private _pools = new Map<string, Entity[]>();
    private _maxPerKind: number;

    constructor(maxPerKind = 512) {
        this._maxPerKind = maxPerKind;
    }

    get<T extends Entity>(kind: string, factory: () => T): T {
        const pool = this._pools.get(kind);
        if (pool && pool.length > 0) {
            const e = pool.pop() as T;
            e.alive = true;
            return e;
        }
        return factory();
    }

    release(e: Entity): void {
        let pool = this._pools.get(e.kind);
        if (!pool) {
            pool = [];
            this._pools.set(e.kind, pool);
        }
        if (pool.length < this._maxPerKind) {
            pool.push(e);
        }
    }

    clear(): void {
        this._pools.clear();
    }
}