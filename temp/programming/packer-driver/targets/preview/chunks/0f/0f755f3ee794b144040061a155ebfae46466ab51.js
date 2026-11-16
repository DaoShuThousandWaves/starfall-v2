System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Entity, Plane, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponConfig(extras) {
    _reporterNs.report("WeaponConfig", "../Config/WeaponConfig", _context.meta, extras);
  }

  _export("Plane", void 0);

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

      _cclegacy._RF.push({}, "041e6VBfaFJUIcYUukoYaGb", "Plane", undefined);

      _export("Plane", Plane = class Plane extends (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
        error: Error()
      }), Entity) : Entity) {
        constructor(kind) {
          super();
          this.kind = void 0;
          this.hp = 100;
          this.maxHp = 100;
          this.weapons = [];
          this.movePattern = 'none';
          this.invincibleTimer = 0;
          this.hitInvincibleDuration = 0;
          //============player================

          /** 当前经验值。仅玩家使用 */
          this.exp = 0;

          /** 当前等级。1 = 初始等级。仅玩家使用 */
          this.level = 1;

          /** 升到下一级所需经验。仅玩家使用 */
          this.expToNext = 50;
          this.cardStacks = new Map();
          //================enemy========================

          /** 直线移动方向。-1/0/1。仅 'straight' 模式用 */
          this.moveDirX = 0;
          this.moveDirY = 0;

          /** 移动速度（像素/秒） */
          this.moveSpeed = 100;

          /** 函数型移动的基准点 X。sine/arc/半圆/自定义函数都以此为原点 */
          this.originX = 0;

          /** 函数型移动的基准点 Y。sine/arc/半圆/自定义函数都以此为原点 */
          this.originY = 0;

          /** 正弦移动的相位累积值（运行时状态）。其他模式不用 */
          this.movePhase = 0;

          /** 移动频率（弧度/秒） */
          this.moveFrequency = 3;

          /** 移动振幅（像素） */
          this.moveAmplitude = 80;

          /** 碰撞检测半径（像素）。用于 CombatSystem 的圆形碰撞判定 */
          this.collisionRadius = 20;
          this.kind = kind;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f755f3ee794b144040061a155ebfae46466ab51.js.map