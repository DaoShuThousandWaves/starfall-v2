System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ProduceSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingEntity(extras) {
    _reporterNs.report("BuildingEntity", "../Entity/BuildingEntity", _context.meta, extras);
  }

  _export("ProduceSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f9d2ft7bhB7YmHbb4RC6kO", "ProduceSystem", undefined);

      _export("ProduceSystem", ProduceSystem = class ProduceSystem {
        onTick(world, dt) {
          for (var b of world.query('building')) {
            if (b.effectiveIncomePerSecond <= 0) continue;
            b.pendingIncome = Math.min(b.pendingIncome + b.effectiveIncomePerSecond * dt, b.effectiveIncomeCap);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c47a570fc5ff6e0cdd1ccc6313e8f601137706d9.js.map