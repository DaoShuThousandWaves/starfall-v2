System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Graphics, _dec, _class, _crd, ccclass, TurretView;

  function _reportPossibleCrUseOfEntityView(extras) {
    _reporterNs.report("EntityView", "../../Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurret(extras) {
    _reporterNs.report("Turret", "../Entity/Turret", _context.meta, extras);
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

      _cclegacy._RF.push({}, "7eaefmubmRNnqTv87uF6C+H", "TurretView", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Graphics', 'Node']);

      ({
        ccclass
      } = _decorator);

      _export("TurretView", TurretView = (_dec = ccclass('TurretView'), _dec(_class = class TurretView extends Component {
        constructor() {
          super(...arguments);
          this._turret = null;
        }

        onLoad() {
          var g = this.node.addComponent(Graphics);
          g.fillColor = new Color(180, 40, 40, 255);
          g.circle(0, 0, 14);
          g.fill();
          g.strokeColor = new Color(255, 200, 100, 255);
          g.lineWidth = 4;
          g.moveTo(0, 0);
          g.lineTo(0, 24);
          g.stroke();
        }

        bind(entity) {
          this._turret = entity;
          this.sync(0);
        }

        sync(dt) {
          if (!this._turret) return;
          this.node.setPosition(this._turret.x, this._turret.y);
          this.node.angle = this._toCocosAngle(this._turret.aimAngle);
        }
        /**
         * 数学角度 → Cocos node.angle。
         * 数学：0° = 右，90° = 上（Math.atan2 的约定）
         * Cocos：0° = 上，正数 = 逆时针
         * 转换：cocosAngle = mathAngle - 90
         */


        _toCocosAngle(mathAngle) {
          return mathAngle - 90;
        }

        unbind() {
          this._turret = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8815147ac2cd7d9336087e1c03b02f5dfd485c74.js.map