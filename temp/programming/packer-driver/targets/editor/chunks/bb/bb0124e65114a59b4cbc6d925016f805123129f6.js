System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventMouse, UITransform, Vec2, Vec3, Node, HallEvents, _dec, _class, _crd, ccclass, TAP_TOLERANCE_SQ, WHEEL_ZOOM_STEP, HallInputHandler;

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
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      HallEvents = _unresolved_2.HallEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce3d2SfxGZFwqNljqsiAIzP", "HallInputHandler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventMouse', 'EventTouch', 'Input', 'UITransform', 'Vec2', 'Vec3', 'Node']);

      ({
        ccclass
      } = _decorator);
      TAP_TOLERANCE_SQ = 100;
      WHEEL_ZOOM_STEP = 0.1;

      _export("HallInputHandler", HallInputHandler = (_dec = ccclass('HallInputHandler'), _dec(_class = class HallInputHandler extends Component {
        constructor(...args) {
          super(...args);
          this._bus = null;
          this._targetUITransform = null;
          // 触摸状态
          this._activeTouchId = -1;
          this._lastPinchDist = 0;
          // 鼠标状态
          this._isMouseDragging = false;
          // 复用对象
          this._touchUIPos = new Vec2();
          this._startUIPos = new Vec2();
          this._tempUILoc = new Vec2();
          this._inputWorldPos = new Vec3();
          this._targetLocalPos = new Vec3();
        }

        setup(bus, targetNode) {
          this._bus = bus;
          this._targetUITransform = targetNode.getComponent(UITransform);

          this._registerInputListeners();
        }

        onDestroy() {
          this._unregisterInputListeners();
        } // =========================================================
        //  监听注册 / 注销
        // =========================================================


        _registerInputListeners() {
          this.node.on(Node.EventType.TOUCH_START, this._onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
          this.node.on(Node.EventType.MOUSE_DOWN, this._onMouseDown, this);
          this.node.on(Node.EventType.MOUSE_MOVE, this._onMouseMove, this);
          this.node.on(Node.EventType.MOUSE_UP, this._onMouseUp, this); // ★ 新增：鼠标滚轮

          this.node.on(Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this);
        }

        _unregisterInputListeners() {
          this.node.off(Node.EventType.TOUCH_START, this._onTouchStart, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
          this.node.off(Node.EventType.TOUCH_END, this._onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
          this.node.off(Node.EventType.MOUSE_DOWN, this._onMouseDown, this);
          this.node.off(Node.EventType.MOUSE_MOVE, this._onMouseMove, this);
          this.node.off(Node.EventType.MOUSE_UP, this._onMouseUp, this);
          this.node.off(Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this);
        } // =========================================================
        //  触摸：单指拖动 / 双指缩放 / 点击
        // =========================================================


        _onTouchStart(e) {
          const touches = e.getAllTouches();

          if (touches.length === 1) {
            this._activeTouchId = touches[0].getID();
            e.getUILocation(this._tempUILoc);

            this._startUIPos.set(this._tempUILoc.x, this._tempUILoc.y);
          }
        }

        _onTouchMove(e) {
          const touches = e.getAllTouches();

          if (touches.length >= 2) {
            // 双指缩放
            const p1 = touches[0].getUILocation();
            const p2 = touches[1].getUILocation();
            const currentDist = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);

            if (this._lastPinchDist > 0) {
              const factor = currentDist / this._lastPinchDist;

              this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
                error: Error()
              }), HallEvents) : HallEvents).INPUT_PINCH, factor);
            }

            this._lastPinchDist = currentDist;
          } else if (touches.length === 1 && touches[0].getID() === this._activeTouchId) {
            // 单指拖动
            const delta = e.getUIDelta();

            if (Math.abs(delta.x) > 0 || Math.abs(delta.y) > 0) {
              this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
                error: Error()
              }), HallEvents) : HallEvents).INPUT_SINGLE_DRAG, delta.x, delta.y);
            }
          }
        }

        _onTouchEnd(e) {
          const touches = e.getAllTouches();

          if (touches.length === 0 && this._activeTouchId !== -1) {
            // 无拖拽 → 判定为点击
            e.getUILocation(this._tempUILoc);
            const dx = this._tempUILoc.x - this._startUIPos.x;
            const dy = this._tempUILoc.y - this._startUIPos.y;

            if (dx * dx + dy * dy < TAP_TOLERANCE_SQ && this._lastPinchDist === 0) {
              this._convertToTargetLocal(this._tempUILoc.x, this._tempUILoc.y);

              this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
                error: Error()
              }), HallEvents) : HallEvents).INPUT_CLICK, this._targetLocalPos.x, this._targetLocalPos.y);
            }

            this._activeTouchId = -1;
            this._lastPinchDist = 0;
          } else if (touches.length === 1) {
            // 双指变单指，重置状态
            this._activeTouchId = touches[0].getID();
            this._lastPinchDist = 0;
            e.getUILocation(this._tempUILoc);

            this._startUIPos.set(this._tempUILoc.x, this._tempUILoc.y);
          }
        } // =========================================================
        //  鼠标：拖动 / 点击 / 滚轮缩放
        // =========================================================


        _onMouseDown(e) {
          if (e.getButton() !== EventMouse.BUTTON_LEFT) return;
          this._isMouseDragging = false; // 按下时还不知道是点击还是拖动

          e.getUILocation(this._touchUIPos);

          this._startUIPos.set(this._touchUIPos.x, this._touchUIPos.y);
        }

        _onMouseMove(e) {
          if (!this._isMouseDragging && e.getButton() !== EventMouse.BUTTON_LEFT) {
            // 如果没有按下左键，不处理拖动
            return;
          }

          const delta = e.getUIDelta();

          if (Math.abs(delta.x) > 0 || Math.abs(delta.y) > 0) {
            this._isMouseDragging = true;

            this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).INPUT_SINGLE_DRAG, delta.x, delta.y);
          }
        }

        _onMouseUp(e) {
          if (e.getButton() !== EventMouse.BUTTON_LEFT) return;
          e.getUILocation(this._touchUIPos);
          const dx = this._touchUIPos.x - this._startUIPos.x;
          const dy = this._touchUIPos.y - this._startUIPos.y;

          this._convertToTargetLocal(this._touchUIPos.x, this._touchUIPos.y);

          if (dx * dx + dy * dy < TAP_TOLERANCE_SQ) {
            // 移动距离很小 → 点击
            this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).INPUT_CLICK, this._targetLocalPos.x, this._targetLocalPos.y);
          } else {
            // 拖拽结束
            this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
              error: Error()
            }), HallEvents) : HallEvents).INPUT_DRAG_END, this._targetLocalPos.x, this._targetLocalPos.y);
          }

          this._isMouseDragging = false;
        }

        _onMouseWheel(e) {
          const scrollY = e.getScrollY();
          if (scrollY === 0) return; // 向上滚 → 放大，向下滚 → 缩小

          const factor = scrollY > 0 ? 1 + WHEEL_ZOOM_STEP : 1 - WHEEL_ZOOM_STEP;

          this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).INPUT_PINCH, factor);
        } // =========================================================
        //  坐标转换
        // =========================================================


        _convertToTargetLocal(uiX, uiY) {
          this._inputWorldPos.set(uiX, uiY, 0);

          this._targetUITransform.convertToNodeSpaceAR(this._inputWorldPos, this._targetLocalPos);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb0124e65114a59b4cbc6d925016f805123129f6.js.map