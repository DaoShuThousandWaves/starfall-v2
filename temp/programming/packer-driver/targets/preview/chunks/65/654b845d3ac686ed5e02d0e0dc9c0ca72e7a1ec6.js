System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HallEvents, localToGrid, HallClickSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridMap(extras) {
    _reporterNs.report("GridMap", "../Data/GridMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "../HallEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridCoord(extras) {
    _reporterNs.report("GridCoord", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalToGrid(extras) {
    _reporterNs.report("localToGrid", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingEntity(extras) {
    _reporterNs.report("BuildingEntity", "../Entity/BuildingEntity", _context.meta, extras);
  }

  _export("HallClickSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      HallEvents = _unresolved_2.HallEvents;
    }, function (_unresolved_3) {
      localToGrid = _unresolved_3.localToGrid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a7f4v59wtIHK1ns4BZ+iGY", "HallClickSystem", undefined);

      _export("HallClickSystem", HallClickSystem = class HallClickSystem {
        constructor(gridMap) {
          this._world = null;
          this._gridMap = void 0;
          this._gridMap = gridMap;
        }

        onStart(world) {
          this._world = world;
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).INPUT_CLICK, this._onClick, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).INPUT_CLICK, this._onClick, this);
        }

        onTick(world, dt) {} // ===== 核心：一次点击的分派 =====


        _onClick(localX, localY) {
          var g = (_crd && localToGrid === void 0 ? (_reportPossibleCrUseOflocalToGrid({
            error: Error()
          }), localToGrid) : localToGrid)(localX, localY);
          if (!g) return; // 点到地图外面了

          var building = this._gridMap.getAt(g.gridX, g.gridY);

          if (building) {
            // 有建筑 → 收金（现在还没建筑可点，但别删）
            return;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=654b845d3ac686ed5e02d0e0dc9c0ca72e7a1ec6.js.map