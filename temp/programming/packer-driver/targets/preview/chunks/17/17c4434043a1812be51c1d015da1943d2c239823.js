System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EmitterRuntime, _crd;

  _export("EmitterRuntime", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7023fd620JHsJu1IggqTL93", "EmitterRuntime", undefined);

      /**
       * 发射器计时载体。WeaponData 和 TurretData 各持有一个。
       * 只做冷却推进，不依赖 World、不 emit、不认识 Plane/Boss。
       */
      _export("EmitterRuntime", EmitterRuntime = class EmitterRuntime {
        constructor() {
          this.cooldownTimer = 0;
        }

        /**
         * 推进一帧冷却，返回本帧应发射的次数。
         * guard 防止 fireInterval 为 0 或极小时死循环。
         */
        tick(dt, fireInterval) {
          this.cooldownTimer += dt;
          var count = 0;
          var guard = 0;

          while (this.cooldownTimer >= fireInterval && guard++ < 16) {
            this.cooldownTimer -= fireInterval;
            count++;
          }

          return count;
        }

        reset() {
          this.cooldownTimer = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=17c4434043a1812be51c1d015da1943d2c239823.js.map