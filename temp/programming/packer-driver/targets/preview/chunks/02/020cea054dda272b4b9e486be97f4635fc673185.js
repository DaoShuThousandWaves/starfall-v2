System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventMouse, Input, input, HallEvents, GameData, worldToGrid, _dec, _class, _crd, ccclass, HallInputSystem;

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "../HallEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../../Core/Data/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfworldToGrid(extras) {
    _reporterNs.report("worldToGrid", "../Config/GridConfig", _context.meta, extras);
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
      EventMouse = _cc.EventMouse;
      Input = _cc.Input;
      input = _cc.input;
    }, function (_unresolved_2) {
      HallEvents = _unresolved_2.HallEvents;
    }, function (_unresolved_3) {
      GameData = _unresolved_3.GameData;
    }, function (_unresolved_4) {
      worldToGrid = _unresolved_4.worldToGrid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fbf08vvvahNg6HlA4KOEpka", "HallInputSystem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventMouse', 'EventTouch', 'Input', 'input']);

      ({
        ccclass
      } = _decorator);

      _export("HallInputSystem", HallInputSystem = (_dec = ccclass('HallInputSystem'), _dec(_class = class HallInputSystem extends Component {
        constructor() {
          super(...arguments);
          this._bus = null;
        }

        setup(bus) {
          this._bus = bus;
        }

        onEnable() {
          input.on(Input.EventType.TOUCH_END, this._onTouchEnd, this);
          input.on(Input.EventType.MOUSE_UP, this._onMouseUp, this);
        }

        onDisable() {
          input.off(Input.EventType.TOUCH_END, this._onTouchEnd, this);
          input.off(Input.EventType.MOUSE_UP, this._onMouseUp, this);
        }

        _onTouchEnd(e) {
          var p = e.getUILocation();

          this._emitClick(p.x, p.y);
        }

        _onMouseUp(e) {
          if (e.getButton() !== EventMouse.BUTTON_LEFT) return;
          var p = e.getUILocation();

          this._emitClick(p.x, p.y);
        }

        _emitClick(uiX, uiY) {
          if (!this._bus) return; // UI 坐标（左下原点）→ 世界坐标（屏幕中心原点）

          var wx = uiX - (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewW / 2;
          var wy = uiY - (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2;
          var grid = (_crd && worldToGrid === void 0 ? (_reportPossibleCrUseOfworldToGrid({
            error: Error()
          }), worldToGrid) : worldToGrid)(wx, wy);
          if (!grid) return; // 点在网格外，忽略

          this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).CLICK_GRID, grid);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=020cea054dda272b4b9e486be97f4635fc673185.js.map