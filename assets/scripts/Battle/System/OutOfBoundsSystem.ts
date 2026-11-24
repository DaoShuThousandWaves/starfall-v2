import { GameData } from '../../Core/Data/GameData';
import type { Entity } from '../../Engine/Entity';
import type { System } from '../../Engine/System';
import type { World } from '../../Engine/World';
import { BATTLE_EVENT } from '../BattleEvents';





export class OutOfBoundsSystem implements System{
    
    private _margin = 50; 
    
    onTick(world:World,dt:number): void{

        const halfW = GameData.viewW / 2 + this._margin;
        const halfH = GameData.viewH / 2 + this._margin;
        this._checkKind(world, 'bullet', halfW, halfH);
        this._checkKind(world, 'enemy', halfW, halfH);
    }

    private _checkKind(world: World, kind: string, halfW: number, halfH: number): void {
        for (const e of world.query<Entity>(kind)) {
            if (this._isOutOfBounds(e, halfW, halfH)) {
                if(e.kind === 'enemy'){
                    world.bus.emit(BATTLE_EVENT.ENEMY_ESCAPED);
                }
               
                world.remove(e);
            }
        }
    }

    private _isOutOfBounds(e: Entity, halfW: number, halfH: number): boolean {
        return e.x < -halfW || e.x > halfW || e.y < -halfH || e.y > halfH;
    }
}


