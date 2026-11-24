System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BUILDING_CONFIG, HallEvents, GameData, worldToGrid, GhostSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridSystem(extras) {
    _reporterNs.report("GridSystem", "./GridSystem", _context.meta, extras);
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

  function _reportPossibleCrUseOfworldToGrid(extras) {
    _reporterNs.report("worldToGrid", "../Config/GridConfig", _context.meta, extras);
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
      worldToGrid = _unresolved_5.worldToGrid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "42f3b7nMLBGOZ35/mhwlrbx", "GhostSystem", undefined);

      _export("GhostSystem", GhostSystem = class GhostSystem {
        constructor(grid) {
          this._world = null;
          this._grid = void 0;
          this._typeId = '';
          this._gridX = -1;
          this._gridY = -1;
          this._hasPos = false;
          this._grid = grid;
        }

        onStart(world) {
          this._world = world;
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
          this._typeId = typeId;
          this._hasPos = false;

          this._emitState();
        }

        _onDrag(wx, wy) {
          if (!this._typeId) return; // 不在 PLACING，忽略

          const g = (_crd && worldToGrid === void 0 ? (_reportPossibleCrUseOfworldToGrid({
            error: Error()
          }), worldToGrid) : worldToGrid)(wx, wy);
          if (!g) return; // 拖到网格外，保持上次位置

          this._gridX = g.gridX;
          this._gridY = g.gridY;
          this._hasPos = true;

          this._emitState();
        }

        _onCancel() {
          this._typeId = '';
          this._hasPos = false;

          this._emitState();
        }

        _onBuildDone() {
          this._onCancel();
        }

        _onBuildFailed() {
          this._emitState(); // 失败保持 PLACING，只是重算 valid

        }

        _emitState() {
          if (!this._typeId || !this._hasPos) {
            this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).GHOST_STATE_CHANGED, {
              active: false,
              typeId: '',
              gridX: 0,
              gridY: 0,
              valid: false
            });

            return;
          }

          const cfg = (_crd && BUILDING_CONFIG === void 0 ? (_reportPossibleCrUseOfBUILDING_CONFIG({
            error: Error()
          }), BUILDING_CONFIG) : BUILDING_CONFIG)[this._typeId];
          const coins = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.data.coins;
          const empty = !this._grid.isOccupied(this._gridX, this._gridY);
          const affordable = coins >= cfg.cost;

          this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).GHOST_STATE_CHANGED, {
            active: true,
            typeId: this._typeId,
            gridX: this._gridX,
            gridY: this._gridY,
            valid: empty && affordable
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5eb9536d0c03205a5c41a33c19b61855eeea748e.js.map