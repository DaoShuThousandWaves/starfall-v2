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
          waves: [{
            startTime: 0,
            enemyGroups: [{
              enemyType: 'basic',
              count: 5,
              spawnInterval: 0.5,
              delay: 0,
              spawnSide: 'top'
            }]
          }, {
            startTime: 8,
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
          }, {
            startTime: 18,
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
//# sourceMappingURL=b94dc0214eb75ff22abeff808df3c710c8f6500b.js.map