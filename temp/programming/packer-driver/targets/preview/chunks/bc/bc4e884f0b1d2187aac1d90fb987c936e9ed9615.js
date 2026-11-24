System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, QUEST_POOL;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08637zEAnVLrJOS0m5gXJ36", "QuestConfig", undefined); // 触发 N 次相性


      _export("QUEST_POOL", QUEST_POOL = [{
        id: 'q_build_3_stall',
        name: '摊贩起步',
        desc: '建造 3 个小摊',
        type: 'build_count',
        target: 3,
        buildingTypeId: 'stall',
        reward: {
          coins: 200
        }
      }, {
        id: 'q_collect_500',
        name: '第一桶金',
        desc: '累计收取 500 金币',
        type: 'collect_total',
        target: 500,
        reward: {
          coins: 300
        }
      }, {
        id: 'q_upgrade_2',
        name: '升级达人',
        desc: '升级建筑 2 次',
        type: 'upgrade_count',
        target: 2,
        reward: {
          coins: 400
        }
      }]);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bc4e884f0b1d2187aac1d90fb987c936e9ed9615.js.map