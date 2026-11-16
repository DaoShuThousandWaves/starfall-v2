System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, CARD_POOL;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f7daJF019NhrjHArKCbLYf", "CardConfig", undefined);
      /** 卡牌效果类型。CardSystem 不解释效果，ApplySystem 解释 */
      // 立即回复


      _export("CARD_POOL", CARD_POOL = [{
        id: 'dmg_up',
        name: '强力弹头',
        desc: '子弹伤害 +30%',
        rarity: 'common',
        effects: [{
          type: 'bullet_damage',
          value: 1.3
        }],
        maxStacks: 5
      }, {
        id: 'fire_rate_up',
        name: '速射装置',
        desc: '开火间隔 -20%',
        rarity: 'common',
        effects: [{
          type: 'fire_rate',
          value: 0.8
        }],
        maxStacks: 4
      }, {
        id: 'bullet_count_up',
        name: '散射模块',
        desc: '每次多发一颗子弹',
        rarity: 'rare',
        effects: [{
          type: 'bullet_count',
          value: 1
        }],
        maxStacks: 3
      }, {
        id: 'move_speed_up',
        name: '弹道加速',
        desc: '子弹速度 +25%',
        rarity: 'common',
        effects: [{
          type: 'move_speed',
          value: 1.25
        }],
        maxStacks: 4
      }, {
        id: 'max_hp_up',
        name: '装甲强化',
        desc: '最大血量 +30，立即回满',
        rarity: 'rare',
        effects: [{
          type: 'max_hp',
          value: 30
        }, {
          type: 'heal',
          value: 30
        }],
        maxStacks: 3
      }]);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8014df73b02dc5d7ba8e5ca52d55e6998804be38.js.map