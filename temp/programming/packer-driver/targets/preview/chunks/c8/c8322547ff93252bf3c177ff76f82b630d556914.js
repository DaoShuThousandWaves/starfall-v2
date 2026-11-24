System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, HallEvents;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3b6agb2IpKxpp2hAiIriwj", "HallEvents", undefined);

      _export("HallEvents", HallEvents = {
        // 建造流程
        BUILD_REQUEST: "hall:build_request",
        BUILD_SUCCESS: "hall:build_success",
        BUILD_FAILED: "hall:build_failed",
        BUILD_COMPLETED: 'BUILD_COMPLETED',
        BUILD_REMOVED: 'BUILD_REMOVED',
        SYNERGY_RECALCULATED: 'SYNERGY_RECALCULATED',
        // 经济
        SPEND_REQUEST: "hall:spend_request",
        SPEND_SUCCESS: "hall:spend_success",
        SPEND_FAILED: "hall:spend_failed",
        COLLECT_REQUEST: "hall:collect_request",
        COIN_CHANGED: "hall:coin_changed",
        INCOME_COLLECTED: 'hall-income-collected',
        // (amount: number)
        REWARD_GRANT_REQUEST: 'hall-reward-grant-request',
        // ({ coins?: number })
        QUEST_COMPLETED: 'hall-quest-completed',
        // (config: QuestConfigData)
        QUEST_LIST_CHANGED: 'hall-quest-list-changed',
        // (quests: QuestProgress[])
        UI_SELECTED_BUILDING_CHANGED: 'UI_SELECTED_BUILDING_CHANGED',
        UPGRADE_REQUEST: 'hall-upgrade-request',
        UPGRADE_COMPLETED: 'hall-upgrade-completed',
        MONTH_PASSED: 'MONTH_PASSED',
        // 输入交互
        CLICK_GRID: "hall:click_grid",
        // 场景跳转
        START_BATTLE: "hall:start_battle"
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c8322547ff93252bf3c177ff76f82b630d556914.js.map