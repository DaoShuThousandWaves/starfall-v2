System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Plane, Turret, _crd;

  function _reportPossibleCrUseOfTurretConfig(extras) {
    _reporterNs.report("TurretConfig", "../Config/TurretConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "./Plane", _context.meta, extras);
  }

  _export("Turret", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Plane = _unresolved_2.Plane;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54541D4JWxFiaUDYpXVqn1G", "Turret", undefined);

      _export("Turret", Turret = class Turret extends (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
        error: Error()
      }), Plane) : Plane) {
        constructor() {
          super('turret');

          /** 所属 Boss 的 id */
          this.ownerId = 0;

          /** 配置（只读） */
          this.config = null;

          /** 当前炮口朝向（度）。TurretAimSystem 写，FireSystem 读 */
          this.aimAngle = 0;

          /** oscillate 模式相位（弧度） */
          this.oscPhase = 0;

          /** 开火冷却累积（秒）。FireSystem 写 */
          this.cooldownTimer = 0;

          /** 当前是否被编排允许开火。TurretScheduleSystem 写 */
          this.active = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2a94036a5c74b32f66c52a679735ad99ac6fb775.js.map