System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, HealthComp, _crd;

  _export("HealthComp", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "267790cA+9IGKJR7q1lchFD", "HealthComp", undefined);

      _export("HealthComp", HealthComp = class HealthComp {
        constructor() {
          this.hp = 100;
          this.maxHp = 100;
          this.invincibleTimer = 0;

          /** 受击后的无敌时长。玩家 1.0，敌人 0 */
          this.hitInvincibleDuration = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e46db12a9b1d86f458167b2fee40e215b43eb1b7.js.map