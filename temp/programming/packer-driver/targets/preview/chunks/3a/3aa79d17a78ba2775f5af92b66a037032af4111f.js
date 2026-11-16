System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Entity, HealthComp, AimComp, TurretEntity, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretConfig(extras) {
    _reporterNs.report("TurretConfig", "../Config/TurretConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHealthComp(extras) {
    _reporterNs.report("HealthComp", "./Components/HealthComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAimComp(extras) {
    _reporterNs.report("AimComp", "./Components/AimComp", _context.meta, extras);
  }

  _export("TurretEntity", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Entity = _unresolved_2.Entity;
    }, function (_unresolved_3) {
      HealthComp = _unresolved_3.HealthComp;
    }, function (_unresolved_4) {
      AimComp = _unresolved_4.AimComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8398erT0MJKt673KNxuqy/f", "TurretEntity", undefined);

      _export("TurretEntity", TurretEntity = class TurretEntity extends (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
        error: Error()
      }), Entity) : Entity) {
        constructor() {
          super();
          this.kind = 'turret';
          this.health = new (_crd && HealthComp === void 0 ? (_reportPossibleCrUseOfHealthComp({
            error: Error()
          }), HealthComp) : HealthComp)();
          this.aim = new (_crd && AimComp === void 0 ? (_reportPossibleCrUseOfAimComp({
            error: Error()
          }), AimComp) : AimComp)();

          /** 所属 Boss 的 id */
          this.ownerId = 0;

          /** 配置（只读） */
          this.config = null;
          this.faction = 'enemy';
          this.collisionRadius = 14;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3aa79d17a78ba2775f5af92b66a037032af4111f.js.map