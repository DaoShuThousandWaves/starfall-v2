System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BUILDING_CONFIG, HallEvents, GameData, localToGrid, gridToLocal, GhostEntity, GhostSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridMap(extras) {
    _reporterNs.report("GridMap", "../Data/GridMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBUILDING_CONFIG(extras) {
    _reporterNs.report("BUILDING_CONFIG", "../Config/BuildingConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "../HallEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../../Core/Data/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalToGrid(extras) {
    _reporterNs.report("localToGrid", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgridToLocal(extras) {
    _reporterNs.report("gridToLocal", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGhostEntity(extras) {
    _reporterNs.report("GhostEntity", "../Entity/GhostEntity", _context.meta, extras);
  }

  _export("GhostSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BUILDING_CONFIG = _unresolved_2.BUILDING_CONFIG;
    }, function (_unresolved_3) {
      HallEvents = _unresolved_3.HallEvents;
    }, function (_unresolved_4) {
      GameData = _unresolved_4.GameData;
    }, function (_unresolved_5) {
      localToGrid = _unresolved_5.localToGrid;
      gridToLocal = _unresolved_5.gridToLocal;
    }, function (_unresolved_6) {
      GhostEntity = _unresolved_6.GhostEntity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "42f3b7nMLBGOZ35/mhwlrbx", "GhostSystem", undefined);

      _export("GhostSystem", GhostSystem = class GhostSystem {
        constructor(gridMap) {
          this._world = null;
          this._gridMap = void 0;
          this._ghost = null;
          this._gridMap = gridMap;
        }

        onStart(world) {
          this._world = world; // 开局建一个唯一的幽灵实体，加进 World

          this._ghost = this._world.acquire('ghost', () => new (_crd && GhostEntity === void 0 ? (_reportPossibleCrUseOfGhostEntity({
            error: Error()
          }), GhostEntity) : GhostEntity)());

          this._world.add(this._ghost);

          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_TYPE_SELECTED, this._onTypeSelected, this);
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).INPUT_DRAG, this._onDrag, this);
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_CANCEL, this._onCancel, this);
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_COMPLETED, this._onBuildDone, this);
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_FAILED, this._onBuildFailed, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_TYPE_SELECTED, this._onTypeSelected, this);
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).INPUT_DRAG, this._onDrag, this);
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_CANCEL, this._onCancel, this);
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_COMPLETED, this._onBuildDone, this);
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_FAILED, this._onBuildFailed, this);
          this._world = null;
        }

        onTick() {}

        _onTypeSelected(typeId) {
          if (!(_crd && BUILDING_CONFIG === void 0 ? (_reportPossibleCrUseOfBUILDING_CONFIG({
            error: Error()
          }), BUILDING_CONFIG) : BUILDING_CONFIG)[typeId]) return;
          this._ghost.typeId = typeId;
          this._ghost.active = false;
        }

        _onDrag(wx, wy) {
          if (!this._ghost.typeId) return;
          var g = (_crd && localToGrid === void 0 ? (_reportPossibleCrUseOflocalToGrid({
            error: Error()
          }), localToGrid) : localToGrid)(wx, wy);
          if (!g) return;
          this._ghost.gridX = g.gridX;
          this._ghost.gridY = g.gridY;
          this._ghost.active = true; // 算坐标（提前算好给 sync 用）

          var pos = (_crd && gridToLocal === void 0 ? (_reportPossibleCrUseOfgridToLocal({
            error: Error()
          }), gridToLocal) : gridToLocal)(g.gridX, g.gridY);
          this._ghost.x = pos.x;
          this._ghost.y = pos.y; // 算合法性

          var cfg = (_crd && BUILDING_CONFIG === void 0 ? (_reportPossibleCrUseOfBUILDING_CONFIG({
            error: Error()
          }), BUILDING_CONFIG) : BUILDING_CONFIG)[this._ghost.typeId];
          var affordable = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.data.coins >= cfg.cost;

          var isOccupied = this._gridMap.isOccupied(g.gridX, g.gridY);

          this._ghost.valid = !isOccupied && affordable;
        }

        _onCancel() {
          this._ghost.typeId = '';
          this._ghost.active = false;
        }

        _onBuildDone() {
          this._onCancel();
        }

        _onBuildFailed() {// 建造失败，幽灵保持现状，什么都不用做。
          // 如果非要加反馈，可以在这里把 this._ghost.valid 临时设为 false 之类的
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e41a45e1f41b294214745c461d46055971d46a5.js.map