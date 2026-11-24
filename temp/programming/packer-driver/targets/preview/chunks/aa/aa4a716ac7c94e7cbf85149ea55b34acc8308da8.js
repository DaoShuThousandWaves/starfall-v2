System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Graphics, GRID_COLS, GRID_ORIGIN_X, GRID_ORIGIN_Y, GRID_ROWS, GRID_SIZE, _dec, _class, _crd, ccclass, GridView;

  function _reportPossibleCrUseOfGRID_COLS(extras) {
    _reporterNs.report("GRID_COLS", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGRID_ORIGIN_X(extras) {
    _reporterNs.report("GRID_ORIGIN_X", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGRID_ORIGIN_Y(extras) {
    _reporterNs.report("GRID_ORIGIN_Y", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGRID_ROWS(extras) {
    _reporterNs.report("GRID_ROWS", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGRID_SIZE(extras) {
    _reporterNs.report("GRID_SIZE", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityView(extras) {
    _reporterNs.report("EntityView", "../../Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
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
    }, function (_unresolved_2) {
      GRID_COLS = _unresolved_2.GRID_COLS;
      GRID_ORIGIN_X = _unresolved_2.GRID_ORIGIN_X;
      GRID_ORIGIN_Y = _unresolved_2.GRID_ORIGIN_Y;
      GRID_ROWS = _unresolved_2.GRID_ROWS;
      GRID_SIZE = _unresolved_2.GRID_SIZE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ba535jFMCtI44s8LdvFFi7K", "GridView", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Graphics']);

      ({
        ccclass
      } = _decorator);

      _export("GridView", GridView = (_dec = ccclass('GridView'), _dec(_class = class GridView extends Component {
        bind(entity) {}

        sync(dt) {}

        unbind() {}

        onLoad() {
          var g = this.node.addComponent(Graphics);
          g.lineWidth = 2;
          g.strokeColor = new Color(70, 70, 70, 255); // 竖线

          for (var c = 0; c <= (_crd && GRID_COLS === void 0 ? (_reportPossibleCrUseOfGRID_COLS({
            error: Error()
          }), GRID_COLS) : GRID_COLS); c++) {
            var x = (_crd && GRID_ORIGIN_X === void 0 ? (_reportPossibleCrUseOfGRID_ORIGIN_X({
              error: Error()
            }), GRID_ORIGIN_X) : GRID_ORIGIN_X) + c * (_crd && GRID_SIZE === void 0 ? (_reportPossibleCrUseOfGRID_SIZE({
              error: Error()
            }), GRID_SIZE) : GRID_SIZE);
            g.moveTo(x, _crd && GRID_ORIGIN_Y === void 0 ? (_reportPossibleCrUseOfGRID_ORIGIN_Y({
              error: Error()
            }), GRID_ORIGIN_Y) : GRID_ORIGIN_Y);
            g.lineTo(x, (_crd && GRID_ORIGIN_Y === void 0 ? (_reportPossibleCrUseOfGRID_ORIGIN_Y({
              error: Error()
            }), GRID_ORIGIN_Y) : GRID_ORIGIN_Y) + (_crd && GRID_ROWS === void 0 ? (_reportPossibleCrUseOfGRID_ROWS({
              error: Error()
            }), GRID_ROWS) : GRID_ROWS) * (_crd && GRID_SIZE === void 0 ? (_reportPossibleCrUseOfGRID_SIZE({
              error: Error()
            }), GRID_SIZE) : GRID_SIZE));
          } // 横线


          for (var r = 0; r <= (_crd && GRID_ROWS === void 0 ? (_reportPossibleCrUseOfGRID_ROWS({
            error: Error()
          }), GRID_ROWS) : GRID_ROWS); r++) {
            var y = (_crd && GRID_ORIGIN_Y === void 0 ? (_reportPossibleCrUseOfGRID_ORIGIN_Y({
              error: Error()
            }), GRID_ORIGIN_Y) : GRID_ORIGIN_Y) + r * (_crd && GRID_SIZE === void 0 ? (_reportPossibleCrUseOfGRID_SIZE({
              error: Error()
            }), GRID_SIZE) : GRID_SIZE);
            g.moveTo(_crd && GRID_ORIGIN_X === void 0 ? (_reportPossibleCrUseOfGRID_ORIGIN_X({
              error: Error()
            }), GRID_ORIGIN_X) : GRID_ORIGIN_X, y);
            g.lineTo((_crd && GRID_ORIGIN_X === void 0 ? (_reportPossibleCrUseOfGRID_ORIGIN_X({
              error: Error()
            }), GRID_ORIGIN_X) : GRID_ORIGIN_X) + (_crd && GRID_COLS === void 0 ? (_reportPossibleCrUseOfGRID_COLS({
              error: Error()
            }), GRID_COLS) : GRID_COLS) * (_crd && GRID_SIZE === void 0 ? (_reportPossibleCrUseOfGRID_SIZE({
              error: Error()
            }), GRID_SIZE) : GRID_SIZE), y);
          }

          g.stroke();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa4a716ac7c94e7cbf85149ea55b34acc8308da8.js.map