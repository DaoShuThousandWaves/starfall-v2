System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GRID_SIZE, GRID_COLS, GRID_ROWS, GRID_ORIGIN_X, GRID_ORIGIN_Y;

  // -400
  function gridToWorld(gridX, gridY) {
    return {
      x: GRID_ORIGIN_X + (gridX + 0.5) * GRID_SIZE,
      y: GRID_ORIGIN_Y + (gridY + 0.5) * GRID_SIZE
    };
  }

  function worldToGrid(wx, wy) {
    var gx = Math.floor((wx - GRID_ORIGIN_X) / GRID_SIZE);
    var gy = Math.floor((wy - GRID_ORIGIN_Y) / GRID_SIZE);
    if (gx < 0 || gx >= GRID_COLS || gy < 0 || gy >= GRID_ROWS) return null;
    return {
      gridX: gx,
      gridY: gy
    };
  }

  _export({
    gridToWorld: gridToWorld,
    worldToGrid: worldToGrid
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "972a3YaPUJOAYFxwyjFN7P7", "GridConfig", undefined);

      _export("GRID_SIZE", GRID_SIZE = 100);

      _export("GRID_COLS", GRID_COLS = 6);

      _export("GRID_ROWS", GRID_ROWS = 8);

      _export("GRID_ORIGIN_X", GRID_ORIGIN_X = -GRID_COLS * GRID_SIZE / 2); // -300


      _export("GRID_ORIGIN_Y", GRID_ORIGIN_Y = -GRID_ROWS * GRID_SIZE / 2);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2a9786ec306fab150a315d9a546057dbc6801891.js.map