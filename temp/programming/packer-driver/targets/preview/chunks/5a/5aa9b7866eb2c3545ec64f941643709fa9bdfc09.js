System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WeaponComp, _crd;

  function _reportPossibleCrUseOfWeaponData(extras) {
    _reporterNs.report("WeaponData", "../WeaponData", _context.meta, extras);
  }

  _export("WeaponComp", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37196OiEdlDooOYfTstu3Ge", "WeaponComp", undefined);

      _export("WeaponComp", WeaponComp = class WeaponComp {
        constructor() {
          this.weapons = [];
          // 卡牌修正值。配置只读，修正值写在这里
          this.damageMultiplier = 1;
          this.fireRateMultiplier = 1;
          this.bulletSpeedMultiplier = 1;
          this.extraBulletCount = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5aa9b7866eb2c3545ec64f941643709fa9bdfc09.js.map