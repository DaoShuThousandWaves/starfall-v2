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
        BUILD_MENU_OPEN: 'hall:build_menu_open',
        SYNERGY_RECALCULATED: 'SYNERGY_RECALCULATED',
        BUILD_TYPE_SELECTED: 'hall:build_type_selected',
        // (typeId)  —— UI 点建筑图标
        BUILD_CANCEL: 'hall:build_cancel',
        // ()          —— UI 点「取消」
        INPUT_DRAG: 'hall:input_drag',
        // (worldX, worldY) —— 拖拽/移动
        GHOST_STATE_CHANGED: 'hall:ghost_state_changed',
        // (state)  —— 给 GhostView 用
        // 经济
        SPEND_REQUEST: "hall:spend_request",
        SPEND_SUCCESS: "hall:spend_success",
        SPEND_FAILED: "hall:spend_failed",
        COLLECT_REQUEST: "hall:collect_request",
        COIN_CHANGED: "hall:coin_changed",
        INCOME_COLLECTED: 'hall-income-collected',
        REWARD_GRANT_REQUEST: 'hall-reward-grant-request',
        QUEST_COMPLETED: 'hall-quest-completed',
        QUEST_LIST_CHANGED: 'hall-quest-list-changed',
        UI_SELECTED_BUILDING_CHANGED: 'UI_SELECTED_BUILDING_CHANGED',
        UPGRADE_REQUEST: 'hall-upgrade-request',
        UPGRADE_COMPLETED: 'hall-upgrade-completed',
        MONTH_PASSED: 'hall-month-passed',
        MONTHLY_REPORT: 'hall-monthly-report',
        // 输入交互
        CLICK_GRID: "hall:click_grid",
        INPUT_CLICK: 'INPUT_CLICK',
        INPUT_DRAG_END: 'INPUT_DRAG_END',
        INPUT_PINCH: 'INPUT_PINCH',
        // 场景跳转
        START_BATTLE: "hall:start_battle"
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=82e6240b8adb32f11494a179027760c84e87ca70.js.map