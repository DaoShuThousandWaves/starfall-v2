System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Color, HallEvents, gridToWorld, _dec, _class, _crd, ccclass, GhostView;

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "../HallEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgridToWorld(extras) {
    _reporterNs.report("gridToWorld", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGhostState(extras) {
    _reporterNs.report("GhostState", "../Data/GhostState", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      HallEvents = _unresolved_2.HallEvents;
    }, function (_unresolved_3) {
      gridToWorld = _unresolved_3.gridToWorld;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f19a5c8kglH/69wDcckCj8a", "GhostView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'Color']);

      ({
        ccclass
      } = _decorator);

      _export("GhostView", GhostView = (_dec = ccclass('GhostView'), _dec(_class = class GhostView extends Component {
        constructor() {
          super(...arguments);
          this._bus = null;
          this._sprite = null;
        }

        onLoad() {
          this._sprite = this.getComponent(Sprite);
          this.node.active = false;
        }

        setup(bus) {
          this._bus = bus;

          this._bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).GHOST_STATE_CHANGED, this._onStateChanged, this);
        }

        onDestroy() {
          var _this$_bus;

          (_this$_bus = this._bus) == null ? void 0 : _this$_bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).GHOST_STATE_CHANGED, this._onStateChanged, this);
        }

        _onStateChanged(state) {
          this.node.active = state.active;
          if (!state.active) return;
          var pos = (_crd && gridToWorld === void 0 ? (_reportPossibleCrUseOfgridToWorld({
            error: Error()
          }), gridToWorld) : gridToWorld)(state.gridX, state.gridY);
          this.node.setPosition(pos.x, pos.y); // 直接根据 valid 换颜色

          if (state.valid) {
            this._sprite.color = new Color(100, 255, 100, 150);
          } else {
            this._sprite.color = new Color(255, 100, 100, 150);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=40139b1c8a03f0f0eecdd06e6aa5aed6f9d503af.js.map