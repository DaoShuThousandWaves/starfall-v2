System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Graphics, _dec, _class, _crd, ccclass, PlayerView;

  function _reportPossibleCrUseOfEntityView(extras) {
    _reporterNs.report("EntityView", "../../Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "../Entity/Plane", _context.meta, extras);
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

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Graphics', 'Node']);

      ({
        ccclass
      } = _decorator);

      _export("PlayerView", PlayerView = (_dec = ccclass('PlayerView'), _dec(_class = class PlayerView extends Component {
        constructor() {
          super(...arguments);
          this._plane = null;
        }

        onLoad() {
          var g = this.node.addComponent(Graphics);
          g.fillColor = new Color(80, 200, 255, 255); // 朝上的三角形，表示玩家飞机

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
//# sourceMappingURL=842d9266a7759ddac3527c2df47f7b08317abaf4.js.map