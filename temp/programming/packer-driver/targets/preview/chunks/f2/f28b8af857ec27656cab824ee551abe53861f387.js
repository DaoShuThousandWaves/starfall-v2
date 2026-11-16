System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Entity, Bullet, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
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

          /** 方向单位向量的 x 分量 */
          this.dirX = 0;

          /** 方向单位向量的 y 分量 */
          this.dirY = 1;

          /** 速度，单位像素/秒 */
          this.speed = 0;

          /** 命中后扣血量 */
          this.damage = 0;

          /** 是否玩家阵营子弹。默认 false（敌人子弹），玩家子弹显式设 true */
          this.isPlayerBullet = false;

          /** 碰撞检测半径（像素）。用于 CombatSystem 的圆形碰撞判定 */
          this.collisionRadius = 8;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f28b8af857ec27656cab824ee551abe53861f387.js.map