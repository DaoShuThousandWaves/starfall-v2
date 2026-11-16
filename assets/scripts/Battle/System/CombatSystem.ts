import { GameData } from "../../Core/Data/GameData";
import type { Entity } from "../../Engine/Entity";
import type { System } from "../../Engine/System";
import type { World } from "../../Engine/World";
import { BATTLE_EVENT } from "../BattleEvents";
import type { Bullet } from "../Entity/Bullet";



interface GridCell {
    bullets: Bullet[];
    planes: Entity[];
    dirty: boolean;
}

interface CircleBody extends Entity {
    collisionRadius: number;
}


export class CombatSystem implements System {

    private _cellSize = 64;
    private _cols = 0;
    private _rows = 0;
    private _halfW = 0;
    private _halfH = 0;
    private _cells: GridCell[][] = [];
    private _dirtyCells: GridCell[] = [];

    onStart(world: World): void {
        this._halfW = GameData.viewW / 2;
        this._halfH = GameData.viewH / 2;
        // 网格覆盖屏幕范围，外扩 2 格
        this._cols = Math.ceil(GameData.viewW / this._cellSize) + 2;
        this._rows = Math.ceil(GameData.viewH / this._cellSize) + 2;

        // 预分配：一次性创建所有 cell，之后只复用不清空
        for (let c = 0; c < this._cols; c++) {
            this._cells[c] = [];
            for (let r = 0; r < this._rows; r++) {
                this._cells[c][r] = { bullets: [], planes: [], dirty: false };
            }
        }
    }

    onTick(world: World, dt: number): void {

        // 1. 清理上一帧用过的 cell（只清 dirty 的）
        for (let i = 0; i < this._dirtyCells.length; i++) {
            const cell = this._dirtyCells[i];
            cell.bullets.length = 0;
            cell.planes.length = 0;
            cell.dirty = false;
        }
        this._dirtyCells.length = 0;

        // 子弹和敌机
        this._insertAllPlanes(world, 'enemy');
        this._insertAllPlanes(world, 'player');
        this._insertAllPlanes(world, 'boss');
        this._insertAllPlanes(world, 'turret');

        //3.检测子弹碰撞
        for (const bullet of world.query<Bullet>('bullet')) {
            this._insertBullet(bullet);
            const targetFaction = bullet.faction === 'player' ? 'enemy' : 'player';
            this._detectBulletCollision(bullet, targetFaction, 
                (target) => {world.bus.emit(BATTLE_EVENT.BULLET_HIT,bullet,target);}
            );
        }

   }

    private _insertBullet(bullet: Bullet): void{
        const c = Math.floor((bullet.x + this._halfW) / this._cellSize);
        const r = Math.floor((bullet.y + this._halfH) / this._cellSize);
        if(!this._isValidCell(c,r)){
            return;
        }
        const cell = this._cells[c][r];
        cell.bullets.push(bullet);
        this._markDirty(cell);
    }

    private _insertAllPlanes(world: World, kind: string): void{
        for(const plane of world.query<Entity>(kind)){
            this._insertPlane(plane);
        }
    }

    private _insertPlane(plane: Entity): void {
        if (plane.health && plane.health.hp <= 0) return;
        const radius = plane.collisionRadius;
        const minC = Math.floor((plane.x - radius + this._halfW) / this._cellSize);
        const maxC = Math.floor((plane.x + radius + this._halfW) / this._cellSize);
        const minR = Math.floor((plane.y - radius + this._halfH) / this._cellSize);
        const maxR = Math.floor((plane.y + radius + this._halfH) / this._cellSize);

        for (let c = minC; c <= maxC; c++) {
            for (let r = minR; r <= maxR; r++) {
                if (!this._isValidCell(c, r)) continue;
                const cell = this._cells[c][r];
                cell.planes.push(plane);
                this._markDirty(cell);
            }
        }
    }

    private _markDirty(cell: GridCell): void{
        if(!cell.dirty){
            cell.dirty = true;
            this._dirtyCells.push(cell);
        }
    }

    private _detectBulletCollision(
        bullet: Bullet, 
        targetFaction: 'player' | 'enemy',
        onHit: (target: Entity) => void): void {

        const c = Math.floor((bullet.x + this._halfW) / this._cellSize);
        const r = Math.floor((bullet.y + this._halfH) / this._cellSize);

        for (let dc = -1; dc <= 1; dc++) {
            for (let dr = -1; dr <= 1; dr++) {
                const cc = c + dc;
                const rr = r + dr;
                if (!this._isValidCell(cc, rr)) continue;
                const cell = this._cells[cc][rr];
                for (let i = 0; i < cell.planes.length; i++) {
                    const plane = cell.planes[i];
                    if (plane.health && plane.health.hp <= 0) continue;
                    if (plane.faction !== targetFaction) continue;
                    if (this._isCircleOverlap(bullet, plane)) {
                        onHit(plane);
                        return;   // 一颗子弹最多命中一个目标
                    }
                }
            }
        }
    }

    private _isCircleOverlap(body1 : CircleBody, body2: CircleBody): boolean{
        const dx = body1.x - body2.x;
        const dy = body1.y - body2.y;
        const r = body1.collisionRadius + body2.collisionRadius;
        return dx * dx + dy * dy < r *  r
    }



    private _isValidCell(c: number, r: number): boolean{
        return c >= 0 && c < this._cols && r >= 0 && r < this._rows;
    }
}


