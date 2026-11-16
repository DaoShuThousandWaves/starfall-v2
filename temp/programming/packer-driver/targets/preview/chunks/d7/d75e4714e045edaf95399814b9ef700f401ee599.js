System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Graphics, Node, _dec, _class, _crd, ccclass, BossView;

  function _reportPossibleCrUseOfEntityView(extras) {
    _reporterNs.report("EntityView", "../../Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "../Entity/Boss", _context.meta, extras);
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
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f787lx6bFMQouwjqWYziSp", "BossView", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Graphics', 'Node']);

      ({
        ccclass
      } = _decorator);

      _export("BossView", BossView = (_dec = ccclass('BossView'), _dec(_class = class BossView extends Component {
        constructor() {
          super(...arguments);
          this._boss = null;
        }

        onLoad() {
          var g = this.node.addComponent(Graphics);
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

          this.node.setPosition(this._boss.x, this._boss.y); // 炮台数量变化 → 重建

          if (this._turretNodes.length !== this._boss.turrets.length) {
            this._rebuildTurretNodes();
          }

          for (var i = 0; i < this._boss.turrets.length; i++) {
            var turret = this._boss.turrets[i];
            var node = this._turretNodes[i];
            if (!node) continue;
            node.setPosition(turret.config.offsetX, turret.config.offsetY);
            node.angle = this._toCocosAngle(turret.aimAngle);
          }
        }

        _rebuildTurretNodes() {
          for (var node of this._turretNodes) node.destroy();

          this._turretNodes.length = 0;
          if (!this._boss) return;

          for (var i = 0; i < this._boss.turrets.length; i++) {
            var _node = new Node("turret_" + i);

            _node.parent = this.node;

            var g = _node.addComponent(Graphics);

            g.fillColor = new Color(180, 40, 40, 255);
            g.circle(0, 0, 14);
            g.fill();
            g.strokeColor = new Color(255, 200, 100, 255);
            g.lineWidth = 4;
            g.moveTo(0, 0);
            g.lineTo(0, 24);
            g.stroke();

            this._turretNodes.push(_node);
          }
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
          this._turretNodes.length = 0;
          this._boss = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d75e4714e045edaf95399814b9ef700f401ee599.js.map