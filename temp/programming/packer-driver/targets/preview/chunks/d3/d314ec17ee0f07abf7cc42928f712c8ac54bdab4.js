System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Entity, Bullet, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletType(extras) {
    _reporterNs.report("BulletType", "../Config/EmitterConfig", _context.meta, extras);
  }

  _export("Bullet", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Entity = _unresolved_2.Entity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3fc35+FFnFP14NIt8TLA9pu", "Bullet", undefined);

      _export("Bullet", Bullet = class Bullet extends (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
        error: Error()
      }), Entity) : Entity) {
        constructor() {
          super(...arguments);
          this.kind = 'bullet';
          this.dirX = 0;
          this.dirY = 1;
          this.speed = 0;
          this.damage = 0;
          this.bulletType = 'yellow';
          this.collisionRadius = 8;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d314ec17ee0f07abf7cc42928f712c8ac54bdab4.js.map