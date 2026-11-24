System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Bus, World, ViewRegistry, FixedTick, EntityPool, GameData, EconomySystem, BuildSystem, ProduceSystem, MonthClockSystem, UpgradeSystem, SynergySystem, QuestSystem, SettlementSystem, BuildingView, GridView, HallViewModel, GridMap, GhostSystem, GridSyncSystem, ViewPool, GhostView, WorldViewController, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, HallScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewRegistry(extras) {
    _reporterNs.report("ViewRegistry", "../Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFixedTick(extras) {
    _reporterNs.report("FixedTick", "../Engine/Tick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityPool(extras) {
    _reporterNs.report("EntityPool", "../Core/Pool/EntityPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Core/Data/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEconomySystem(extras) {
    _reporterNs.report("EconomySystem", "./System/EconomySystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildSystem(extras) {
    _reporterNs.report("BuildSystem", "./System/BuildSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProduceSystem(extras) {
    _reporterNs.report("ProduceSystem", "./System/ProduceSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonthClockSystem(extras) {
    _reporterNs.report("MonthClockSystem", "./System/MonthClockSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpgradeSystem(extras) {
    _reporterNs.report("UpgradeSystem", "./System/UpgradeSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSynergySystem(extras) {
    _reporterNs.report("SynergySystem", "./System/SynergySystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQuestSystem(extras) {
    _reporterNs.report("QuestSystem", "./System/QuestSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettlementSystem(extras) {
    _reporterNs.report("SettlementSystem", "./System/SettlementSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingView(extras) {
    _reporterNs.report("BuildingView", "./View/BuildingView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridView(extras) {
    _reporterNs.report("GridView", "./View/GridView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallViewModel(extras) {
    _reporterNs.report("HallViewModel", "./ViewModel/HallViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridMap(extras) {
    _reporterNs.report("GridMap", "./Data/GridMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGhostSystem(extras) {
    _reporterNs.report("GhostSystem", "./System/GhostSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridSyncSystem(extras) {
    _reporterNs.report("GridSyncSystem", "./System/GridSyncSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewPool(extras) {
    _reporterNs.report("ViewPool", "../Engine/ViewPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGhostView(extras) {
    _reporterNs.report("GhostView", "./View/GhostView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorldViewController(extras) {
    _reporterNs.report("WorldViewController", "./View/WorldViewController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Bus = _unresolved_2.Bus;
    }, function (_unresolved_3) {
      World = _unresolved_3.World;
    }, function (_unresolved_4) {
      ViewRegistry = _unresolved_4.ViewRegistry;
    }, function (_unresolved_5) {
      FixedTick = _unresolved_5.FixedTick;
    }, function (_unresolved_6) {
      EntityPool = _unresolved_6.EntityPool;
    }, function (_unresolved_7) {
      GameData = _unresolved_7.GameData;
    }, function (_unresolved_8) {
      EconomySystem = _unresolved_8.EconomySystem;
    }, function (_unresolved_9) {
      BuildSystem = _unresolved_9.BuildSystem;
    }, function (_unresolved_10) {
      ProduceSystem = _unresolved_10.ProduceSystem;
    }, function (_unresolved_11) {
      MonthClockSystem = _unresolved_11.MonthClockSystem;
    }, function (_unresolved_12) {
      UpgradeSystem = _unresolved_12.UpgradeSystem;
    }, function (_unresolved_13) {
      SynergySystem = _unresolved_13.SynergySystem;
    }, function (_unresolved_14) {
      QuestSystem = _unresolved_14.QuestSystem;
    }, function (_unresolved_15) {
      SettlementSystem = _unresolved_15.SettlementSystem;
    }, function (_unresolved_16) {
      BuildingView = _unresolved_16.BuildingView;
    }, function (_unresolved_17) {
      GridView = _unresolved_17.GridView;
    }, function (_unresolved_18) {
      HallViewModel = _unresolved_18.HallViewModel;
    }, function (_unresolved_19) {
      GridMap = _unresolved_19.GridMap;
    }, function (_unresolved_20) {
      GhostSystem = _unresolved_20.GhostSystem;
    }, function (_unresolved_21) {
      GridSyncSystem = _unresolved_21.GridSyncSystem;
    }, function (_unresolved_22) {
      ViewPool = _unresolved_22.ViewPool;
    }, function (_unresolved_23) {
      GhostView = _unresolved_23.GhostView;
    }, function (_unresolved_24) {
      WorldViewController = _unresolved_24.WorldViewController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4027bP1utVEkrvW1F8gEuMB", "HallScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HallScene", HallScene = (_dec = ccclass('HallScene'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = class HallScene extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "worldRoot", _descriptor, this);

          _initializerDefineProperty(this, "gridLayer", _descriptor2, this);

          _initializerDefineProperty(this, "entityLayer", _descriptor3, this);

          _initializerDefineProperty(this, "_bus", _descriptor4, this);

          this._world = null;
          this._views = null;
          this._viewModel = null;
          this._worldViewController = null;
          this._tick = null;
          this._gridView = null;
        }

        start() {
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).init();

          this._createBus();

          this._createMap();

          this._rebuildViewModel();

          this._setupInput();

          this._registerSceneListeners();

          this._launchWorld();
        }

        onDestroy() {
          var _this$_tick, _this$_viewModel, _this$_world;

          this._unregisterSceneListeners();

          (_this$_tick = this._tick) == null ? void 0 : _this$_tick.stop();
          (_this$_viewModel = this._viewModel) == null ? void 0 : _this$_viewModel.onDestroy();
          (_this$_world = this._world) == null ? void 0 : _this$_world.destroy();
        }

        _createBus() {
          this._bus = new (_crd && Bus === void 0 ? (_reportPossibleCrUseOfBus({
            error: Error()
          }), Bus) : Bus)();
        }

        _createMap() {
          this._gridView = this.gridLayer.getComponent(_crd && GridView === void 0 ? (_reportPossibleCrUseOfGridView({
            error: Error()
          }), GridView) : GridView);

          if (this._gridView) {
            this._gridView.createMap();
          }
        }

        _rebuildViewModel() {
          var _this$_viewModel2;

          (_this$_viewModel2 = this._viewModel) == null ? void 0 : _this$_viewModel2.onDestroy();
          this._viewModel = new (_crd && HallViewModel === void 0 ? (_reportPossibleCrUseOfHallViewModel({
            error: Error()
          }), HallViewModel) : HallViewModel)(this._bus);
        }

        _setupInput() {
          this._worldViewController = this.node.addComponent(_crd && WorldViewController === void 0 ? (_reportPossibleCrUseOfWorldViewController({
            error: Error()
          }), WorldViewController) : WorldViewController);

          this._worldViewController.setup(this._bus, this.worldRoot);
        }

        _registerSceneListeners() {}

        _unregisterSceneListeners() {}

        _launchWorld() {
          this._buildWorld();

          this._startTick();
        }

        _buildWorld() {
          this._views = new (_crd && ViewRegistry === void 0 ? (_reportPossibleCrUseOfViewRegistry({
            error: Error()
          }), ViewRegistry) : ViewRegistry)(this.entityLayer, new (_crd && ViewPool === void 0 ? (_reportPossibleCrUseOfViewPool({
            error: Error()
          }), ViewPool) : ViewPool)(256));
          const pool = new (_crd && EntityPool === void 0 ? (_reportPossibleCrUseOfEntityPool({
            error: Error()
          }), EntityPool) : EntityPool)(512);
          this._world = new (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World)(this._bus, this._views, pool);

          this._registerViewFactories();

          this._installSystems();
        }

        _registerViewFactories() {
          this._views.registerFactory('building', e => {
            const node = new Node('Building_${e.id}');
            return node.addComponent(_crd && BuildingView === void 0 ? (_reportPossibleCrUseOfBuildingView({
              error: Error()
            }), BuildingView) : BuildingView);
          });

          this._views.registerFactory('ghost', e => {
            const node = new Node('ghost_${e.id}');
            return node.addComponent(_crd && GhostView === void 0 ? (_reportPossibleCrUseOfGhostView({
              error: Error()
            }), GhostView) : GhostView);
          });
        }

        _installSystems() {
          const gridMap = new (_crd && GridMap === void 0 ? (_reportPossibleCrUseOfGridMap({
            error: Error()
          }), GridMap) : GridMap)(); // 2. 装配系统
          // GhostSystem 依赖 gridMap 查空位

          this._world.addSystem(new (_crd && GhostSystem === void 0 ? (_reportPossibleCrUseOfGhostSystem({
            error: Error()
          }), GhostSystem) : GhostSystem)(gridMap)); // BuildSystem 不再依赖 gridMap，专心造实体


          this._world.addSystem(new (_crd && BuildSystem === void 0 ? (_reportPossibleCrUseOfBuildSystem({
            error: Error()
          }), BuildSystem) : BuildSystem)()); // GridSyncSystem 依赖 gridMap，专心写数据


          this._world.addSystem(new (_crd && GridSyncSystem === void 0 ? (_reportPossibleCrUseOfGridSyncSystem({
            error: Error()
          }), GridSyncSystem) : GridSyncSystem)(gridMap));

          this._world.addSystem(new (_crd && EconomySystem === void 0 ? (_reportPossibleCrUseOfEconomySystem({
            error: Error()
          }), EconomySystem) : EconomySystem)());

          this._world.addSystem(new (_crd && ProduceSystem === void 0 ? (_reportPossibleCrUseOfProduceSystem({
            error: Error()
          }), ProduceSystem) : ProduceSystem)());

          this._world.addSystem(new (_crd && MonthClockSystem === void 0 ? (_reportPossibleCrUseOfMonthClockSystem({
            error: Error()
          }), MonthClockSystem) : MonthClockSystem)());

          this._world.addSystem(new (_crd && UpgradeSystem === void 0 ? (_reportPossibleCrUseOfUpgradeSystem({
            error: Error()
          }), UpgradeSystem) : UpgradeSystem)());

          this._world.addSystem(new (_crd && SynergySystem === void 0 ? (_reportPossibleCrUseOfSynergySystem({
            error: Error()
          }), SynergySystem) : SynergySystem)());

          this._world.addSystem(new (_crd && QuestSystem === void 0 ? (_reportPossibleCrUseOfQuestSystem({
            error: Error()
          }), QuestSystem) : QuestSystem)());

          this._world.addSystem(new (_crd && SettlementSystem === void 0 ? (_reportPossibleCrUseOfSettlementSystem({
            error: Error()
          }), SettlementSystem) : SettlementSystem)());
        } // =========================================================
        //  Tick 启停
        // =========================================================


        _startTick() {
          if (!this._tick) {
            this._tick = this.node.addComponent(_crd && FixedTick === void 0 ? (_reportPossibleCrUseOfFixedTick({
              error: Error()
            }), FixedTick) : FixedTick);
          }

          this._tick.setup(this._world, this._views);

          this._tick.begin();
        }

        _stopTick() {
          var _this$_tick2;

          (_this$_tick2 = this._tick) == null ? void 0 : _this$_tick2.stop();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "worldRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gridLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "entityLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_bus", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b0c0b8dec08b37e814369c4ecab19373a6d952f8.js.map