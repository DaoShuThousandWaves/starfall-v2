System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BuildingEntity, BUILDING_CONFIG, HallEvents, gridToWorld, BuildSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridSystem(extras) {
    _reporterNs.report("GridSystem", "./GridSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingEntity(extras) {
    _reporterNs.report("BuildingEntity", "../Entity/BuildingEntity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBUILDING_CONFIG(extras) {
    _reporterNs.report("BUILDING_CONFIG", "../Config/BuildingConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "../HallEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgridToWorld(extras) {
    _reporterNs.report("gridToWorld", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpendRequestPayload(extras) {
    _reporterNs.report("SpendRequestPayload", "./EconomySystem", _context.meta, extras);
  }

  _export("BuildSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BuildingEntity = _unresolved_2.BuildingEntity;
    }, function (_unresolved_3) {
      BUILDING_CONFIG = _unresolved_3.BUILDING_CONFIG;
    }, function (_unresolved_4) {
      HallEvents = _unresolved_4.HallEvents;
    }, function (_unresolved_5) {
      gridToWorld = _unresolved_5.gridToWorld;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7810faDJW9AZLbWzoNC/UqO", "BuildSystem", undefined);

      _export("BuildSystem", BuildSystem = class BuildSystem {
        constructor(grid) {
          this._world = null;
          this._grid = void 0;
          this._grid = grid;
        }

        onStart(world) {
          this._world = world;
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).CLICK_GRID, this._onClickGrid, this);
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_REQUEST, this._onBuildRequest, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).CLICK_GRID, this._onClickGrid, this);
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_REQUEST, this._onBuildRequest, this);
          this._world = null;
        }

        onTick() {}

        _onClickGrid(p) {
          var b = this._grid.getAt(p.gridX, p.gridY); // 空格子 → 请求打开建造菜单


          if (!b) {
            this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).BUILD_MENU_OPEN, p.gridX, p.gridY);

            return;
          }

          var cfg = (_crd && BUILDING_CONFIG === void 0 ? (_reportPossibleCrUseOfBUILDING_CONFIG({
            error: Error()
          }), BUILDING_CONFIG) : BUILDING_CONFIG)[b.typeId];
          if (!cfg) return; // 有建筑 → 按配置分流

          if (cfg.onClick === 'start_battle') {
            this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).START_BATTLE);
          } else {
            this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).COLLECT_REQUEST, {
              buildingId: b.id
            });
          }
        }

        _onBuildRequest(p) {
          var cfg = (_crd && BUILDING_CONFIG === void 0 ? (_reportPossibleCrUseOfBUILDING_CONFIG({
            error: Error()
          }), BUILDING_CONFIG) : BUILDING_CONFIG)[p.typeId];

          if (!cfg) {
            this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).BUILD_FAILED, {
              reason: 'unknown_type'
            });

            return;
          }

          if (this._grid.isOccupied(p.gridX, p.gridY)) {
            this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).BUILD_FAILED, {
              reason: 'occupied'
            });

            return;
          }

          var spend = {
            amount: cfg.cost,
            source: 'build',
            onSuccess: () => this._completeBuild(p, cfg.id),
            onFail: () => this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).BUILD_FAILED, {
              reason: 'insufficient'
            })
          };

          this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).SPEND_REQUEST, spend);
        }

        _completeBuild(p, typeId) {
          var cfg = (_crd && BUILDING_CONFIG === void 0 ? (_reportPossibleCrUseOfBUILDING_CONFIG({
            error: Error()
          }), BUILDING_CONFIG) : BUILDING_CONFIG)[typeId];

          var b = this._world.acquire('building', () => new (_crd && BuildingEntity === void 0 ? (_reportPossibleCrUseOfBuildingEntity({
            error: Error()
          }), BuildingEntity) : BuildingEntity)());

          b.reset(); // 池复用必须 reset

          b.typeId = typeId;
          b.gridX = p.gridX;
          b.gridY = p.gridY;
          var world = (_crd && gridToWorld === void 0 ? (_reportPossibleCrUseOfgridToWorld({
            error: Error()
          }), gridToWorld) : gridToWorld)(p.gridX, p.gridY);
          b.x = world.x;
          b.y = world.y;
          b.recalc(cfg); // 算 effectiveIncomePerSecond / Cap

          this._world.add(b);

          this._grid.occupy(b);

          this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_COMPLETED, b);

          this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_SUCCESS, b);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a97a033eb592b82f3458f7a732c574c6ced16635.js.map