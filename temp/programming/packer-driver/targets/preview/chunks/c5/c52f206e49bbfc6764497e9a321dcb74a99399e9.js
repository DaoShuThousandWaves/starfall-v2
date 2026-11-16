System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Graphics, Color, TestView, _crd, ccclass;

  function _reportPossibleCrUseOfEntityView(extras) {
    _reporterNs.report("EntityView", "./Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "./Engine/Entity", _context.meta, extras);
  }

  _export("TestView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8d01HbmJtA5pjIOxGDX+cr", "TestView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Graphics', 'Node', 'Color']);

      ({
        ccclass
      } = _decorator); // 临时的 View，用 Graphics 画个方块

      _export("TestView", TestView = class TestView extends Component {
        constructor() {
          super(...arguments);
          this._entity = null;
          this._graphics = null;
        }

        onLoad() {
          this._graphics = this.node.addComponent(Graphics); // 画一个 40x40 的方块（红色）

          this._graphics.fillColor = new Color(255, 80, 80, 255);

          this._graphics.rect(-20, -20, 40, 40);

          this._graphics.fill();
        }

        bind(entity) {
          this._entity = entity;
          this.sync(0);
        }

        sync(dt) {
          if (!this._entity) return;
          this.node.setPosition(this._entity.x, this._entity.y);
        }

        unbind() {
          this._entity = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c52f206e49bbfc6764497e9a321dcb74a99399e9.js.map