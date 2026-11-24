System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Graphics, Label, HallEvents, gridToWorld, GRID_SIZE, BUILDING_CONFIG, _dec, _class, _crd, ccclass, GhostView;

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "../HallEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgridToWorld(extras) {
    _reporterNs.report("gridToWorld", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGRID_SIZE(extras) {
    _reporterNs.report("GRID_SIZE", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGhostState(extras) {
    _reporterNs.report("GhostState", "../System/GhostSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBUILDING_CONFIG(extras) {
    _reporterNs.report("BUILDING_CONFIG", "../Config/BuildingConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      HallEvents = _unresolved_2.HallEvents;
    }, function (_unresolved_3) {
      gridToWorld = _unresolved_3.gridToWorld;
      GRID_SIZE = _unresolved_3.GRID_SIZE;
    }, function (_unresolved_4) {
      BUILDING_CONFIG = _unresolved_4.BUILDING_CONFIG;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f19a5c8kglH/69wDcckCj8a", "GhostView", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Graphics', 'Label']);

      ({
        ccclass
      } = _decorator);

      _export("GhostView", GhostView = (_dec = ccclass('GhostView'), _dec(_class = class GhostView extends Component {
        constructor(...args) {
          super(...args);
          this._bus = null;
          this._g = null;
          this._label = null;
        }

        setup(bus) {
          this._bus = bus;

          this._bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).GHOST_STATE_CHANGED, this._onState, this);
        }

        onLoad() {
          this._g = this.node.addComponent(Graphics);
          this._label = this.node.addComponent(Label);
          this._label.fontSize = 18;
          this.node.active = false;
        }

        onDestroy() {
          var _this$_bus;

          (_this$_bus = this._bus) == null ? void 0 : _this$_bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).GHOST_STATE_CHANGED, this._onState, this);
        }

        _onState(s) {
          this.node.active = s.active;
          if (!s.active) return;
          const w = (_crd && gridToWorld === void 0 ? (_reportPossibleCrUseOfgridToWorld({
            error: Error()
          }), gridToWorld) : gridToWorld)(s.gridX, s.gridY);
          this.node.setPosition(w.x, w.y);

          this._draw(s.valid);

          const cfg = (_crd && BUILDING_CONFIG === void 0 ? (_reportPossibleCrUseOfBUILDING_CONFIG({
            error: Error()
          }), BUILDING_CONFIG) : BUILDING_CONFIG)[s.typeId];
          this._label.string = cfg ? `${cfg.name}\n${cfg.cost}G` : '';
          this._label.color = s.valid ? new Color(255, 255, 255, 255) : new Color(255, 120, 120, 255);
        }

        _draw(valid) {
          this._g.clear();

          this._g.fillColor = valid ? new Color(80, 200, 120, 160) // 半透明绿
          : new Color(220, 80, 80, 160); // 半透明红

          const half = (_crd && GRID_SIZE === void 0 ? (_reportPossibleCrUseOfGRID_SIZE({
            error: Error()
          }), GRID_SIZE) : GRID_SIZE) / 2 - 6;

          this._g.rect(-half, -half, half * 2, half * 2);

          this._g.fill();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b7e4b74f661ab281be645549182d667a2c466392.js.map