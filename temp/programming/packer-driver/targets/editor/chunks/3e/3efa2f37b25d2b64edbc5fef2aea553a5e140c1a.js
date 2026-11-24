System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, ProfileStore, _crd, SAVE_KEY, CURRENT_VERSION;

  function createDefault() {
    return {
      version: CURRENT_VERSION,
      coins: 300,
      // 起始金币，够建 3 个小摊
      buildings: [],
      ownedWeapons: [],
      lastBattleWin: false
    };
  }

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

      SAVE_KEY = 'SAVE_DATA';
      CURRENT_VERSION = 1;

      _export("ProfileStore", ProfileStore = class ProfileStore {
        constructor() {
          this._data = createDefault();
          this._loaded = false;
        }

        load() {
          if (this._loaded) return; // Battle / Hall 都调 init 时只读一次

          this._loaded = true;
          const raw = sys.localStorage.getItem(SAVE_KEY);

          if (raw) {
            try {
              const parsed = JSON.parse(raw);
              this._data = this._migrate(parsed);
              return;
            } catch (e) {
              console.warn('[ProfileStore] 存档解析失败，使用默认值', e);
            }
          }

          this._data = createDefault();
        }

        get data() {
          return this._data;
        }

        save() {
          try {
            sys.localStorage.setItem(SAVE_KEY, JSON.stringify(this._data));
          } catch (e) {
            console.warn('[ProfileStore] 存档写入失败', e);
          }
        }

        clear() {
          sys.localStorage.removeItem(SAVE_KEY);
          this._data = createDefault();
        }

        _migrate(parsed) {
          var _parsed$coins, _parsed$buildings, _parsed$ownedWeapons, _parsed$lastBattleWin;

          // 未来加版本升级：if ((parsed.version ?? 0) < 2) { ... }
          return {
            version: CURRENT_VERSION,
            coins: (_parsed$coins = parsed.coins) != null ? _parsed$coins : 300,
            buildings: (_parsed$buildings = parsed.buildings) != null ? _parsed$buildings : [],
            ownedWeapons: (_parsed$ownedWeapons = parsed.ownedWeapons) != null ? _parsed$ownedWeapons : [],
            lastBattleWin: (_parsed$lastBattleWin = parsed.lastBattleWin) != null ? _parsed$lastBattleWin : false
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3efa2f37b25d2b64edbc5fef2aea553a5e140c1a.js.map