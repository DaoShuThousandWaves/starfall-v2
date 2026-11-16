System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventMouse, Input, input, Vec2, BATTLE_EVENT, _dec, _class, _crd, ccclass, BattleInputHandler;

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "./BattleEvents", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      BATTLE_EVENT = _unresolved_2.BATTLE_EVENT;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21d45KDHp1PxY5M9wZw+0Gw", "BattleInputHandler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventMouse', 'EventTouch', 'Input', 'input', 'Vec2']);

      ({
        ccclass
      } = _decorator);

      _export("BattleInputHandler", BattleInputHandler = (_dec = ccclass('BattleInputHandler'), _dec(_class = class BattleInputHandler extends Component {
        constructor() {
          super(...arguments);
          this._bus = null;
          this._dragging = false;
          this._activeSource = 'none';
          // ← 新增
          this._tempDelta = new Vec2();
        }

        setup(bus) {
          this._bus = bus;
        }

        onEnable() {
          input.on(Input.EventType.TOUCH_START, this._onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this._onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this._onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
          input.on(Input.EventType.MOUSE_DOWN, this._onMouseDown, this);
          input.on(Input.EventType.MOUSE_MOVE, this._onMouseMove, this);
          input.on(Input.EventType.MOUSE_UP, this._onMouseUp, this);
        }

        onDisable() {
          input.off(Input.EventType.TOUCH_START, this._onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this._onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this._onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
          input.off(Input.EventType.MOUSE_DOWN, this._onMouseDown, this);
          input.off(Input.EventType.MOUSE_MOVE, this._onMouseMove, this);
          input.off(Input.EventType.MOUSE_UP, this._onMouseUp, this);
        } // ===== 触摸 =====


        _onTouchStart(e) {
          this._activeSource = 'touch'; // ← 锁定触摸

          this._dragging = true;
        }

        _onTouchMove(e) {
          if (this._activeSource !== 'touch') return; // ← 只有触摸源才处理

          if (!this._dragging || !this._bus) return;
          e.getUIDelta(this._tempDelta);

          this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PLAYER_MOVE, this._tempDelta.x, this._tempDelta.y);
        }

        _onTouchEnd(e) {
          if (this._activeSource !== 'touch') return;
          this._dragging = false;
          this._activeSource = 'none';
        } // ===== 鼠标 =====


        _onMouseDown(e) {
          if (e.getButton() !== EventMouse.BUTTON_LEFT) return;
          this._activeSource = 'mouse'; // ← 锁定鼠标

          this._dragging = true;
        }

        _onMouseMove(e) {
          if (this._activeSource !== 'mouse') return; // ← 只有鼠标源才处理

          if (!this._dragging || !this._bus) return;
          e.getUIDelta(this._tempDelta);

          this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PLAYER_MOVE, this._tempDelta.x, this._tempDelta.y);
        }

        _onMouseUp(e) {
          if (e.getButton() !== EventMouse.BUTTON_LEFT) return;
          if (this._activeSource !== 'mouse') return;
          this._dragging = false;
          this._activeSource = 'none';
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6f5b870c7a5e061d4dfd56a30ecef1f0c234624d.js.map