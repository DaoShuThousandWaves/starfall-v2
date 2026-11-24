System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GRID_COLS, GRID_ROWS, GridMap, _crd;

  function _reportPossibleCrUseOfGRID_COLS(extras) {
    _reporterNs.report("GRID_COLS", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGRID_ROWS(extras) {
    _reporterNs.report("GRID_ROWS", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingEntity(extras) {
    _reporterNs.report("BuildingEntity", "../Entity/BuildingEntity", _context.meta, extras);
  }

  _export("GridMap", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GRID_COLS = _unresolved_2.GRID_COLS;
      GRID_ROWS = _unresolved_2.GRID_ROWS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa678IbNxJC26EPCTqJCQyb", "GridMap", undefined);

      _export("GridMap", GridMap = class GridMap {
        constructor() {
          // 核心二维数组，不对外暴露
          this._grid = [];

          this._initGrid();
        }

        _initGrid() {
          for (let y = 0; y < (_crd && GRID_ROWS === void 0 ? (_reportPossibleCrUseOfGRID_ROWS({
            error: Error()
          }), GRID_ROWS) : GRID_ROWS); y++) {
            // 初始化时填满 null
            this._grid.push(new Array(_crd && GRID_COLS === void 0 ? (_reportPossibleCrUseOfGRID_COLS({
              error: Error()
            }), GRID_COLS) : GRID_COLS).fill(null));
          }
        } // ===== 给 GhostSystem 查 =====


        isOccupied(x, y) {
          if (x < 0 || x >= (_crd && GRID_COLS === void 0 ? (_reportPossibleCrUseOfGRID_COLS({
            error: Error()
          }), GRID_COLS) : GRID_COLS) || y < 0 || y >= (_crd && GRID_ROWS === void 0 ? (_reportPossibleCrUseOfGRID_ROWS({
            error: Error()
          }), GRID_ROWS) : GRID_ROWS)) return true;
          return this._grid[y][x] !== null;
        }

        getAt(x, y) {
          if (x < 0 || x >= (_crd && GRID_COLS === void 0 ? (_reportPossibleCrUseOfGRID_COLS({
            error: Error()
          }), GRID_COLS) : GRID_COLS) || y < 0 || y >= (_crd && GRID_ROWS === void 0 ? (_reportPossibleCrUseOfGRID_ROWS({
            error: Error()
          }), GRID_ROWS) : GRID_ROWS)) return null;
          return this._grid[y][x];
        } // ===== 给 BuildSystem 写 =====


        place(x, y, building) {
          if (x >= 0 && x < (_crd && GRID_COLS === void 0 ? (_reportPossibleCrUseOfGRID_COLS({
            error: Error()
          }), GRID_COLS) : GRID_COLS) && y >= 0 && y < (_crd && GRID_ROWS === void 0 ? (_reportPossibleCrUseOfGRID_ROWS({
            error: Error()
          }), GRID_ROWS) : GRID_ROWS)) {
            this._grid[y][x] = building;
          }
        }

        remove(x, y) {
          if (x >= 0 && x < (_crd && GRID_COLS === void 0 ? (_reportPossibleCrUseOfGRID_COLS({
            error: Error()
          }), GRID_COLS) : GRID_COLS) && y >= 0 && y < (_crd && GRID_ROWS === void 0 ? (_reportPossibleCrUseOfGRID_ROWS({
            error: Error()
          }), GRID_ROWS) : GRID_ROWS)) {
            this._grid[y][x] = null;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fe4c20e069c1f239bc7bc5968a2519856e3fb435.js.map