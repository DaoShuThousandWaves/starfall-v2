System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function createCardState() {
    return {
      stacks: new Map()
    };
  }

  _export("createCardState", createCardState);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0389KacThPG6x7sJymIQlS", "CardState", undefined);
      /** 玩家已叠的卡。key = cardId，value = 叠了几层 */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c7865e43a723ab37bd9e7bb15376b7dea38d130.js.map