System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, _dec, _class, _crd, ccclass, BuildingView;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5f79c13khHmZfzs2o2dieu", "BuildingView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'Color']);

      ({
        ccclass
      } = _decorator);

      _export("BuildingView", BuildingView = (_dec = ccclass('BuildingView'), _dec(_class = class BuildingView extends Component {
        constructor() {
          super(...arguments);
          this._building = null;
          this._sprite = null;
        }

        onLoad() {
          this._sprite = this.getComponent(Sprite);
        }

        bind(entity) {
          this._building = entity;
          this.sync(0);
        }

        sync(dt) {
          if (!this._building) return; // 位置在 BuildSystem 里已经算好了，直接更新

          this.node.setPosition(this._building.x, this._building.y);
        }

        unbind() {
          this._building = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=32f19090007f912989a45587207d8bcd874c71c7.js.map