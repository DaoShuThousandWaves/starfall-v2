System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameData, OutOfBoundsSystem, _crd;

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

  _export("OutOfBoundsSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameData = _unresolved_2.GameData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9c042aX9itH7JG1qOjpsn03", "OutOfBoundsSystem", undefined);

      _export("OutOfBoundsSystem", OutOfBoundsSystem = class OutOfBoundsSystem {
        constructor() {
          this._margin = 50;
        }

        onTick(world, dt) {
          const halfW = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewW / 2 + this._margin;
          const halfH = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2 + this._margin;

          this._checkKind(world, 'bullet', halfW, halfH);

          this._checkKind(world, 'enemy', halfW, halfH);
        }

        _checkKind(world, kind, halfW, halfH) {
          for (const e of world.query(kind)) {
            if (this._isOutOfBounds(e, halfW, halfH)) {
              world.remove(e);
            }
          }
        }

        _isOutOfBounds(e, halfW, halfH) {
          return e.x < -halfW || e.x > halfW || e.y < -halfH || e.y > halfH;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c22ac7f6eb5e1c2967a95ed38c42773ec720c088.js.map