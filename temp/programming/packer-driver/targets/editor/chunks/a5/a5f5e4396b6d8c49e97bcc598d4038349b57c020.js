System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Entity, HealthComp, BossEntity, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBossConfigData(extras) {
    _reporterNs.report("BossConfigData", "../Config/BossConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHealthComp(extras) {
    _reporterNs.report("HealthComp", "./Components/HealthComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretScheduleState(extras) {
    _reporterNs.report("TurretScheduleState", "./TurretSchedule", _context.meta, extras);
  }

  _export("BossEntity", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Entity = _unresolved_2.Entity;
    }, function (_unresolved_3) {
      HealthComp = _unresolved_3.HealthComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "168d1ol1/lD5o68I35JTzJt", "BossEntity", undefined);

      _export("BossEntity", BossEntity = class BossEntity extends (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
        error: Error()
      }), Entity) : Entity) {
        constructor(config) {
          super();
          this.kind = 'boss';
          this.health = new (_crd && HealthComp === void 0 ? (_reportPossibleCrUseOfHealthComp({
            error: Error()
          }), HealthComp) : HealthComp)();
          this.config = void 0;
          this.stageIndex = 0;

          /** 当前阶段炮台实体的 id 列表。顺序 = 配置顺序，长度 = 配置炮台数。
           *  死亡槽位 id = 0，不删除，保证 TurretScheduleSystem 的槽位索引稳定。 */
          this.turretIds = [];
          this.turretSchedule = null;
          this.config = config;
          this.faction = 'enemy';
          this.collisionRadius = config.collisionRadius;
          this.health.hp = config.maxHp;
          this.health.maxHp = config.maxHp;
          this.enterStage(0);
        }

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
//# sourceMappingURL=a5f5e4396b6d8c49e97bcc598d4038349b57c020.js.map