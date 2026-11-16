System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EmitterRuntime, Plane, Boss, _crd;

  function _reportPossibleCrUseOfBossConfigData(extras) {
    _reporterNs.report("BossConfigData", "../Config/BossConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEmitterRuntime(extras) {
    _reporterNs.report("EmitterRuntime", "./EmitterRuntime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "./Plane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretData(extras) {
    _reporterNs.report("TurretData", "./TurretData", _context.meta, extras);
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
      EmitterRuntime = _unresolved_2.EmitterRuntime;
    }, function (_unresolved_3) {
      Plane = _unresolved_3.Plane;
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

          /** 当前阶段索引。0 = 初始阶段 */
          this.stageIndex = 0;

          /** 炮台运行时数据。每个 Boss 实例独立 */
          this.turrets = [];
          this.turretSchedule = null;
          this.config = config;
          this.hp = config.maxHp;
          this.maxHp = config.maxHp;
          this.collisionRadius = config.collisionRadius;
          this.enterStage(0);
        }
        /**
        * 进入指定阶段。重建炮台和 schedule。
        * 由构造函数和 BossStageSystem 调用。
        */


        enterStage(index) {
          const stage = this.config.stages[index];

          if (!stage) {
            console.warn(`[Boss] 阶段 ${index} 不存在`);
            return;
          }

          this.stageIndex = index; // 重建炮台

          this.turrets = stage.turrets.map(cfg => ({
            config: cfg,
            aimAngle: cfg.baseAngle,
            runtime: new (_crd && EmitterRuntime === void 0 ? (_reportPossibleCrUseOfEmitterRuntime({
              error: Error()
            }), EmitterRuntime) : EmitterRuntime)(),
            oscPhase: 0
          })); // 重建 schedule

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
//# sourceMappingURL=f09ce2e1d9acdd29aacbb81bd971f3901f192b78.js.map