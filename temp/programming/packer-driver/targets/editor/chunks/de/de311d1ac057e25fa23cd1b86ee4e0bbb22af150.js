System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BUILDING_CONFIG, SYNERGY_TABLE, NEIGHBOR_OFFSETS, HallEvents, SynergySystem, _crd;

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

  function _reportPossibleCrUseOfSYNERGY_TABLE(extras) {
    _reporterNs.report("SYNERGY_TABLE", "../Config/SynergyConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNEIGHBOR_OFFSETS(extras) {
    _reporterNs.report("NEIGHBOR_OFFSETS", "../Config/SynergyConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "../HallEvents", _context.meta, extras);
  }

  _export("SynergySystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BUILDING_CONFIG = _unresolved_2.BUILDING_CONFIG;
    }, function (_unresolved_3) {
      SYNERGY_TABLE = _unresolved_3.SYNERGY_TABLE;
      NEIGHBOR_OFFSETS = _unresolved_3.NEIGHBOR_OFFSETS;
    }, function (_unresolved_4) {
      HallEvents = _unresolved_4.HallEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3e7285CqJpIQoSSC0C7FANH", "SynergySystem", undefined);

      _export("SynergySystem", SynergySystem = class SynergySystem {
        constructor() {
          this._world = null;
        }

        onStart(world) {
          this._world = world; // 建造、拆除、升级都会影响相性，全量重算

          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_COMPLETED, this._recalcAll, this);
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_REMOVED, this._recalcAll, this);
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).UPGRADE_COMPLETED, this._recalcAll, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_COMPLETED, this._recalcAll, this);
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_REMOVED, this._recalcAll, this);
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).UPGRADE_COMPLETED, this._recalcAll, this);
          this._world = null;
        }

        onTick() {}

        _recalcAll() {
          const all = Array.from(this._world.query('building'));
          const byKey = new Map();

          for (const b of all) byKey.set(`${b.gridX},${b.gridY}`, b);

          for (const b of all) {
            b.synergyMultiplier = this._calcMultiplier(b, byKey);
            const config = (_crd && BUILDING_CONFIG === void 0 ? (_reportPossibleCrUseOfBUILDING_CONFIG({
              error: Error()
            }), BUILDING_CONFIG) : BUILDING_CONFIG)[b.typeId];
            if (config) b.recalc(config);
          }

          this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).SYNERGY_RECALCULATED);
        }

        _calcMultiplier(b, byKey) {
          const selfConfig = (_crd && BUILDING_CONFIG === void 0 ? (_reportPossibleCrUseOfBUILDING_CONFIG({
            error: Error()
          }), BUILDING_CONFIG) : BUILDING_CONFIG)[b.typeId];
          if (!selfConfig) return 1;
          let mult = 1;

          for (const off of _crd && NEIGHBOR_OFFSETS === void 0 ? (_reportPossibleCrUseOfNEIGHBOR_OFFSETS({
            error: Error()
          }), NEIGHBOR_OFFSETS) : NEIGHBOR_OFFSETS) {
            const neighbor = byKey.get(`${b.gridX + off.dx},${b.gridY + off.dy}`);
            if (!neighbor) continue;
            const neighborConfig = (_crd && BUILDING_CONFIG === void 0 ? (_reportPossibleCrUseOfBUILDING_CONFIG({
              error: Error()
            }), BUILDING_CONFIG) : BUILDING_CONFIG)[neighbor.typeId];
            if (!neighborConfig) continue;

            for (const rule of _crd && SYNERGY_TABLE === void 0 ? (_reportPossibleCrUseOfSYNERGY_TABLE({
              error: Error()
            }), SYNERGY_TABLE) : SYNERGY_TABLE) {
              if (this._match(selfConfig.tags, neighborConfig.tags, rule)) {
                mult += rule.bonus;
              }
            }
          }

          return mult;
        }

        _match(tagsA, tagsB, rule) {
          const aHasA = tagsA.includes(rule.tagA);
          const aHasB = tagsA.includes(rule.tagB);
          const bHasA = tagsB.includes(rule.tagA);
          const bHasB = tagsB.includes(rule.tagB); // 双向匹配：A有tagA且B有tagB，或A有tagB且B有tagA

          return aHasA && bHasB || aHasB && bHasA;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=de311d1ac057e25fa23cd1b86ee4e0bbb22af150.js.map