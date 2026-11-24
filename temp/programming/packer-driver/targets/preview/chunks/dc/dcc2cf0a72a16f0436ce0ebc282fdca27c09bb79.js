System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, BUILDING_CONFIG;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e7f1Qb1IdGT4hGAFXE0ReW", "BuildingConfig", undefined);

      _export("BUILDING_CONFIG", BUILDING_CONFIG = {
        stall: {
          id: 'stall',
          name: '小摊',
          cost: 100,
          incomePerSecond: 1,
          incomeCap: 50,
          onClick: 'collect',
          tags: ['餐饮', '低价'],
          maxLevel: 10,
          upgradeCost: lv => Math.floor(100 * Math.pow(1.8, lv - 1)),
          incomeMultiplier: lv => 1 + (lv - 1) * 0.5,
          // 1级 1x，2级 1.5x，3级 2x
          capMultiplier: lv => 1 + (lv - 1) * 0.6
        },
        portal: {
          id: 'portal',
          name: '关卡入口',
          cost: 300,
          incomePerSecond: 0,
          incomeCap: 0,
          onClick: 'start_battle',
          tags: ['特殊'],
          maxLevel: 1,
          upgradeCost: () => Infinity,
          incomeMultiplier: () => 1,
          capMultiplier: () => 1
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dcc2cf0a72a16f0436ce0ebc282fdca27c09bb79.js.map