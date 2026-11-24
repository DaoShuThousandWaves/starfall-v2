System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HallEvents, SettlementSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingEntity(extras) {
    _reporterNs.report("BuildingEntity", "../Entity/BuildingEntity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "../HallEvents", _context.meta, extras);
  }

  _export("SettlementSystem", void 0);

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

      _cclegacy._RF.push({}, "3e239lpJxBEJ4t0WbyD3HJn", "SettlementSystem", undefined);

      _export("SettlementSystem", SettlementSystem = class SettlementSystem {
        constructor() {
          this._world = null;
          this._month = 0;
        }

        onStart(world) {
          this._world = world;
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).MONTH_PASSED, this._onMonthPassed, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).MONTH_PASSED, this._onMonthPassed, this);
          this._world = null;
        }

        onTick() {}

        _onMonthPassed() {
          this._month++;

          const report = this._buildReport();

          this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).MONTHLY_REPORT, report);

          if (report.bonusCoins > 0) {
            this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).REWARD_GRANT_REQUEST, {
              coins: report.bonusCoins
            });
          }
        }

        _buildReport() {
          let totalBuildings = 0;
          let totalIncomePerSecond = 0;
          let totalPending = 0;

          for (const b of this._world.query('building')) {
            totalBuildings++;
            totalIncomePerSecond += b.effectiveIncomePerSecond;
            totalPending += b.pendingIncome;
          } // 月奖励 = 当月产出速率的 10%，按 60 秒折算


          const bonusCoins = Math.floor(totalIncomePerSecond * 60 * 0.1); // 星级：按建筑数量粗略分档

          const stars = totalBuildings >= 8 ? 3 : totalBuildings >= 4 ? 2 : 1;
          return {
            month: this._month,
            totalBuildings,
            totalIncomePerSecond,
            totalPending,
            bonusCoins,
            stars
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e07b3970987e2b6c8fb3b069444c93109f3060f.js.map