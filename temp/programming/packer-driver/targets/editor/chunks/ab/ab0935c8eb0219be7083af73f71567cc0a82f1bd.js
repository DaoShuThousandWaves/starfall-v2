System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GridSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingEntity(extras) {
    _reporterNs.report("BuildingEntity", "../Entity/BuildingEntity", _context.meta, extras);
  }

  _export("GridSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa4dakt601Fe75SvbkMFEal", "GridSystem", undefined);

      _export("GridSystem", GridSystem = class GridSystem {
        constructor() {
          this._mapData = new Map();
        }

        onTick(world, dt) {}

        isOccupied() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab0935c8eb0219be7083af73f71567cc0a82f1bd.js.map