System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Entity, HealthComp, WeaponComp, MoveComp, EnemyEntity, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHealthComp(extras) {
    _reporterNs.report("HealthComp", "./Components/HealthComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponComp(extras) {
    _reporterNs.report("WeaponComp", "./Components/WeaponComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveComp(extras) {
    _reporterNs.report("MoveComp", "./Components/MoveComp", _context.meta, extras);
  }

  _export("EnemyEntity", void 0);

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
      MoveComp = _unresolved_5.MoveComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19383+M3PVFE5fTSrdSF5qP", "EnemyEntity", undefined);

      _export("EnemyEntity", EnemyEntity = class EnemyEntity extends (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
        error: Error()
      }), Entity) : Entity) {
        constructor() {
          super();
          this.kind = 'enemy';
          this.health = new (_crd && HealthComp === void 0 ? (_reportPossibleCrUseOfHealthComp({
            error: Error()
          }), HealthComp) : HealthComp)();
          this.weapon = new (_crd && WeaponComp === void 0 ? (_reportPossibleCrUseOfWeaponComp({
            error: Error()
          }), WeaponComp) : WeaponComp)();
          this.move = new (_crd && MoveComp === void 0 ? (_reportPossibleCrUseOfMoveComp({
            error: Error()
          }), MoveComp) : MoveComp)();
          this.faction = 'enemy';
          this.collisionRadius = 20;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9cc9fdea735a541a5e346f3a08179f93aaedd1e3.js.map