System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EXP_REWARD;

  /** 第 level 级升到 level+1 级所需经验 */
  function expForLevel(level) {
    return 50 + (level - 1) * 30;
  }
  /** 不同击杀给的经验 */


  _export("expForLevel", expForLevel);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79a04oPz8pIaLCouvAxpRRM", "ExpConfig", undefined);

      _export("EXP_REWARD", EXP_REWARD = {
        enemy: 15,
        boss: 400
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c6c9945adfdfab294e054f01eb1d57807622771.js.map