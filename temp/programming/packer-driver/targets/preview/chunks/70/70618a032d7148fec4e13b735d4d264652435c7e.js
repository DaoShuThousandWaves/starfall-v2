System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, BATTLE_EVENT, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, ResultPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../../Battle/BattleEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleViewModel(extras) {
    _reporterNs.report("BattleViewModel", "../../Battle/ViewModel/BattleViewModel", _context.meta, extras);
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
      Node = _cc.Node;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      BATTLE_EVENT = _unresolved_2.BATTLE_EVENT;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0ecf5jU6NKvpMr2MNDVX0o", "ResultPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ResultPanel", ResultPanel = (_dec = ccclass('ResultPanel'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class ResultPanel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "rootNode", _descriptor, this);

          _initializerDefineProperty(this, "titleLabel", _descriptor2, this);

          // 三个按钮节点
          _initializerDefineProperty(this, "btnResume", _descriptor3, this);

          _initializerDefineProperty(this, "btnRestart", _descriptor4, this);

          _initializerDefineProperty(this, "btnQuit", _descriptor5, this);

          this._bus = null;
          this._viewModel = null;
        }

        setup(bus, viewModel) {
          this.onDestroy();
          this._bus = bus;
          this._viewModel = viewModel;
          this.rootNode.active = false;

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).UI_RESULT_PANEL_STATE_CHANGED, this._onUIStateChanged, this); // 统一在代码里绑定事件，不依赖编辑器，避免漏配


          if (this.btnResume) {
            this.btnResume.on(Node.EventType.TOUCH_END, () => {
              this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                error: Error()
              }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLE_REQUEST);
            }, this);
          }

          if (this.btnRestart) {
            this.btnRestart.on(Node.EventType.TOUCH_END, () => {
              this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                error: Error()
              }), BATTLE_EVENT) : BATTLE_EVENT).RESTART_REQUEST);
            }, this);
          }

          if (this.btnQuit) {
            this.btnQuit.on(Node.EventType.TOUCH_END, () => {
              this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                error: Error()
              }), BATTLE_EVENT) : BATTLE_EVENT).QUIT_REQUEST);
            }, this);
          }
        }

        onDestroy() {
          var _this$_bus;

          (_this$_bus = this._bus) == null ? void 0 : _this$_bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).UI_RESULT_PANEL_STATE_CHANGED, this._onUIStateChanged, this);
          this.btnResume.off(Node.EventType.TOUCH_END, () => {
            this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
              error: Error()
            }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLE_REQUEST);
          }, this);
          this.btnRestart.off(Node.EventType.TOUCH_END, () => {
            this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
              error: Error()
            }), BATTLE_EVENT) : BATTLE_EVENT).RESTART_REQUEST);
          }, this);
          this.btnQuit.off(Node.EventType.TOUCH_END, () => {
            this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
              error: Error()
            }), BATTLE_EVENT) : BATTLE_EVENT).QUIT_REQUEST);
          }, this);
        }

        _onUIStateChanged(shouldShow) {
          this.rootNode.active = shouldShow; // 显示时，从 ViewModel 拉取数据填充

          if (shouldShow) {
            this.titleLabel.string = this._viewModel.resultTitle;

            if (this.btnResume) {
              this.btnResume.active = this._viewModel.resultCanResume;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rootNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnResume", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnRestart", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnQuit", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=70618a032d7148fec4e13b735d4d264652435c7e.js.map