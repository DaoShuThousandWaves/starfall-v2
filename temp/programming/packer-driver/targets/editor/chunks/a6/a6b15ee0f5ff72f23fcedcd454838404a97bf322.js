System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MovementSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  _export("MovementSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99150NU59tFWrVm2MnedgsG", "MovementSystem", undefined);

      _export("MovementSystem", MovementSystem = class MovementSystem {
        onTick(world, dt) {
          this._tickBullets(world, dt);

          this._tickEnemies(world, dt);
        }

        _tickBullets(world, dt) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a6b15ee0f5ff72f23fcedcd454838404a97bf322.js.map