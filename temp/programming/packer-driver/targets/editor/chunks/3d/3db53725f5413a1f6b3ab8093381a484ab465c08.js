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
          this._grid = new Map();
        }

        onStart(_world) {}

        onTick() {}

        _key(x, y) {
          return `${x},${y}`;
        }

        isOccupied(x, y) {
          return this._grid.has(this._key(x, y));
        }

        getAt(x, y) {
          return this._grid.get(this._key(x, y));
        }

        occupy(b) {
          this._grid.set(this._key(b.gridX, b.gridY), b);
        }

        release(x, y) {
          this._grid.delete(this._key(x, y));
        }

        clear() {
          this._grid.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3db53725f5413a1f6b3ab8093381a484ab465c08.js.map