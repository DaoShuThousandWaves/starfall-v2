System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Plane, Boss, _crd;

  function _reportPossibleCrUseOfBossConfigData(extras) {
    _reporterNs.report("BossConfigData", "../Config/BossConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "./Plane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretScheduleState(extras) {
    _reporterNs.report("TurretScheduleState", "./TurretSchedule", _context.meta, extras);
  }

  _export("Boss", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Plane = _unresolved_2.Plane;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5c85FWtJxJX6jsyUJfTh01", "Boss", undefined);

      _export("Boss", Boss = class Boss extends (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
        error: Error()
      }), Plane) : Plane) {
        constructor(config) {
          super('boss');
          this.config = void 0;
          this.stageIndex = 0;

          /** 当前阶段炮台实体的 id 列表。顺序 = 配置顺序。由 SpawnSystem 维护 */
          this.turretIds = [];
          this.turretSchedule = null;
          this.config = config;
          this.hp = config.maxHp;
          this.maxHp = config.maxHp;
          this.collisionRadius = config.collisionRadius;
          this.enterStage(0);
        }
        /**
         * 进入指定阶段：只更新阶段索引和编排状态。
         * 炮台实体的销毁/创建由 SpawnSystem 响应 TURRET_REBUILD_REQUEST 完成。
         */


        enterStage(index) {
          const stage = this.config.stages[index];

          if (!stage) {
            console.warn(`[Boss] 阶段 ${index} 不存在`);
            return;
          }

          this.stageIndex = index;

          if (stage.turretSchedule) {
            this.turretSchedule = {
              config: stage.turretSchedule,
              activeIndex: 0,
              burstElapsed: 0,
              gapTimer: 0
            };
          } else {
            this.turretSchedule = null;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ce96d56a0d49c4a7c555bd63d9bae52554c2626d.js.map