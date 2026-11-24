System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Node, Bus, World, ViewRegistry, FixedTick, EntityPool, GameData, GridSystem, EconomySystem, BuildSystem, ProduceSystem, MonthClockSystem, UpgradeSystem, SynergySystem, QuestSystem, SettlementSystem, HallInputSystem, BuildingView, GridView, HallViewModel, HallEvents, BUILDING_CONFIG, BuildingEntity, gridToWorld, _dec, _class, _crd, ccclass, HallScene;

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

  function _reportPossibleCrUseOfGridSystem(extras) {
    _reporterNs.report("GridSystem", "./System/GridSystem", _context.meta, extras);
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

  function _reportPossibleCrUseOfHallInputSystem(extras) {
    _reporterNs.report("HallInputSystem", "./System/HallInputSystem", _context.meta, extras);
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

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "./HallEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBUILDING_CONFIG(extras) {
    _reporterNs.report("BUILDING_CONFIG", "./Config/BuildingConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingEntity(extras) {
    _reporterNs.report("BuildingEntity", "./Entity/BuildingEntity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgridToWorld(extras) {
    _reporterNs.report("gridToWorld", "./Config/GridConfig", _context.meta, extras);
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
      director = _cc.director;
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
      GridSystem = _unresolved_8.GridSystem;
    }, function (_unresolved_9) {
      EconomySystem = _unresolved_9.EconomySystem;
    }, function (_unresolved_10) {
      BuildSystem = _unresolved_10.BuildSystem;
    }, function (_unresolved_11) {
      ProduceSystem = _unresolved_11.ProduceSystem;
    }, function (_unresolved_12) {
      MonthClockSystem = _unresolved_12.MonthClockSystem;
    }, function (_unresolved_13) {
      UpgradeSystem = _unresolved_13.UpgradeSystem;
    }, function (_unresolved_14) {
      SynergySystem = _unresolved_14.SynergySystem;
    }, function (_unresolved_15) {
      QuestSystem = _unresolved_15.QuestSystem;
    }, function (_unresolved_16) {
      SettlementSystem = _unresolved_16.SettlementSystem;
    }, function (_unresolved_17) {
      HallInputSystem = _unresolved_17.HallInputSystem;
    }, function (_unresolved_18) {
      BuildingView = _unresolved_18.BuildingView;
    }, function (_unresolved_19) {
      GridView = _unresolved_19.GridView;
    }, function (_unresolved_20) {
      HallViewModel = _unresolved_20.HallViewModel;
    }, function (_unresolved_21) {
      HallEvents = _unresolved_21.HallEvents;
    }, function (_unresolved_22) {
      BUILDING_CONFIG = _unresolved_22.BUILDING_CONFIG;
    }, function (_unresolved_23) {
      BuildingEntity = _unresolved_23.BuildingEntity;
    }, function (_unresolved_24) {
      gridToWorld = _unresolved_24.gridToWorld;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4027bP1utVEkrvW1F8gEuMB", "HallScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass
      } = _decorator);

      _export("HallScene", HallScene = (_dec = ccclass('HallScene'), _dec(_class = class HallScene extends Component {
        constructor() {
          super(...arguments);
          this._bus = null;
          this._world = null;
          this._views = null;
          this._viewModel = null;
          this._gridSystem = null;
          this._tick = null;
          this._input = null;
          this._viewsLayer = null;
        }

        start() {
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).init();
          this._bus = new (_crd && Bus === void 0 ? (_reportPossibleCrUseOfBus({
            error: Error()
          }), Bus) : Bus)();

          this._ensureLayers();

          this._views = new (_crd && ViewRegistry === void 0 ? (_reportPossibleCrUseOfViewRegistry({
            error: Error()
          }), ViewRegistry) : ViewRegistry)(this._viewsLayer);

          this._views.registerFactory('building', () => {
            var node = new Node('Building');
            return node.addComponent(_crd && BuildingView === void 0 ? (_reportPossibleCrUseOfBuildingView({
              error: Error()
            }), BuildingView) : BuildingView);
          });

          this._world = new (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World)(this._bus, this._views, new (_crd && EntityPool === void 0 ? (_reportPossibleCrUseOfEntityPool({
            error: Error()
          }), EntityPool) : EntityPool)(512));

          this._installSystems();

          this._rebuildFromProfile();

          this._viewModel = new (_crd && HallViewModel === void 0 ? (_reportPossibleCrUseOfHallViewModel({
            error: Error()
          }), HallViewModel) : HallViewModel)(this._bus);
          this._input = this.node.addComponent(_crd && HallInputSystem === void 0 ? (_reportPossibleCrUseOfHallInputSystem({
            error: Error()
          }), HallInputSystem) : HallInputSystem);

          this._input.setup(this._bus);

          this._wireSceneEvents(); // 战斗奖励发放在 world.start() 之后


          this._tick = this.node.addComponent(_crd && FixedTick === void 0 ? (_reportPossibleCrUseOfFixedTick({
            error: Error()
          }), FixedTick) : FixedTick);

          this._tick.setup(this._world, this._views, 1);

          this._tick.begin();

          this._grantPendingBattleReward();
        }

        onDestroy() {
          var _this$_tick, _this$_viewModel, _this$_world;

          (_this$_tick = this._tick) == null ? void 0 : _this$_tick.stop();
          (_this$_viewModel = this._viewModel) == null ? void 0 : _this$_viewModel.onDestroy();
          (_this$_world = this._world) == null ? void 0 : _this$_world.destroy();
        } // ============ 装配 ============


        _ensureLayers() {
          var views = this.node.getChildByName('ViewsLayer');

          if (!views) {
            views = new Node('ViewsLayer');
            this.node.addChild(views);
          }

          this._viewsLayer = views; // 静态网格背景

          var gridNode = views.getChildByName('GridView');

          if (!gridNode) {
            gridNode = new Node('GridView');
            views.addChild(gridNode);
            gridNode.addComponent(_crd && GridView === void 0 ? (_reportPossibleCrUseOfGridView({
              error: Error()
            }), GridView) : GridView);
          }
        }

        _installSystems() {
          this._gridSystem = new (_crd && GridSystem === void 0 ? (_reportPossibleCrUseOfGridSystem({
            error: Error()
          }), GridSystem) : GridSystem)();

          this._world.addSystem(this._gridSystem);

          this._world.addSystem(new (_crd && EconomySystem === void 0 ? (_reportPossibleCrUseOfEconomySystem({
            error: Error()
          }), EconomySystem) : EconomySystem)());

          this._world.addSystem(new (_crd && ProduceSystem === void 0 ? (_reportPossibleCrUseOfProduceSystem({
            error: Error()
          }), ProduceSystem) : ProduceSystem)());

          this._world.addSystem(new (_crd && MonthClockSystem === void 0 ? (_reportPossibleCrUseOfMonthClockSystem({
            error: Error()
          }), MonthClockSystem) : MonthClockSystem)());

          this._world.addSystem(new (_crd && BuildSystem === void 0 ? (_reportPossibleCrUseOfBuildSystem({
            error: Error()
          }), BuildSystem) : BuildSystem)(this._gridSystem));

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
        }

        _wireSceneEvents() {
          this._bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).START_BATTLE, () => {
            this._persistBuildings();

            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).profile.save();
            director.loadScene('BattleScene');
          }); // 建造/升级后，把建筑状态同步回存档


          this._bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_COMPLETED, () => this._persistBuildings());

          this._bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).UPGRADE_COMPLETED, () => this._persistBuildings());
        } // ============ 存档 ============


        _rebuildFromProfile() {
          var data = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.data;

          for (var sd of data.buildings) {
            var cfg = (_crd && BUILDING_CONFIG === void 0 ? (_reportPossibleCrUseOfBUILDING_CONFIG({
              error: Error()
            }), BUILDING_CONFIG) : BUILDING_CONFIG)[sd.typeId];
            if (!cfg) continue;

            var b = this._world.acquire('building', () => new (_crd && BuildingEntity === void 0 ? (_reportPossibleCrUseOfBuildingEntity({
              error: Error()
            }), BuildingEntity) : BuildingEntity)());

            b.reset();
            b.typeId = sd.typeId;
            b.gridX = sd.gridX;
            b.gridY = sd.gridY;
            b.level = sd.level;
            b.pendingIncome = sd.pendingIncome;
            var w = (_crd && gridToWorld === void 0 ? (_reportPossibleCrUseOfgridToWorld({
              error: Error()
            }), gridToWorld) : gridToWorld)(sd.gridX, sd.gridY);
            b.x = w.x;
            b.y = w.y;
            b.recalc(cfg);

            this._world.add(b);

            this._gridSystem.occupy(b);
          }
        }

        _persistBuildings() {
          var data = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.data;
          data.buildings = [];

          for (var b of this._world.query('building')) {
            data.buildings.push({
              typeId: b.typeId,
              gridX: b.gridX,
              gridY: b.gridY,
              pendingIncome: b.pendingIncome,
              level: b.level
            });
          }

          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.save();
        }

        _grantPendingBattleReward() {
          var data = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.data;
          if (!data.lastBattleWin) return;
          data.lastBattleWin = false;
          data.coins += 300;
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.save();

          this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).COIN_CHANGED, data.coins);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4cca79bfed0b49a7ccd0d6034854970d205feace.js.map