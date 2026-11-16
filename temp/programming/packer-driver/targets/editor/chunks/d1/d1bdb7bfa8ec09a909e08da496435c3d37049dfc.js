System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Graphics, _dec, _class, _crd, ccclass, BulletView;

  function _reportPossibleCrUseOfEntityView(extras) {
    _reporterNs.report("EntityView", "../../Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../Entity/Bullet", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b768hNvKZJ1pS4SlzXEDTS", "BulletView", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Graphics', 'Node']);

      ({
        ccclass
      } = _decorator);

      _export("BulletView", BulletView = (_dec = ccclass('BulletView'), _dec(_class = class BulletView extends Component {
        constructor(...args) {
          super(...args);
          this._bullet = null;
        }

        onLoad() {
          // 临时用 Graphics 画个圆代表子弹，后面换成 Sprite
          const g = this.node.addComponent(Graphics);
          g.fillColor = new Color(255, 220, 80, 255); // 黄色子弹

          g.circle(0, 0, 8);
          g.fill();
        }

        bind(entity) {
          this._bullet = entity;
          this.sync(0);
        }

        sync(dt) {
          if (!this._bullet) return;
          this.node.setPosition(this._bullet.x, this._bullet.y);
        }

        unbind() {
          this._bullet = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1bdb7bfa8ec09a909e08da496435c3d37049dfc.js.map