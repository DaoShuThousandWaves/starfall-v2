System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, HallEvents, GameData, _dec, _class, _crd, ccclass, property, HallScene;

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "./HallEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Core/Data/GameData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      HallEvents = _unresolved_2.HallEvents;
    }, function (_unresolved_3) {
      GameData = _unresolved_3.GameData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4027bP1utVEkrvW1F8gEuMB", "HallScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HallScene", HallScene = (_dec = ccclass('HallScene'), _dec(_class = class HallScene extends Component {
        constructor(...args) {
          super(...args);
          this._gameSeconds = 0;
          this._secondsPerMonth = 60;
          this._bus = null;
        }

        onLoad() {
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).init();
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.data.coins; // 应为 300

          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.data.coins += 100;
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.save();
          console.log((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.data.coins);
        } // 在 update 或 FixedTick 的 onTick 回调里


        _onHallTick(dt) {
          this._gameSeconds += dt;

          if (this._gameSeconds >= this._secondsPerMonth) {
            this._gameSeconds -= this._secondsPerMonth;

            this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).MONTH_PASSED, this._gameSeconds);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=25930c2512a7ebb58f441e0fc932aa156d54c782.js.map