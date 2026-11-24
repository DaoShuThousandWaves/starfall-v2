System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, view, ProfileStore, GameData, _crd;

  function _reportPossibleCrUseOfProfileStore(extras) {
    _reporterNs.report("ProfileStore", "../Profile/ProfileStore", _context.meta, extras);
  }

  _export("GameData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      view = _cc.view;
    }, function (_unresolved_2) {
      ProfileStore = _unresolved_2.ProfileStore;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb592HV6W9N1Z0AvfocMsRx", "GameData", undefined);

      __checkObsolete__(['view']);

      _export("GameData", GameData = class GameData {
        static init() {
          const size = view.getVisibleSize();
          this.viewW = size.width;
          this.viewH = size.height;
          this.profile.load();
        }

      });

      GameData.viewW = 720;
      GameData.viewH = 1280;
      GameData.profile = new (_crd && ProfileStore === void 0 ? (_reportPossibleCrUseOfProfileStore({
        error: Error()
      }), ProfileStore) : ProfileStore)();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=30aa12466c5ac0df6202da1f02102513af95ce22.js.map