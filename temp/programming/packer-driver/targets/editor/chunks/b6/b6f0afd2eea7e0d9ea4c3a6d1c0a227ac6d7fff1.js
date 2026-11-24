System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GRID_COLS, GRID_ROWS, HallEvents, GridSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingEntity(extras) {
    _reporterNs.report("BuildingEntity", "../Entity/BuildingEntity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGRID_COLS(extras) {
    _reporterNs.report("GRID_COLS", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGRID_ROWS(extras) {
    _reporterNs.report("GRID_ROWS", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "../HallEvents", _context.meta, extras);
  }

  _export("GridSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GRID_COLS = _unresolved_2.GRID_COLS;
      GRID_ROWS = _unresolved_2.GRID_ROWS;
    }, function (_unresolved_3) {
      HallEvents = _unresolved_3.HallEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa4dakt601Fe75SvbkMFEal", "GridSystem", undefined);

      // 定义查询接口，切断直接依赖
      _export("GridSystem", GridSystem = class GridSystem {
        constructor() {
          // 核心：使用二维数组，空位用 null 表示
          // 注意：数组是 _grid[row][col]，即 _grid[y][x]
          this._grid = [];
          this._world = null;
        }

        onStart(world) {
          this._world = world;

          this._initGrid(); // 事件驱动：监听建/拆，更新数组


          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_COMPLETED, this._onBuildCompleted, this);
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_REMOVED, this._onBuildRemoved, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_COMPLETED, this._onBuildCompleted, this);
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_REMOVED, this._onBuildRemoved, this);
          this._world = null;
        }

        onTick() {} // 初始化固定大小的空地图


        _initGrid() {
          this._grid = [];

          for (let y = 0; y < (_crd && GRID_ROWS === void 0 ? (_reportPossibleCrUseOfGRID_ROWS({
            error: Error()
          }), GRID_ROWS) : GRID_ROWS); y++) {
            const row = new Array(_crd && GRID_COLS === void 0 ? (_reportPossibleCrUseOfGRID_COLS({
              error: Error()
            }), GRID_COLS) : GRID_COLS).fill(null);

            this._grid.push(row);
          }
        } // ===== 提供给外部的 O(1) 查询 =====


        isOccupied(x, y) {
          if (x < 0 || x >= (_crd && GRID_COLS === void 0 ? (_reportPossibleCrUseOfGRID_COLS({
            error: Error()
          }), GRID_COLS) : GRID_COLS) || y < 0 || y >= (_crd && GRID_ROWS === void 0 ? (_reportPossibleCrUseOfGRID_ROWS({
            error: Error()
          }), GRID_ROWS) : GRID_ROWS)) return true; // 越界视为占用，防止建到外面

          return this._grid[y][x] !== null;
        }

        getAt(x, y) {
          if (x < 0 || x >= (_crd && GRID_COLS === void 0 ? (_reportPossibleCrUseOfGRID_COLS({
            error: Error()
          }), GRID_COLS) : GRID_COLS) || y < 0 || y >= (_crd && GRID_ROWS === void 0 ? (_reportPossibleCrUseOfGRID_ROWS({
            error: Error()
          }), GRID_ROWS) : GRID_ROWS)) return null;
          return this._grid[y][x];
        } // ===== 事件响应 =====


        _onBuildCompleted(building) {
          // 将实体放入数组
          if (building.gridX >= 0 && building.gridX < (_crd && GRID_COLS === void 0 ? (_reportPossibleCrUseOfGRID_COLS({
            error: Error()
          }), GRID_COLS) : GRID_COLS) && building.gridY >= 0 && building.gridY < (_crd && GRID_ROWS === void 0 ? (_reportPossibleCrUseOfGRID_ROWS({
            error: Error()
          }), GRID_ROWS) : GRID_ROWS)) {
            this._grid[building.gridY][building.gridX] = building;
          }
        }

        _onBuildRemoved(building) {
          // 从数组中移除
          if (building.gridX >= 0 && building.gridX < (_crd && GRID_COLS === void 0 ? (_reportPossibleCrUseOfGRID_COLS({
            error: Error()
          }), GRID_COLS) : GRID_COLS) && building.gridY >= 0 && building.gridY < (_crd && GRID_ROWS === void 0 ? (_reportPossibleCrUseOfGRID_ROWS({
            error: Error()
          }), GRID_ROWS) : GRID_ROWS)) {
            this._grid[building.gridY][building.gridX] = null;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b6f0afd2eea7e0d9ea4c3a6d1c0a227ac6d7fff1.js.map