System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, SpriteFrame, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, BuildingView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEntityView(extras) {
    _reporterNs.report("EntityView", "../../Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingEntity(extras) {
    _reporterNs.report("BuildingEntity", "../Entity/BuildingEntity", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5f79c13khHmZfzs2o2dieu", "BuildingView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BuildingView", BuildingView = (_dec = ccclass('BuildingView'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = class BuildingView extends Component {
        constructor() {
          super(...arguments);

          // 外部可以在编辑器里拖不同建筑的图片进来
          _initializerDefineProperty(this, "stallSprite", _descriptor, this);

          _initializerDefineProperty(this, "portalSprite", _descriptor2, this);

          this._building = null;
          this._sprite = null;
        }

        onLoad() {
          this._sprite = this.getComponent(Sprite);
        }

        bind(entity) {
          this._building = entity; // 根据实体类型，切换对应的图片

          if (this._building.typeId === 'stall') {
            this._sprite.spriteFrame = this.stallSprite;
          } else if (this._building.typeId === 'portal') {
            this._sprite.spriteFrame = this.portalSprite;
          }

          this.sync(0); // 绑定完立刻同步一次位置
        }

        sync(dt) {
          if (!this._building) return; // 坐标已经在 BuildSystem 里通过 gridToWorld 算好并赋值给 x, y 了

          this.node.setPosition(this._building.x, this._building.y);
        }

        unbind() {
          this._building = null;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stallSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "portalSprite", [_dec3], {
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
//# sourceMappingURL=60ae698cf196aaff5b5573589f00fc249dd88bf0.js.map