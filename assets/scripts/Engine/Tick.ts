import { _decorator, Component } from 'cc';
import { World } from './World';
import { ViewRegistry } from './ViewRegistry';

const { ccclass } = _decorator;

@ccclass('FixedTick')
export class FixedTick extends Component {
    private _world: World = null!;
    private _views: ViewRegistry = null!;
    private _accumulator = 0;
    private _fixedDt = 1 / 60;
    private _running = false;
   

    public setup(world: World, views: ViewRegistry, hz: number = 60): void {
        this._world = world;
        this._views = views;
        this._fixedDt = 1 / hz;   
    }

    public begin(): void {
        this._accumulator = 0; 
        this._running = true;
        this._world.start();
   
    }

    public stop(): void {
        this._running = false;
        this._accumulator = 0;
    }

    public resume(): void{
        this._running = true;
    }

    get isRunning(): boolean {   
        return this._running;
    }

    update(realDt: number): void {
        if (!this._running) return;
        this._accumulator += Math.min(realDt, 0.1);
        while (this._accumulator >= this._fixedDt) {
            this._world.tick(this._fixedDt);
            this._accumulator -= this._fixedDt;
        }
        this._views.syncAll(realDt);
    }
}