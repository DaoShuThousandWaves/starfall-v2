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
          var halfW = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewW / 2 + this._margin;
          var halfH = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2 + this._margin;

          for (var b of world.query('bullet')) {
            if (this._isOut(b, halfW, halfH)) {
              world.remove(b);
            }
          }
        }

        _isOut(e, halfW, halfH) {
          return e.x < -halfW || e.x > halfW || e.y < -halfH || e.y > halfH;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=131dd18eaee46237a3bf3bd0123e54daa39be32a.js.map