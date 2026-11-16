System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, BATTLE_EVENT, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, UpgradePanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../../Battle/BattleEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardConfigData(extras) {
    _reporterNs.report("CardConfigData", "../../Battle/Config/CardConfig", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BATTLE_EVENT = _unresolved_2.BATTLE_EVENT;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9c9a7KOXJpLIZS4GrekY6ez", "UpgradePanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UpgradePanel", UpgradePanel = (_dec = ccclass('UpgradePanel'), _dec2 = property(Node), _dec3 = property([Node]), _dec(_class = (_class2 = class UpgradePanel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "rootNode", _descriptor, this);

          /** 三个卡牌按钮。每个按钮下有一个 Label 显示名字和描述 */
          _initializerDefineProperty(this, "cardNodes", _descriptor2, this);

          this._viewModel = null;
          this._bus = null;
          this._currentCards = [];
        }

        setup(viewModel, bus) {
          this._viewModel = viewModel;
          this._bus = bus; // 只监听ViewModel发出的“UI意图变更”

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).UI_UPGRADE_PANEL_STATE_CHANGED, this._onUIStateChanged, this);
        }

        onLoad() {
          this.rootNode.active = false; // 绑定每个卡牌按钮的点击

          for (let i = 0; i < this.cardNodes.length; i++) {
            const node = this.cardNodes[i];
            if (!node) continue;
            node.on(Node.EventType.TOUCH_END, () => this._onCardClick(i), this);
          }
        }

        onDestroy() {
          var _this$_bus;

          (_this$_bus = this._bus) == null ? void 0 : _this$_bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).UI_UPGRADE_PANEL_STATE_CHANGED, this._onUIStateChanged, this);

          for (const node of this.cardNodes) {
            if (node) node.off(Node.EventType.TOUCH_END);
          }
        }

        _onUIStateChanged(visible) {
          this.rootNode.active = visible;
          if (visible) this._renderCards(this._viewModel.currentCards);
        }

        _renderCards() {
          for (let i = 0; i < this.cardNodes.length; i++) {
            var _node$getChildByName;

            const node = this.cardNodes[i];
            const card = this._currentCards[i];
            if (!node) continue;

            if (!card) {
              node.active = false;
              continue;
            }

            node.active = true;
            const label = (_node$getChildByName = node.getChildByName('Label')) == null ? void 0 : _node$getChildByName.getComponent(Label);

            if (label) {
              label.string = `${card.name}\n${card.desc}`;
            }
          }
        }

        _onCardClick(index) {
          const card = this._currentCards[index];
          if (!card) return;
          this.rootNode.active = false;
          this._currentCards = [];

          this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).CARD_SELECTED, card);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rootNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardNodes", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9fed13d85d7441151a9b955d1a1be6ab9582bc9.js.map