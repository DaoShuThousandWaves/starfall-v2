System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BATTLE_EVENT, BossStageSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../BattleEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "../Entity/Boss", _context.meta, extras);
  }

  _export("BossStageSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BATTLE_EVENT = _unresolved_2.BATTLE_EVENT;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72eabcJ7slJZLhLWHyYcuo9", "BossStageSystem", undefined);

      _export("BossStageSystem", BossStageSystem = class BossStageSystem {
        onTick(world, dt) {
          for (var boss of world.query('boss')) {
            this._checkStage(world, boss);
          }
        }

        _checkStage(world, boss) {
          var stages = boss.config.stages;
          var nextIndex = boss.stageIndex + 1;
          if (nextIndex >= stages.length) return;
          var nextStage = stages[nextIndex];
          if (nextStage.hpRatio === undefined) return;
          var ratio = boss.hp / boss.maxHp;

          if (ratio <= nextStage.hpRatio) {
            boss.enterStage(nextIndex);
            world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
              error: Error()
            }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_STAGE_CHANGED, boss, nextIndex);
            world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
              error: Error()
            }), BATTLE_EVENT) : BATTLE_EVENT).TURRET_REBUILD_REQUEST, boss, nextIndex);
            console.log("[BossStageSystem] " + boss.config.name + " \u8FDB\u5165\u9636\u6BB5 " + nextIndex);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a4ad810d9f9c8924ef3882353146cde0ae6041d1.js.map