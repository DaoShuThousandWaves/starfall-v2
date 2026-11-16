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
        onStart(world) {}

        onDestroy(world) {}

        onTick(world, dt) {
          for (const boss of world.query('boss')) {
            this._checkStage(world, boss);
          }
        }

        _checkStage(world, boss) {
          const ratios = boss.config.stages;
          const nextIndex = boss.stageIndex + 1; // 已经是最后阶段

          if (nextIndex >= ratios.length) return;
          const threshold = ratios[nextIndex - 1];
          const ratio = boss.hp / boss.maxHp;

          if (ratio <= threshold) {
            boss.stageIndex = nextIndex;
            world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
              error: Error()
            }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_STAGE_CHANGED, boss, nextIndex);
            console.log(`[BossStageSystem] ${boss.config.name} 进入阶段 ${nextIndex}`);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e53afb0ff4ceb5a31194d6e99848b4b65e555cfb.js.map