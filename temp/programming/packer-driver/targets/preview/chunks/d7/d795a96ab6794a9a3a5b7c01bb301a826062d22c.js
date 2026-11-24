System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Graphics, Label, GRID_SIZE, _dec, _class, _crd, ccclass, BuildingView;

  function _reportPossibleCrUseOfEntityView(extras) {
    _reporterNs.report("EntityView", "../../Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingEntity(extras) {
    _reporterNs.report("BuildingEntity", "../Entity/BuildingEntity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGRID_SIZE(extras) {
    _reporterNs.report("GRID_SIZE", "../Config/GridConfig", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      GRID_SIZE = _unresolved_2.GRID_SIZE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5f79c13khHmZfzs2o2dieu", "BuildingView", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Graphics', 'Label']);

      ({
        ccclass
      } = _decorator);

      _export("BuildingView", BuildingView = (_dec = ccclass('BuildingView'), _dec(_class = class BuildingView extends Component {
        constructor() {
          super(...arguments);
          this._building = null;
          this._g = null;
          this._label = null;
        }

        onLoad() {
          this._g = this.node.addComponent(Graphics);
          this._label = this.node.addComponent(Label);
          this._label.fontSize = 20;
          this._label.lineHeight = 24;
          this._label.color = new Color(255, 255, 255, 255);
        }

        bind(entity) {
          this._building = entity;

          this._drawBase();

          this.sync(0);
        }

        sync(_dt) {
          if (!this._building) return;
          this.node.setPosition(this._building.x, this._building.y); // 相性加成用金色，否则白色

          this._label.color = this._building.synergyMultiplier > 1 ? new Color(255, 220, 100, 255) : new Color(255, 255, 255, 255);
          this._label.string = "Lv" + this._building.level + "\n" + Math.floor(this._building.pendingIncome);
        }

        unbind() {
          this._building = null;
        }

        _drawBase() {
          this._g.clear();

          this._g.fillColor = new Color(60, 140, 90, 255);
          var half = (_crd && GRID_SIZE === void 0 ? (_reportPossibleCrUseOfGRID_SIZE({
            error: Error()
          }), GRID_SIZE) : GRID_SIZE) / 2 - 6;

          this._g.rect(-half, -half, half * 2, half * 2);

          this._g.fill();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d795a96ab6794a9a3a5b7c01bb301a826062d22c.js.map