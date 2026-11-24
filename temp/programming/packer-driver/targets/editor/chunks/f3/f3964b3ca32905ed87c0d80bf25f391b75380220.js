System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BUILDING_CONFIG, HallEvents, UpgradeSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
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

  _export("UpgradeSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BUILDING_CONFIG = _unresolved_2.BUILDING_CONFIG;
    }, function (_unresolved_3) {
      HallEvents = _unresolved_3.HallEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e4246ojvdOl6jSXWRRuOSQ", "UpgradeSystem", undefined);

      _export("UpgradeSystem", UpgradeSystem = class UpgradeSystem {
        constructor() {
          this._world = null;
        }

        onStart(world) {
          this._world = world;
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).UPGRADE_REQUEST, this._onUpgrade, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).UPGRADE_REQUEST, this._onUpgrade, this);
          this._world = null;
        }

        onTick(world, dt) {}

        _onUpgrade(req) {
          const building = this._findBuilding(req.buildingId);

          if (!building) {
            req.onFail == null ? void 0 : req.onFail('max_level');
            return;
          }

          const config = (_crd && BUILDING_CONFIG === void 0 ? (_reportPossibleCrUseOfBUILDING_CONFIG({
            error: Error()
          }), BUILDING_CONFIG) : BUILDING_CONFIG)[building.typeId];

          if (!config) {
            req.onFail == null ? void 0 : req.onFail('max_level');
            return;
          }

          if (building.level >= config.maxLevel) {
            req.onFail == null ? void 0 : req.onFail('max_level');
            return;
          }

          const cost = config.upgradeCost(building.level);

          this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).SPEND_REQUEST, {
            amount: cost,
            source: 'upgrade',
            onSuccess: () => {
              building.level++;
              building.recalc(config);

              this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
                error: Error()
              }), HallEvents) : HallEvents).UPGRADE_COMPLETED, building);

              req.onSuccess == null ? void 0 : req.onSuccess();
            },
            onFail: () => req.onFail == null ? void 0 : req.onFail('insufficient')
          });
        }

        _findBuilding(id) {
          for (const b of this._world.query('building')) {
            if (b.id === id) return b;
          }

          return null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f3964b3ca32905ed87c0d80bf25f391b75380220.js.map