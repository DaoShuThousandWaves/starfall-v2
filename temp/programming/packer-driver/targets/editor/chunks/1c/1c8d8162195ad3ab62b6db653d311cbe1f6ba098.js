System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Graphics, _dec, _class, _crd, ccclass, BossView;

  function _reportPossibleCrUseOfEntityView(extras) {
    _reporterNs.report("EntityView", "../../Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBossEntity(extras) {
    _reporterNs.report("BossEntity", "../Entity/BossEntity", _context.meta, extras);
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

      _cclegacy._RF.push({}, "6f787lx6bFMQouwjqWYziSp", "BossView", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Graphics']);

      ({
        ccclass
      } = _decorator);

      _export("BossView", BossView = (_dec = ccclass('BossView'), _dec(_class = class BossView extends Component {
        constructor(...args) {
          super(...args);
          this._boss = null;
        }

        onLoad() {
          const g = this.node.addComponent(Graphics);
          g.fillColor = new Color(220, 60, 60, 255); // 先画个占位方块，大小按 collisionRadius 后续可调

          g.rect(-50, -50, 100, 100);
          g.fill();
        }

        bind(entity) {
          this._boss = entity;
          this.sync(0);
        }

        sync(dt) {
          if (!this._boss) {
            return;
          }

          this.node.setPosition(this._boss.x, this._boss.y);
        }

        unbind() {
          this._boss = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c8d8162195ad3ab62b6db653d311cbe1f6ba098.js.map