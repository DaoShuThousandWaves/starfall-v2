import type { System } from "../../Engine/System";
import type { World } from "../../Engine/World";
import { BATTLE_EVENT } from "../BattleEvents";
import type { BulletType } from "../Config/EmitterConfig";
import { Bullet } from "../Entity/Bullet";



export interface BulletFireRequest {
    x: number;
    y: number;
    dirX: number;
    dirY: number;
    bulletSpeed: number;
    bulletDamage: number;
    bulletType: BulletType;    
    isPlayerBullet: boolean;     
    spreadCount?: number;
    spreadAngle?: number;
}

export class BulletSpawnSystem implements System {

  
    private _world: World = null!;

    onStart(world: World): void {
        this._world = world;
        world.bus.on(BATTLE_EVENT.WEAPON_FIRE, this._onFire, this);
    }

    onDestroy(world: World): void {
        world.bus.off(BATTLE_EVENT.WEAPON_FIRE, this._onFire, this); 
        this._world = null!;
    }

    // 事件驱动的，不需要每帧遍历
    onTick(world: World, dt: number): void {
        // 留空
    }


    private _onFire(req: BulletFireRequest): void {
        const count = req.spreadCount ?? 1;
        const spreadDeg = req.spreadAngle ?? 0;

        if (count <= 1 || spreadDeg <= 0) {
            this._spawnOne(req.x, req.y, req.dirX, req.dirY, req);
            return;
        }

        const baseRad = Math.atan2(req.dirY, req.dirX);
        const totalRad = spreadDeg * Math.PI / 180;
        const step = totalRad / (count - 1);
        const start = baseRad - totalRad / 2;

        for (let i = 0; i < count; i++) {
            const a = start + step * i;
            this._spawnOne(req.x, req.y, Math.cos(a), Math.sin(a), req);
        }
    }

    private _spawnOne(x: number, y: number, dirX: number, dirY: number, req: BulletFireRequest): void {
        const b = this._world.acquire('bullet', () => new Bullet());
        b.x = x;
        b.y = y;
        b.dirX = dirX;
        b.dirY = dirY;
        b.speed = req.bulletSpeed;
        b.damage = req.bulletDamage;
        b.bulletType = req.bulletType;
        b.faction = req.isPlayerBullet ? 'player' : 'enemy';   // ← 用 faction
        this._world.add(b);
    }
     

}