System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HallEvents, GridSyncSystem, _crd;

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

  function _reportPossibleCrUseOfBuildingEntity(extras) {
    _reporterNs.report("BuildingEntity", "../Entity/BuildingEntity", _context.meta, extras);
  }

  _export("GridSyncSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      HallEvents = _unresolved_2.HallEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0c94gEyh1Nvq/lzTw2//32", "GridSyncSystem", undefined);

      _export("GridSyncSystem", GridSyncSystem = class GridSyncSystem {
        constructor(gridMap) {
          this._world = null;
          this._gridMap = void 0;
          this._gridMap = gridMap;
        }

        onStart(world) {
          this._world = world;
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_COMPLETED, this._onBuildCompleted, this); // 预留：未来拆除建筑时
          // world.bus.on(HallEvents.BUILD_REMOVED, this._onBuildRemoved, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_COMPLETED, this._onBuildCompleted, this); // world.bus.off(HallEvents.BUILD_REMOVED, this._onBuildRemoved, this);

          this._world = null;
        }

        onTick() {}

        _onBuildCompleted(b) {
          // 唯一的记账入口
          this._gridMap.place(b.gridX, b.gridY, b);
        } // 预留：未来拆除时清理格子
        // private _onBuildRemoved(b: BuildingEntity): void {
        //     this._gridMap.remove(b.gridX, b.gridY);
        // }


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d3adb361960643ec89cea6b5a5b403d8ba750783.js.map