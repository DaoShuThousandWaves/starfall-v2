System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Entity, HealthComp, WeaponComp, ExpComp, PlayerEntity, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHealthComp(extras) {
    _reporterNs.report("HealthComp", "./Components/HealthComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponComp(extras) {
    _reporterNs.report("WeaponComp", "./Components/WeaponComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExpComp(extras) {
    _reporterNs.report("ExpComp", "./Components/ExpComp", _context.meta, extras);
  }

  _export("PlayerEntity", void 0);

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
      WeaponComp = _unresolved_4.WeaponComp;
    }, function (_unresolved_5) {
      ExpComp = _unresolved_5.ExpComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c370UBdjlOc75yiONEltrL", "PlayerEntity", undefined);

      _export("PlayerEntity", PlayerEntity = class PlayerEntity extends (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
        error: Error()
      }), Entity) : Entity) {
        constructor() {
          super();
          this.kind = 'player';
          this.health = new (_crd && HealthComp === void 0 ? (_reportPossibleCrUseOfHealthComp({
            error: Error()
          }), HealthComp) : HealthComp)();
          this.weapon = new (_crd && WeaponComp === void 0 ? (_reportPossibleCrUseOfWeaponComp({
            error: Error()
          }), WeaponComp) : WeaponComp)();
          this.exp = new (_crd && ExpComp === void 0 ? (_reportPossibleCrUseOfExpComp({
            error: Error()
          }), ExpComp) : ExpComp)();
          this.faction = 'player';
          this.collisionRadius = 20;
          this.health.hitInvincibleDuration = 1.0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9331890c016332a663496d0a92de1abd4e3bcdcb.js.map