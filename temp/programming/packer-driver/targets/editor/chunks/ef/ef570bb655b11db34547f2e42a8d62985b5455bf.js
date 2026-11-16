System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Graphics, _dec, _class, _crd, ccclass, EnemyView;

  function _reportPossibleCrUseOfEntityView(extras) {
    _reporterNs.report("EntityView", "../../Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyEntity(extras) {
    _reporterNs.report("EnemyEntity", "../Entity/EnemyEntity", _context.meta, extras);
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

      _cclegacy._RF.push({}, "5180bcTUh9KuqtdWgN/fof+", "EnemyView", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Graphics', 'Node']);

      ({
        ccclass
      } = _decorator);

      _export("EnemyView", EnemyView = (_dec = ccclass('EnemyView'), _dec(_class = class EnemyView extends Component {
        constructor(...args) {
          super(...args);
          this._plane = null;
        }

        onLoad() {
          const g = this.node.addComponent(Graphics);
          g.fillColor = new Color(255, 80, 80, 255);
          g.rect(-18, -18, 36, 36);
          g.fill();
        }

        bind(entity) {
          this._plane = entity;
          this.sync(0);
        }

        sync(dt) {
          if (!this._plane) return;
          this.node.setPosition(this._plane.x, this._plane.y);
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
//# sourceMappingURL=ef570bb655b11db34547f2e42a8d62985b5455bf.js.map