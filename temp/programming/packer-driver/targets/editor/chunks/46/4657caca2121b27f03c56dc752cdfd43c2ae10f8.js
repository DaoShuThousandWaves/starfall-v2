System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Color, _dec, _class, _crd, ccclass, GhostView;

  function _reportPossibleCrUseOfEntityView(extras) {
    _reporterNs.report("EntityView", "../../Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGhostEntity(extras) {
    _reporterNs.report("GhostEntity", "../Entity/GhostEntity", _context.meta, extras);
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
      Color = _cc.Color;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f19a5c8kglH/69wDcckCj8a", "GhostView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'Color']);

      ({
        ccclass
      } = _decorator);

      _export("GhostView", GhostView = (_dec = ccclass('GhostView'), _dec(_class = class GhostView extends Component {
        constructor(...args) {
          super(...args);
          this._ghost = null;
          this._sprite = null;
        }

        onLoad() {
          this._sprite = this.getComponent(Sprite);
        }

        bind(entity) {
          this._ghost = entity;
        }

        sync(dt) {
          if (!this._ghost) return;
          this.node.active = this._ghost.active;
          if (!this._ghost.active) return; // 坐标在 GhostSystem 里已经算好了

          this.node.setPosition(this._ghost.x, this._ghost.y);

          if (this._ghost.valid) {
            this._sprite.color = new Color(100, 255, 100, 150);
          } else {
            this._sprite.color = new Color(255, 100, 100, 150);
          }
        }

        unbind() {
          this._ghost = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4657caca2121b27f03c56dc752cdfd43c2ae10f8.js.map