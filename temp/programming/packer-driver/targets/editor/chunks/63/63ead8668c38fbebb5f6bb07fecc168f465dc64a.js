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

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "../Entity/Plane", _context.meta, extras);
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
                bullets: [],
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
            cell.bullets.length = 0;
            cell.planes.length = 0;
            cell.dirty = false;
          }

          this._dirtyCells.length = 0; // 2. 插入子弹和敌机

          for (const bullet of world.query('bullet')) {
            this._insertBullet(bullet);
          }

          for (const plane of world.query('enemy')) {
            this._insertPlane(plane);
          }

          for (const plane of world.query('player')) {
            this._insertPlane(plane);
          }

          for (const boss of world.query('boss')) {
            this._insertPlane(boss);
          } //3.检测子弹碰撞


          for (const bullet of world.query('bullet')) {
            const targetKind = bullet.isPlayerBullet ? 'enemy' : 'player';

            this._detectBulletCollision(bullet, targetKind, target => {
              world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                error: Error()
              }), BATTLE_EVENT) : BATTLE_EVENT).BULLET_HIT, bullet, target);
            });
          }
        }

        _insertBullet(bullet) {
          const c = Math.floor((bullet.x + this._halfW) / this._cellSize);
          const r = Math.floor((bullet.y + this._halfH) / this._cellSize);

          if (!this._isValidCell(c, r)) {
            return;
          }

          const cell = this._cells[c][r];
          cell.bullets.push(bullet);

          this._markDirty(cell);
        }

        _insertPlane(plane) {
          if (plane.hp <= 0) return;
          const c = Math.floor((plane.x + this._halfW) / this._cellSize);
          const r = Math.floor((plane.y + this._halfH) / this._cellSize);

          if (!this._isValidCell(c, r)) {
            return;
          }

          const cell = this._cells[c][r];
          cell.planes.push(plane);

          this._markDirty(cell);
        }

        _markDirty(cell) {
          if (!cell.dirty) {
            cell.dirty = true;

            this._dirtyCells.push(cell);
          }
        }

        _detectBulletCollision(bullet, targetKind, onHit) {
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
                if (plane.hp <= 0) continue;
                if (!this._isTargetKind(plane.kind, targetKind)) continue;

                if (this._isCircleOverlap(bullet, plane)) {
                  onHit(plane);
                  return; // 一颗子弹最多命中一个目标
                }
              }
            }
          }
        }

        _isTargetKind(actualKind, targetKind) {
          if (targetKind === 'player') return actualKind === 'player';
          return actualKind === 'enemy' || actualKind === 'boss';
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
//# sourceMappingURL=63ead8668c38fbebb5f6bb07fecc168f465dc64a.js.map