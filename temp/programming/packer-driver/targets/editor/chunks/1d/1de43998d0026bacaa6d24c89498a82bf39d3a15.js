System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, BOSS_CONFIG;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ee6fxA5nVMt4peqs4dVAW5", "BossConfig", undefined);

      _export("BOSS_CONFIG", BOSS_CONFIG = {
        whale_boss: {
          id: 'whale_boss',
          name: '吴鲸波',
          maxHp: 3000,
          collisionRadius: 105,
          stageHpRatios: [0.7, 0.35]
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1de43998d0026bacaa6d24c89498a82bf39d3a15.js.map