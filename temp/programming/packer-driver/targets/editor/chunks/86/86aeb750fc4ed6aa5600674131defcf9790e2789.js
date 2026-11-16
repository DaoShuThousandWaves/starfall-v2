System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, AimComp, _crd;

  _export("AimComp", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39125PufWVB6agYVFW/LFnY", "AimComp", undefined);

      _export("AimComp", AimComp = class AimComp {
        constructor() {
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
//# sourceMappingURL=86aeb750fc4ed6aa5600674131defcf9790e2789.js.map