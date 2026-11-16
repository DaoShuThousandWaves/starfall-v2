System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventTarget, Bus, _crd;

  _export("Bus", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ad993vpwHtIuIuJ/7vP2LIN", "Bus", undefined);

      __checkObsolete__(['EventTarget']);

      _export("Bus", Bus = class Bus extends EventTarget {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7a3bb2699ad2c46ada58d2a3db53473ca9f2c4da.js.map