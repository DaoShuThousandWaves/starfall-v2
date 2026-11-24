import { Entity } from "./Entity";
import { Bus } from "./Bus";
import type { System } from "./System";
import { ViewRegistry } from "./ViewRegistry";
import type { EntityPool } from "../Core/Pool/EntityPool";

export class World {

    public readonly bus: Bus;

    private _buckets: Map<string, Set<Entity>> = new Map();
    private _systems: System[] = [];
    private _views: ViewRegistry;
    private _pool: EntityPool | null;

    constructor(bus: Bus, views: ViewRegistry, pool: EntityPool | null = null) {
        this.bus = bus;
        this._views = views;
        this._pool = pool;
    }

    public addSystem(sys: System): void {
        this._systems.push(sys);
    }

    /** 从池取实体。池不存在时直接 factory() */
    public acquire<T extends Entity>(kind: string, factory: () => T): T {
        if (this._pool) return this._pool.get(kind, factory);
        return factory();
    }

    public add<T extends Entity>(e: T): T {
        let set = this._buckets.get(e.kind);
        if (!set) {
            set = new Set();
            this._buckets.set(e.kind, set);
        }
        set.add(e);
        this._views.attach(e);
        return e;
    }

    public remove(e: Entity): void {
        if (!e.alive) return;
        e.alive = false;
        this._buckets.get(e.kind)?.delete(e);
        this._views.detach(e);
        this._pool?.release(e);
    }

    public query<T extends Entity>(kind: string): Iterable<T> {
        return (this._buckets.get(kind) ?? []) as Iterable<T>;
    }

    public tick(dt: number): void {
        for (let i = 0; i < this._systems.length; ++i) {
            this._systems[i].onTick(this, dt);
        }
    }

    public start(): void {
        for (let i = 0; i < this._systems.length; ++i) {
            this._systems[i].onStart?.(this);
        }
    }

    public hasAny(kind: string): boolean {
        const set = this._buckets.get(kind);
        return set !== undefined && set.size > 0;
    }

    public destroy(): void {
        for (let i = 0; i < this._systems.length; ++i) {
            this._systems[i].onDestroy?.(this);
        }
        this._buckets.clear();
        this._views.clear();
        this._pool?.clear();
    }
}