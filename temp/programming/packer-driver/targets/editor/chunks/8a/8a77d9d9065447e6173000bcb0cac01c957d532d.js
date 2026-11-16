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

          /** 移动速度（像素/秒） */
          this.moveSpeed = 100;

          /** 正弦移动的基准 X 坐标（初始化时记录）。其他模式不用 */
          this.baseX = 0;

          /** 正弦移动的基准 Y 坐标（初始化时记录）。其他模式不用 */
          this.baseY = 0;

          /** 正弦移动的相位累积值（运行时状态）。其他模式不用 */
          this.patternPhase = 0;

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
//# sourceMappingURL=8a77d9d9065447e6173000bcb0cac01c957d532d.js.map