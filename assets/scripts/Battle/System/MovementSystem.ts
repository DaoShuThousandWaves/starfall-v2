import type { System } from "../../Engine/System";
import type { World } from "../../Engine/World";
import type { Bullet } from "../Entity/Bullet";
import type { EnemyEntity } from "../Entity/EnemyEntity";


export class MovementSystem implements System{
    
    onTick(world:World,dt:number): void{
        this._tickBullets(world, dt);
        this._tickEnemies(world, dt);
    }

    private _tickBullets(world: World, dt: number): void {
        for(const b of world.query<Bullet>('bullet')){
            b.x +=  b.dirX * b.speed * dt;
            b.y +=  b.dirY * b.speed * dt;
        }
    }

    private _tickEnemies(world: World, dt: number): void {
        for(const p of world.query<EnemyEntity>('enemy')){
            switch(p.move.pattern){
                case 'straight':
                    this._moveStraight(p, dt);
                    break;
                case 'sine':
                    this._moveSine(p, dt);
                    break;
                case 'none':
                default:
                    // 不动
                    break;
            }
        }
    }

    private _moveStraight(p: EnemyEntity, dt: number): void {
        p.x += p.move.dirX * p.move.speed * dt;
        p.y += p.move.dirY * p.move.speed * dt;
    }

    private _moveSine(p: EnemyEntity, dt: number): void{
        p.y -= p.move.speed * dt;
        p.move.phase += p.move.frequency * dt;
        p.x = p.move.originX + Math.sin(p.move.phase) * p.move.amplitude;
    }
}


