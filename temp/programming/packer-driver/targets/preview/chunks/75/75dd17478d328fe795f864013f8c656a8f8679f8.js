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

          for (var c = 0; c < this._cols; c++) {
            this._cells[c] = [];

            for (var r = 0; r < this._rows; r++) {
              this._cells[c][r] = {
                bullets: [],
                planes: [],
                dirty: false
              };
            }
          }
        }

        onTick(world, dt) {
          var _this = this;

          // 1. 清理上一帧用过的 cell（只清 dirty 的）
          for (var i = 0; i < this._dirtyCells.length; i++) {
            var cell = this._dirtyCells[i];
            cell.bullets.length = 0;
            cell.planes.length = 0;
            cell.dirty = false;
          }

          this._dirtyCells.length = 0; // 2. 插入子弹和敌机

          for (var b of world.query('bullet')) {
            this._insertBullet(b);
          }

          for (var p of world.query('enemy')) {
            this._insertPlane(p);
          }

          for (var _p of world.query('player')) {
            this._insertPlane(_p);
          } //3.检测子弹碰撞


          var _loop = function _loop(_b) {
            var targetKind = _b.isPlayerBullet ? 'enemy' : 'player';

            _this._checkBullet(_b, targetKind, target => {
              world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                error: Error()
              }), BATTLE_EVENT) : BATTLE_EVENT).BULLET_HIT, _b, target);
            });
          };

          for (var _b of world.query('bullet')) {
            _loop(_b);
          }
        }

        _insertBullet(b) {
          var c = Math.floor((b.x + this._halfW) / this._cellSize);
          var r = Math.floor((b.y + this._halfH) / this._cellSize);

          if (!this._valid(c, r)) {
            return;
          }

          var cell = this._cells[c][r];
          cell.bullets.push(b);

          this._markDirty(cell);
        }

        _insertPlane(p) {
          if (p.hp <= 0) return;
          var c = Math.floor((p.x + this._halfW) / this._cellSize);
          var r = Math.floor((p.y + this._halfH) / this._cellSize);

          if (!this._valid(c, r)) {
            return;
          }

          var cell = this._cells[c][r];
          cell.planes.push(p);

          this._markDirty(cell);
        }

        _markDirty(cell) {
          if (!cell.dirty) {
            cell.dirty = true;

            this._dirtyCells.push(cell);
          }
        }

        _checkBullet(b, targetKind, onHit) {
          var c = Math.floor((b.x + this._halfW) / this._cellSize);
          var r = Math.floor((b.y + this._halfH) / this._cellSize);

          for (var dc = -1; dc <= 1; dc++) {
            for (var dr = -1; dr <= 1; dr++) {
              var cc = c + dc;
              var rr = r + dr;
              if (!this._valid(cc, rr)) continue;
              var cell = this._cells[cc][rr];

              for (var i = 0; i < cell.planes.length; i++) {
                var p = cell.planes[i];
                if (p.hp <= 0) continue;
                if (p.kind !== targetKind) continue;

                if (this._hit(b, p)) {
                  onHit(p);
                  return; // 一颗子弹最多命中一个目标
                }
              }
            }
          }
        }

        _hit(a, b) {
          var dx = a.x - b.x;
          var dy = a.y - b.y;
          var r = a.collisionRadius + b.collisionRadius;
          return dx * dx + dy * dy < r * r;
        }

        _valid(c, r) {
          return c >= 0 && c < this._cols && r >= 0 && r < this._rows;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75dd17478d328fe795f864013f8c656a8f8679f8.js.map