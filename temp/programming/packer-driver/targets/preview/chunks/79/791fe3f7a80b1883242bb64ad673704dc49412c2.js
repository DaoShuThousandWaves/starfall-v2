System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, ProgressBar, BATTLE_EVENT, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, BossHealthUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../../Battle/BattleEvents", _context.meta, extras);
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
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      BATTLE_EVENT = _unresolved_2.BATTLE_EVENT;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7053e9o2ipHn4X4ScFR2qB8", "BossHealthUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BossHealthUI", BossHealthUI = (_dec = ccclass('BossHealthUI'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(ProgressBar), _dec(_class = (_class2 = class BossHealthUI extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "rootNode", _descriptor, this);

          _initializerDefineProperty(this, "nameLabel", _descriptor2, this);

          _initializerDefineProperty(this, "progressBar", _descriptor3, this);

          this._bus = null;
        }

        setup(bus) {
          this._bus = bus;

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_SPAWNED, this._onBossSpawned, this);

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_HP_CHANGED, this._onHpChanged, this);

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_KILLED, this._onBossKilled, this);
        }

        onLoad() {
          this.rootNode.active = false;
        }

        onDestroy() {
          var _this$_bus, _this$_bus2, _this$_bus3;

          (_this$_bus = this._bus) == null ? void 0 : _this$_bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_SPAWNED, this._onBossSpawned, this);
          (_this$_bus2 = this._bus) == null ? void 0 : _this$_bus2.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_HP_CHANGED, this._onHpChanged, this);
          (_this$_bus3 = this._bus) == null ? void 0 : _this$_bus3.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_KILLED, this._onBossKilled, this);
        } // ⭐ UI 自己决定“Boss 出现了”怎么显示


        _onBossSpawned(bossName) {
          this.rootNode.active = true;
          this.nameLabel.string = bossName;
          this.progressBar.progress = 1;
        } // ⭐ UI 自己决定“血量变了”怎么显示


        _onHpChanged(ratio) {
          this.progressBar.progress = Math.max(0, Math.min(1, ratio));
        } // ⭐ UI 自己决定“Boss 死了”怎么显示


        _onBossKilled() {
          this.rootNode.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rootNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec4], {
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
//# sourceMappingURL=791fe3f7a80b1883242bb64ad673704dc49412c2.js.map