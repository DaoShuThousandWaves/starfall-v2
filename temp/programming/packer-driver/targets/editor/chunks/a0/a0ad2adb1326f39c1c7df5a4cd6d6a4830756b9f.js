System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, LEVELS;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec853Y4uo1FzIDjXhJ2Etzb", "LevelConfig", undefined);

      _export("LEVELS", LEVELS = {
        level_1: {
          id: 'level_1',
          name: '冰原边境',
          waves: [// ===== 第 1 波：5 只直线敌机 =====
          {
            delayAfterPrev: 2,
            enemyGroups: [{
              enemyType: 'basic',
              count: 5,
              spawnInterval: 0.5,
              delay: 0,
              spawnSide: 'top'
            }]
          }, // ===== 第 2 波：顶部 4 只 + 左侧正弦 3 只 =====
          {
            delayAfterPrev: 2,
            enemyGroups: [{
              enemyType: 'basic',
              count: 4,
              spawnInterval: 0.4,
              delay: 0,
              spawnSide: 'top'
            }, {
              enemyType: 'sine',
              count: 3,
              spawnInterval: 0.6,
              delay: 1.0,
              spawnSide: 'left'
            }]
          }, // ===== 第 3 波：Boss =====
          {
            delayAfterPrev: 3,
            enemyGroups: [],
            boss: {
              bossId: 'whale_boss',
              delay: 1.0
            }
          }]
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a0ad2adb1326f39c1c7df5a4cd6d6a4830756b9f.js.map