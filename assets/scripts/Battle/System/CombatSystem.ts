import { GameData } from "../../Core/Data/GameData";
import type { Entity } from "../../Engine/Entity";
import type { System } from "../../Engine/System";
import type { World } from "../../Engine/World";
import { BATTLE_EVENT } from "../BattleEvents";
import type { Bullet } from "../Entity/Bullet";



interface GridCell {
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

    private _minCol = 0;
    private _maxCol = 0;
    private _minRow = 0;
    private _maxRow = 0;

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
                this._cells[c][r] = {  planes: [], dirty: false };
            }
        }
    }

    onTick(world: World, dt: number): void {

        // 1. 清理上一帧用过的 cell（只清 dirty 的）
        for (let i = 0; i < this._dirtyCells.length; i++) {
            const cell = this._dirtyCells[i];
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
            const targetFaction = bullet.faction === 'player' ? 'enemy' : 'player';
            const target = this._detectBulletCollision(bullet, targetFaction);
            if (target) world.bus.emit(BATTLE_EVENT.BULLET_HIT, bullet, target);
        }

   }


    private _insertAllPlanes(world: World, kind: string): void{
        for(const plane of world.query<Entity>(kind)){
            this._insertPlane(plane);
        }
    }

    private _calcCellRange(cx: number, cy: number, halfW: number, halfH: number): void {
        this._minCol = Math.floor((cx - halfW + this._halfW) / this._cellSize);
        this._maxCol = Math.floor((cx + halfW + this._halfW) / this._cellSize);
        this._minRow = Math.floor((cy - halfH + this._halfH) / this._cellSize);
        this._maxRow = Math.floor((cy + halfH + this._halfH) / this._cellSize);
    }

    private _insertPlane(plane: Entity): void {
        if (plane.health && plane.health.hp <= 0) return;
        const radius = plane.collisionRadius;
        this._calcCellRange(plane.x, plane.y, radius, radius);

        for (let col = this._minCol; col <= this._maxCol; col++) {
            for (let row = this._minRow; row <= this._maxRow; row++) {
                if (!this._isValidCell(col, row)) continue;
                const cell = this._cells[col][row];
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

    private _detectBulletCollision(bullet: Bullet, targetFaction: 'player' | 'enemy',): Entity | null {

        const rad = bullet.collisionRadius;
        this._calcCellRange(bullet.x, bullet.y, rad, rad);
    

        for (let col = this._minCol; col <= this._maxCol; col++) {
            for (let row = this._minRow; row <= this._maxRow; row++) {
                if (!this._isValidCell(col, row)) continue;
                const planes = this._cells[col][row].planes;
                for (let i = 0; i < planes.length; i++) {
                    const plane = planes[i];
                    if (plane.health && plane.health.hp <= 0) continue;
                    if (plane.faction !== targetFaction) continue;
                    if (this._isCircleOverlap(bullet, plane)) return plane;
                }
            }
        }
        return null;
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


