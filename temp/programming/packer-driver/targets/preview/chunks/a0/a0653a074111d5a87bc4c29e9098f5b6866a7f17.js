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

        reset() {
          this.alive = true;
          this.x = 0;
          this.y = 0;
          this.health.hp = 100;
          this.health.maxHp = 100;
          this.health.invincibleTimer = 0;
          this.health.hitInvincibleDuration = 0;
          this.move.pattern = 'none';
          this.move.dirX = 0;
          this.move.dirY = 0;
          this.move.speed = 100;
          this.move.originX = 0;
          this.move.originY = 0;
          this.move.phase = 0;
          this.move.frequency = 3;
          this.move.amplitude = 80;
          this.weapon.weapons.length = 0;
          this.weapon.damageMultiplier = 1;
          this.weapon.fireRateMultiplier = 1;
          this.weapon.bulletSpeedMultiplier = 1;
          this.weapon.extraBulletCount = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a0653a074111d5a87bc4c29e9098f5b6866a7f17.js.map