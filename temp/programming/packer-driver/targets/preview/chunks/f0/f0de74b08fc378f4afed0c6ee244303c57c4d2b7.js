System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, view, GameData, _crd;

  _export("GameData", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb592HV6W9N1Z0AvfocMsRx", "GameData", undefined);

      __checkObsolete__(['view']);

      _export("GameData", GameData = class GameData {
        static init() {
          var size = view.getVisibleSize();
          this.viewW = size.width;
          this.viewH = size.height;
        }

      });

      GameData.viewW = 720;
      GameData.viewH = 1280;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0de74b08fc378f4afed0c6ee244303c57c4d2b7.js.map