System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, QUEST_POOL, HallEvents, QuestSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingEntity(extras) {
    _reporterNs.report("BuildingEntity", "../Entity/BuildingEntity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQUEST_POOL(extras) {
    _reporterNs.report("QUEST_POOL", "../Config/QuestConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQuestConfigData(extras) {
    _reporterNs.report("QuestConfigData", "../Config/QuestConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "../HallEvents", _context.meta, extras);
  }

  _export("QuestSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      QUEST_POOL = _unresolved_2.QUEST_POOL;
    }, function (_unresolved_3) {
      HallEvents = _unresolved_3.HallEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5d82dVZH4lJe54UI8QxxJft", "QuestSystem", undefined);

      _export("QuestSystem", QuestSystem = class QuestSystem {
        constructor() {
          this._world = null;
          this._quests = [];
        }

        onStart(world) {
          this._world = world;
          this._quests = (_crd && QUEST_POOL === void 0 ? (_reportPossibleCrUseOfQUEST_POOL({
            error: Error()
          }), QUEST_POOL) : QUEST_POOL).map(c => ({
            config: c,
            current: 0,
            completed: false
          }));
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_COMPLETED, this._onBuild, this);
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).UPGRADE_COMPLETED, this._onUpgrade, this);
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).INCOME_COLLECTED, this._onCollect, this);

          this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).QUEST_LIST_CHANGED, this._quests);
        }

        onDestroy(world) {
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_COMPLETED, this._onBuild, this);
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).UPGRADE_COMPLETED, this._onUpgrade, this);
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).INCOME_COLLECTED, this._onCollect, this);
          this._world = null;
        }

        onTick() {}

        _onBuild(building) {
          for (const q of this._quests) {
            if (q.completed) continue;
            if (q.config.type !== 'build_count') continue;
            if (q.config.buildingTypeId && q.config.buildingTypeId !== building.typeId) continue;

            this._progress(q, 1);
          }
        }

        _onUpgrade() {
          for (const q of this._quests) {
            if (q.completed) continue;
            if (q.config.type !== 'upgrade_count') continue;

            this._progress(q, 1);
          }
        }

        _onCollect(amount) {
          for (const q of this._quests) {
            if (q.completed) continue;
            if (q.config.type !== 'collect_total') continue;

            this._progress(q, amount);
          }
        }

        _progress(q, delta) {
          q.current = Math.min(q.current + delta, q.config.target);

          if (q.current >= q.config.target && !q.completed) {
            q.completed = true;

            this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).QUEST_COMPLETED, q.config);

            if (q.config.reward.coins) {
              this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
                error: Error()
              }), HallEvents) : HallEvents).REWARD_GRANT_REQUEST, {
                coins: q.config.reward.coins
              });
            }
          }

          this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).QUEST_LIST_CHANGED, this._quests);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d135ac24e0cee7320d5ff7e42a385db126fea16.js.map