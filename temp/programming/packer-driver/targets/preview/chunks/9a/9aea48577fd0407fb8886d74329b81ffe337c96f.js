System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, ProfileStore, _crd;

  function _reportPossibleCrUseOfPlayerProfile(extras) {
    _reporterNs.report("PlayerProfile", "./PlayerProfile", _context.meta, extras);
  }

  _export("ProfileStore", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95b57ol1D5FQI0Tq3BHduaY", "ProfileStore", undefined);

      __checkObsolete__(['sys']);

      _export("ProfileStore", ProfileStore = class ProfileStore {
        constructor() {
          this.SAVE_KEY = 'SAVE_DATA';
          this._playerSaveData = null;
        }

        load() {
          var saveData = sys.localStorage.getItem(this.SAVE_KEY);
          var parsedSaveData = JSON.parse(saveData);
          this._playerSaveData = parsedSaveData;
        }

        get data() {
          return this._playerSaveData;
        }

        save() {
          var saveData = JSON.stringify(this._playerSaveData);
          sys.localStorage.setItem(this.SAVE_KEY, saveData);
        }

        clear() {
          sys.localStorage.removeItem(this.SAVE_KEY);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9aea48577fd0407fb8886d74329b81ffe337c96f.js.map