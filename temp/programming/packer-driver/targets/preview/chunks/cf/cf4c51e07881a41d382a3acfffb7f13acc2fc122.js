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
        // 经济
        SPEND_REQUEST: "hall:spend_request",
        SPEND_SUCCESS: "hall:spend_success",
        SPEND_FAILED: "hall:spend_failed",
        COLLECT_REQUEST: "hall:collect_request",
        COIN_CHANGED: "hall:coin_changed",
        UI_SELECTED_BUILDING_CHANGED: 'UI_SELECTED_BUILDING_CHANGED',
        UPGRADE_REQUEST: 'hall-upgrade-request',
        UPGRADE_COMPLETED: 'hall-upgrade-completed',
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
//# sourceMappingURL=cf4c51e07881a41d382a3acfffb7f13acc2fc122.js.map