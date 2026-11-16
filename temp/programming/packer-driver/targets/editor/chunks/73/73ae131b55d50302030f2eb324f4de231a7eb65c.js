System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Graphics, _dec, _class, _crd, ccclass, PlayerView;

  function _reportPossibleCrUseOfEntityView(extras) {
    _reporterNs.report("EntityView", "../../Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerEntity(extras) {
    _reporterNs.report("PlayerEntity", "../Entity/PlayerEntity", _context.meta, extras);
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

      _cclegacy._RF.push({}, "afd8d96NhhEW4uAkwliJaon", "PlayerView", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Graphics']);

      ({
        ccclass
      } = _decorator);

      _export("PlayerView", PlayerView = (_dec = ccclass('PlayerView'), _dec(_class = class PlayerView extends Component {
        constructor(...args) {
          super(...args);
          this._plane = null;
        }

        onLoad() {
          const g = this.node.addComponent(Graphics);
          g.fillColor = new Color(80, 200, 255, 255);
          g.moveTo(0, 20);
          g.lineTo(-15, -10);
          g.lineTo(15, -10);
          g.close();
          g.fill();
        }

        bind(entity) {
          this._plane = entity;
          this.sync(0);
        }

        sync(_dt) {
          if (!this._plane) return;
          this.node.setPosition(this._plane.x, this._plane.y);
          const h = this._plane.health;

          if (h.invincibleTimer > 0) {
            const flash = Math.floor(h.invincibleTimer * 10) % 2 === 0;
            this.node.active = flash;
          } else if (!this.node.active) {
            this.node.active = true;
          }
        }

        unbind() {
          this._plane = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=73ae131b55d50302030f2eb324f4de231a7eb65c.js.map