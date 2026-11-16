System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, BATTLE_EVENT, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PauseButton;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../../Battle/BattleEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../Battle/System/BattleStateSystem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      BATTLE_EVENT = _unresolved_2.BATTLE_EVENT;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0486dpAZXBPorUxhb6gPDzl", "PauseButton", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PauseButton", PauseButton = (_dec = ccclass('PauseButton'), _dec2 = property(Label), _dec3 = property(Button), _dec(_class = (_class2 = class PauseButton extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "label", _descriptor, this);

          _initializerDefineProperty(this, "button", _descriptor2, this);

          this._bus = null;
          this._isPaused = false;
        }

        setup(bus) {
          this._bus = bus; // 【改】监听状态机事实，不再监听已废弃的 PAUSE_TOGGLED

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).GAME_STATE_CHANGED, this._onGameStateChanged, this);
        }

        onLoad() {
          // 【改】null 保护
          if (this.button) {
            this.button.node.on(Button.EventType.CLICK, this._onClick, this);
          }

          this._updateLabel();
        }

        onDestroy() {
          var _this$_bus;

          // 【改】null 保护
          if (this.button) {
            this.button.node.off(Button.EventType.CLICK, this._onClick, this);
          }

          (_this$_bus = this._bus) == null ? void 0 : _this$_bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).GAME_STATE_CHANGED, this._onGameStateChanged, this);
        }

        _onClick() {
          // 【改】null 保护
          if (!this._bus) return;

          this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLE_REQUEST);
        }

        setEnabled(enabled) {
          if (this.button) this.button.interactable = enabled;
        }

        _onGameStateChanged(state) {
          // 【改】根据状态机判断按钮文字
          this._isPaused = state === 'paused';

          this._updateLabel();
        }

        _updateLabel() {
          if (this.label) {
            this.label.string = this._isPaused ? '继续' : '暂停';
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d840187e0f72dc8b08e12815fe664f85531512eb.js.map