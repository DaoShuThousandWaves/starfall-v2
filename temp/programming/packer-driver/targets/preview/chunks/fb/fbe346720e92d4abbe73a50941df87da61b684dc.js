System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventMouse, Input, UITransform, Vec2, Vec3, HallEvents, _dec, _class, _crd, ccclass, HallInputHandler;

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "./HallEvents", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      HallEvents = _unresolved_2.HallEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce3d2SfxGZFwqNljqsiAIzP", "HallInputHandler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventMouse', 'EventTouch', 'Input', 'input', 'UITransform', 'Vec2', 'Vec3', 'Node']);

      ({
        ccclass
      } = _decorator);

      _export("HallInputHandler", HallInputHandler = (_dec = ccclass('HallInputHandler'), _dec(_class = class HallInputHandler extends Component {
        constructor() {
          super(...arguments);
          this._bus = null;
          this._targetUITransform = null;
          this._isDragging = false;
          this._activeSource = 'none';
          // === 复用对象，零 GC，且命名精确 ===
          this._touchUIPos = new Vec2();
          // 触摸/鼠标的屏幕绝对坐标
          this._startUIPos = new Vec2();
          // 按下时的屏幕绝对坐标
          this._inputWorldPos = new Vec3();
          // 准备转换的输入坐标
          this._targetLocalPos = new Vec3();
        }

        // 转换后的目标节点局部坐标
        setup(bus, targetNode) {
          this._bus = bus;
          this._targetUITransform = targetNode.getComponent(UITransform);
        }

        onEnable() {
          this.node.on(Input.EventType.TOUCH_START, this._onTouchStart, this);
          this.node.on(Input.EventType.TOUCH_MOVE, this._onTouchMove, this);
          this.node.on(Input.EventType.TOUCH_END, this._onTouchEnd, this);
          this.node.on(Input.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
          this.node.on(Input.EventType.MOUSE_DOWN, this._onMouseDown, this);
          this.node.on(Input.EventType.MOUSE_MOVE, this._onMouseMove, this);
          this.node.on(Input.EventType.MOUSE_UP, this._onMouseUp, this);
        }

        onDisable() {
          this.node.off(Input.EventType.TOUCH_START, this._onTouchStart, this);
          this.node.off(Input.EventType.TOUCH_MOVE, this._onTouchMove, this);
          this.node.off(Input.EventType.TOUCH_END, this._onTouchEnd, this);
          this.node.off(Input.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
          this.node.off(Input.EventType.MOUSE_DOWN, this._onMouseDown, this);
          this.node.off(Input.EventType.MOUSE_MOVE, this._onMouseMove, this);
          this.node.off(Input.EventType.MOUSE_UP, this._onMouseUp, this);
        } // ===== 触摸 =====
        // ===== 触摸 =====


        _onTouchStart(e) {
          this._activeSource = 'touch';
          this._isDragging = true;
          e.getUILocation(this._touchUIPos);

          this._startUIPos.set(this._touchUIPos.x, this._touchUIPos.y);
        }

        _onTouchMove(e) {
          if (this._activeSource !== 'touch' || !this._isDragging || !this._bus) return;
          e.getUILocation(this._touchUIPos);

          this._emitDrag(this._touchUIPos.x, this._touchUIPos.y);
        }

        _onTouchEnd(e) {
          if (this._activeSource !== 'touch') return;
          this._isDragging = false;
          this._activeSource = 'none';
          e.getUILocation(this._touchUIPos);

          this._checkClickOrEndDrag(this._touchUIPos.x, this._touchUIPos.y);
        } // ===== 鼠标（同理） =====


        _onMouseDown(e) {
          if (e.getButton() !== EventMouse.BUTTON_LEFT) return;
          this._activeSource = 'mouse';
          this._isDragging = true;
          e.getUILocation(this._touchUIPos);

          this._startUIPos.set(this._touchUIPos.x, this._touchUIPos.y);
        }

        _onMouseMove(e) {
          if (this._activeSource !== 'mouse' || !this._isDragging || !this._bus) return;
          e.getUILocation(this._touchUIPos);

          this._emitDrag(this._touchUIPos.x, this._touchUIPos.y);
        }

        _onMouseUp(e) {
          if (e.getButton() !== EventMouse.BUTTON_LEFT || this._activeSource !== 'mouse') return;
          this._isDragging = false;
          this._activeSource = 'none';
          e.getUILocation(this._touchUIPos);

          this._checkClickOrEndDrag(this._touchUIPos.x, this._touchUIPos.y);
        } // ===== 核心转换逻辑 =====
        // 把转换逻辑提取出来


        _convertToTargetLocal(uiX, uiY) {
          this._inputWorldPos.set(uiX, uiY, 0);

          this._targetUITransform.convertToNodeSpaceAR(this._inputWorldPos, this._targetLocalPos);
        }

        _emitDrag(uiX, uiY) {
          this._convertToTargetLocal(uiX, uiY);

          this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).INPUT_DRAG, this._targetLocalPos.x, this._targetLocalPos.y);
        }

        _checkClickOrEndDrag(uiX, uiY) {
          var dx = uiX - this._startUIPos.x;
          var dy = uiY - this._startUIPos.y;

          this._convertToTargetLocal(uiX, uiY);

          if (dx * dx + dy * dy < 100) {
            this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).INPUT_CLICK, this._targetLocalPos.x, this._targetLocalPos.y);
          } else {
            this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).INPUT_DRAG_END, this._targetLocalPos.x, this._targetLocalPos.y);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fbe346720e92d4abbe73a50941df87da61b684dc.js.map