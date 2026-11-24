System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameData, BATTLE_EVENT, CombatSystem, _crd;

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../../Core/Data/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../BattleEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../Entity/Bullet", _context.meta, extras);
  }

  _export("CombatSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameData = _unresolved_2.GameData;
    }, function (_unresolved_3) {
      BATTLE_EVENT = _unresolved_3.BATTLE_EVENT;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be5feaMktlHrbrVef3clO4F", "CombatSystem", undefined);

      _export("CombatSystem", CombatSystem = class CombatSystem {
        constructor() {
          this._cellSize = 64;
          this._cols = 0;
          this._rows = 0;
          this._halfW = 0;
          this._halfH = 0;
          this._cells = [];
          this._dirtyCells = [];
          this._minCol = 0;
          this._maxCol = 0;
          this._minRow = 0;
          this._maxRow = 0;
        }

        onStart(world) {
          this._halfW = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewW / 2;
          this._halfH = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2; // 网格覆盖屏幕范围，外扩 2 格

          this._cols = Math.ceil((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewW / this._cellSize) + 2;
          this._rows = Math.ceil((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / this._cellSize) + 2; // 预分配：一次性创建所有 cell，之后只复用不清空

          for (let c = 0; c < this._cols; c++) {
            this._cells[c] = [];

            for (let r = 0; r < this._rows; r++) {
              this._cells[c][r] = {
                planes: [],
                dirty: false
              };
            }
          }
        }

        onTick(world, dt) {
          // 1. 清理上一帧用过的 cell（只清 dirty 的）
          for (let i = 0; i < this._dirtyCells.length; i++) {
            const cell = this._dirtyCells[i];
            cell.planes.length = 0;
            cell.dirty = false;
          }

          this._dirtyCells.length = 0; // 子弹和敌机

          this._insertAllPlanes(world, 'enemy');

          this._insertAllPlanes(world, 'player');

          this._insertAllPlanes(world, 'boss');

          this._insertAllPlanes(world, 'turret'); //3.检测子弹碰撞


          for (const bullet of world.query('bullet')) {
            const targetFaction = bullet.faction === 'player' ? 'enemy' : 'player';

            this._detectBulletCollision(bullet, targetFaction, target => {
              world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                error: Error()
              }), BATTLE_EVENT) : BATTLE_EVENT).BULLET_HIT, bullet, target);
            });
          }
        }

        _insertAllPlanes(world, kind) {
          for (const plane of world.query(kind)) {
            this._insertPlane(plane);
          }
        }

        _calcCellRange(cx, cy, halfW, halfH) {
          this._minCol = Math.floor((cx - halfW + this._halfW) / this._cellSize);
          this._maxCol = Math.floor((cx + halfW + this._halfW) / this._cellSize);
          this._minRow = Math.floor((cy - halfH + this._halfH) / this._cellSize);
          this._maxRow = Math.floor((cy + halfH + this._halfH) / this._cellSize);
        }

        _insertPlane(plane) {
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

        _markDirty(cell) {
          if (!cell.dirty) {
            cell.dirty = true;

            this._dirtyCells.push(cell);
          }
        }

        _detectBulletCollision(bullet, targetFaction, onHit) {
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

                if (this._isCircleOverlap(bullet, plane)) {
                  onHit(plane);
                  return; // 一颗子弹最多命中一个目标
                }
              }
            }
          }
        }

        _isCircleOverlap(body1, body2) {
          const dx = body1.x - body2.x;
          const dy = body1.y - body2.y;
          const r = body1.collisionRadius + body2.collisionRadius;
          return dx * dx + dy * dy < r * r;
        }

        _isValidCell(c, r) {
          return c >= 0 && c < this._cols && r >= 0 && r < this._rows;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ae078b8a73e71f6d14155bd77624e3a8812d3dfb.js.map