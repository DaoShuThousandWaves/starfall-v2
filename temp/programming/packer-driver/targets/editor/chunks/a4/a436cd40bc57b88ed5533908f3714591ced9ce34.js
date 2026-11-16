System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Graphics, _dec, _class, _crd, ccclass, BULLET_COLORS, BulletView;

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

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Graphics']);

      ({
        ccclass
      } = _decorator);
      BULLET_COLORS = {
        blue: new Color(80, 160, 255, 255),
        yellow: new Color(255, 220, 80, 255),
        laser: new Color(255, 80, 200, 255),
        homing: new Color(180, 80, 255, 255),
        particle: new Color(255, 255, 255, 255)
      };

      _export("BulletView", BulletView = (_dec = ccclass('BulletView'), _dec(_class = class BulletView extends Component {
        constructor(...args) {
          super(...args);
          this._bullet = null;
          this._g = null;
        }

        bind(entity) {
          this._bullet = entity;

          this._draw();

          this.sync(0);
        }

        sync(_dt) {
          if (!this._bullet) return;
          this.node.setPosition(this._bullet.x, this._bullet.y);
        }

        _draw() {
          var _BULLET_COLORS$this$_;

          if (!this._bullet) return;

          if (!this._g) {
            var _this$node$getCompone;

            this._g = (_this$node$getCompone = this.node.getComponent(Graphics)) != null ? _this$node$getCompone : this.node.addComponent(Graphics);
          }

          this._g.clear();

          this._g.fillColor = (_BULLET_COLORS$this$_ = BULLET_COLORS[this._bullet.bulletType]) != null ? _BULLET_COLORS$this$_ : BULLET_COLORS.yellow;

          this._g.circle(0, 0, 8);

          this._g.fill();
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
//# sourceMappingURL=a436cd40bc57b88ed5533908f3714591ced9ce34.js.map