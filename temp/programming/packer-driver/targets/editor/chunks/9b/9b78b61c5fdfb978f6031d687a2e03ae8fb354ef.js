System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GridCoord, Point, _crd, GRID_COLS, GRID_ROWS, TILE_W, TILE_H, TILE_IMG_W, TILE_IMG_H, DIRT_HEIGHT, TILE_VISUAL_OFFSET_Y, CENTER_X, OFFSET_X, CENTER_Y, OFFSET_Y;

  function gridToLocal(gridX, gridY, out) {
    // gridY 增加往右下走，gridX 增加往左下走
    const x = (gridY - gridX) * (TILE_W / 2) + OFFSET_X;
    const y = -(gridX + gridY) * (TILE_H / 2) + OFFSET_Y;

    if (!out) {
      out = new Point();
    }

    out.set(x, y);
    return out;
  }

  function localToGrid(lx, ly, out) {
    // 1. 减去偏移量，还原到以地图最顶端为原点的相对像素
    const px = lx - OFFSET_X;
    const py = -(ly - OFFSET_Y); // 转回正数

    const diff = px / (TILE_W / 2);
    const sum = py / (TILE_H / 2);
    const gx = (sum - diff) / 2;
    const gy = (sum + diff) / 2; // 3. 必须用 Math.round 四舍五入，判定点在哪个菱形里

    const finalGx = Math.round(gx);
    const finalGy = Math.round(gy); // 4. 边界拦截

    if (finalGx < 0 || finalGx >= GRID_COLS || finalGy < 0 || finalGy >= GRID_ROWS) {
      return out = null;
    }

    if (!out) {
      out = new GridCoord();
    }

    out.gridX = finalGx;
    out.gridY = finalGy;
    return out;
  }

  _export({
    GridCoord: void 0,
    Point: void 0,
    gridToLocal: gridToLocal,
    localToGrid: localToGrid
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "972a3YaPUJOAYFxwyjFN7P7", "GridConfig", undefined);

      // ==========================================
      // 网格基础配置
      _export("GridCoord", GridCoord = class GridCoord {
        constructor() {
          this.gridX = 0;
          this.gridY = 0;
        }

      });

      _export("Point", Point = class Point {
        constructor() {
          this.x = 0;
          this.y = 0;
        }

        set(x, y) {
          this.x = x;
          this.y = y;
        }

      }); // ==========================================


      _export("GRID_COLS", GRID_COLS = 6);

      _export("GRID_ROWS", GRID_ROWS = 8); // 逻辑格尺寸


      _export("TILE_W", TILE_W = 134);

      _export("TILE_H", TILE_H = 67); // 图片原尺寸


      _export("TILE_IMG_W", TILE_IMG_W = 134);

      _export("TILE_IMG_H", TILE_IMG_H = 82); // 泥土厚度


      _export("DIRT_HEIGHT", DIRT_HEIGHT = 15); // 视觉 Y 轴偏移量：因为图片底部有泥土，需要整体上移半截泥土高度，让菱形中心对齐网格中心


      _export("TILE_VISUAL_OFFSET_Y", TILE_VISUAL_OFFSET_Y = DIRT_HEIGHT / 2); // ==========================================
      // 居中偏移量计算
      // ==========================================
      // 在 2.5D 下：
      // 最左边：gridX = COLS - 1, gridY = 0，此时 x 为负最大
      // 最右边：gridX = 0, gridY = ROWS - 1，此时 x 为正最大
      // 为了让整个菱形居中，算出 x 的中心点，然后取反作为偏移


      CENTER_X = (GRID_ROWS - 1 - (GRID_COLS - 1)) * (TILE_W / 4);
      OFFSET_X = -CENTER_X; // 最上方：(0, 0) 时 y = 0
      // 最下方：(COLS - 1, ROWS - 1) 时 y 为负最大
      // 算出 y 的中心点，取反作为偏移

      CENTER_Y = -(GRID_COLS - 1 + (GRID_ROWS - 1)) * (TILE_H / 4);
      OFFSET_Y = -CENTER_Y;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b78b61c5fdfb978f6031d687a2e03ae8fb354ef.js.map