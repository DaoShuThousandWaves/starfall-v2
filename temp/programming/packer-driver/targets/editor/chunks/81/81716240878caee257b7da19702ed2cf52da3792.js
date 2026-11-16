System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31", "__unresolved_32", "__unresolved_33", "__unresolved_34", "__unresolved_35", "__unresolved_36", "__unresolved_37", "__unresolved_38", "__unresolved_39"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, World, Bus, ViewRegistry, FixedTick, GameData, BulletView, PlayerView, EnemyView, FireSystem, BulletSpawnSystem, PlayerControlSystem, EnemySpawnSystem, MovementSystem, CombatSystem, DamageSystem, BattleStateSystem, OutOfBoundsSystem, Plane, BattleInputHandler, BATTLE_EVENT, PauseButton, RestartButton, BossView, BossStageSystem, InvincibleSystem, BossHealthUI, ExpSystem, expForLevel, CardSystem, CardApplySystem, UpgradePanel, WaveSystem, PlayerHealthUI, ExpBarUI, TurretView, TurretAimSystem, TurretScheduleSystem, TurretSpawnSystem, BattleViewModel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, BattleScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewRegistry(extras) {
    _reporterNs.report("ViewRegistry", "../Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFixedTick(extras) {
    _reporterNs.report("FixedTick", "../Engine/Tick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Core/Data/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletView(extras) {
    _reporterNs.report("BulletView", "./View/BulletView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerView(extras) {
    _reporterNs.report("PlayerView", "./View/PlayerView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyView(extras) {
    _reporterNs.report("EnemyView", "./View/EnemyView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireSystem(extras) {
    _reporterNs.report("FireSystem", "./System/FireSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletSpawnSystem(extras) {
    _reporterNs.report("BulletSpawnSystem", "./System/BulletSpawnSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControlSystem(extras) {
    _reporterNs.report("PlayerControlSystem", "./System/PlayerControlSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemySpawnSystem(extras) {
    _reporterNs.report("EnemySpawnSystem", "./System/EnemySpawnSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMovementSystem(extras) {
    _reporterNs.report("MovementSystem", "./System/MovementSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCombatSystem(extras) {
    _reporterNs.report("CombatSystem", "./System/CombatSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageSystem(extras) {
    _reporterNs.report("DamageSystem", "./System/DamageSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleStateSystem(extras) {
    _reporterNs.report("BattleStateSystem", "./System/BattleStateSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./System/BattleStateSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOutOfBoundsSystem(extras) {
    _reporterNs.report("OutOfBoundsSystem", "./System/OutOfBoundsSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "./Entity/Plane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleInputHandler(extras) {
    _reporterNs.report("BattleInputHandler", "./BattleInputHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "./BattleEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPauseButton(extras) {
    _reporterNs.report("PauseButton", "../UI/Common/PauseButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRestartButton(extras) {
    _reporterNs.report("RestartButton", "../UI/Common/RestartButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBossView(extras) {
    _reporterNs.report("BossView", "./View/BossView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBossStageSystem(extras) {
    _reporterNs.report("BossStageSystem", "./System/BossStageSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInvincibleSystem(extras) {
    _reporterNs.report("InvincibleSystem", "./System/InvincibleSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBossHealthUI(extras) {
    _reporterNs.report("BossHealthUI", "../UI/Battle/BossHealthUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExpSystem(extras) {
    _reporterNs.report("ExpSystem", "./System/ExpSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfexpForLevel(extras) {
    _reporterNs.report("expForLevel", "./Config/ExpConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardSystem(extras) {
    _reporterNs.report("CardSystem", "./System/CardSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardApplySystem(extras) {
    _reporterNs.report("CardApplySystem", "./System/CardApplySystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpgradePanel(extras) {
    _reporterNs.report("UpgradePanel", "../UI/Battle/UpgradePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaveSystem(extras) {
    _reporterNs.report("WaveSystem", "./System/WaveSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerHealthUI(extras) {
    _reporterNs.report("PlayerHealthUI", "../UI/Battle/PlayerHealthUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExpBarUI(extras) {
    _reporterNs.report("ExpBarUI", "../UI/Battle/ExpBarUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretView(extras) {
    _reporterNs.report("TurretView", "./View/TurretView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretAimSystem(extras) {
    _reporterNs.report("TurretAimSystem", "./System/TurretAimSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretScheduleSystem(extras) {
    _reporterNs.report("TurretScheduleSystem", "./System/TurretScheduleSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretSpawnSystem(extras) {
    _reporterNs.report("TurretSpawnSystem", "./System/TurretSpawnSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleViewModel(extras) {
    _reporterNs.report("BattleViewModel", "./ViewModel/BattleViewModel", _context.meta, extras);
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
      World = _unresolved_2.World;
    }, function (_unresolved_3) {
      Bus = _unresolved_3.Bus;
    }, function (_unresolved_4) {
      ViewRegistry = _unresolved_4.ViewRegistry;
    }, function (_unresolved_5) {
      FixedTick = _unresolved_5.FixedTick;
    }, function (_unresolved_6) {
      GameData = _unresolved_6.GameData;
    }, function (_unresolved_7) {
      BulletView = _unresolved_7.BulletView;
    }, function (_unresolved_8) {
      PlayerView = _unresolved_8.PlayerView;
    }, function (_unresolved_9) {
      EnemyView = _unresolved_9.EnemyView;
    }, function (_unresolved_10) {
      FireSystem = _unresolved_10.FireSystem;
    }, function (_unresolved_11) {
      BulletSpawnSystem = _unresolved_11.BulletSpawnSystem;
    }, function (_unresolved_12) {
      PlayerControlSystem = _unresolved_12.PlayerControlSystem;
    }, function (_unresolved_13) {
      EnemySpawnSystem = _unresolved_13.EnemySpawnSystem;
    }, function (_unresolved_14) {
      MovementSystem = _unresolved_14.MovementSystem;
    }, function (_unresolved_15) {
      CombatSystem = _unresolved_15.CombatSystem;
    }, function (_unresolved_16) {
      DamageSystem = _unresolved_16.DamageSystem;
    }, function (_unresolved_17) {
      BattleStateSystem = _unresolved_17.BattleStateSystem;
    }, function (_unresolved_18) {
      OutOfBoundsSystem = _unresolved_18.OutOfBoundsSystem;
    }, function (_unresolved_19) {
      Plane = _unresolved_19.Plane;
    }, function (_unresolved_20) {
      BattleInputHandler = _unresolved_20.BattleInputHandler;
    }, function (_unresolved_21) {
      BATTLE_EVENT = _unresolved_21.BATTLE_EVENT;
    }, function (_unresolved_22) {
      PauseButton = _unresolved_22.PauseButton;
    }, function (_unresolved_23) {
      RestartButton = _unresolved_23.RestartButton;
    }, function (_unresolved_24) {
      BossView = _unresolved_24.BossView;
    }, function (_unresolved_25) {
      BossStageSystem = _unresolved_25.BossStageSystem;
    }, function (_unresolved_26) {
      InvincibleSystem = _unresolved_26.InvincibleSystem;
    }, function (_unresolved_27) {
      BossHealthUI = _unresolved_27.BossHealthUI;
    }, function (_unresolved_28) {
      ExpSystem = _unresolved_28.ExpSystem;
    }, function (_unresolved_29) {
      expForLevel = _unresolved_29.expForLevel;
    }, function (_unresolved_30) {
      CardSystem = _unresolved_30.CardSystem;
    }, function (_unresolved_31) {
      CardApplySystem = _unresolved_31.CardApplySystem;
    }, function (_unresolved_32) {
      UpgradePanel = _unresolved_32.UpgradePanel;
    }, function (_unresolved_33) {
      WaveSystem = _unresolved_33.WaveSystem;
    }, function (_unresolved_34) {
      PlayerHealthUI = _unresolved_34.PlayerHealthUI;
    }, function (_unresolved_35) {
      ExpBarUI = _unresolved_35.ExpBarUI;
    }, function (_unresolved_36) {
      TurretView = _unresolved_36.TurretView;
    }, function (_unresolved_37) {
      TurretAimSystem = _unresolved_37.TurretAimSystem;
    }, function (_unresolved_38) {
      TurretScheduleSystem = _unresolved_38.TurretScheduleSystem;
    }, function (_unresolved_39) {
      TurretSpawnSystem = _unresolved_39.TurretSpawnSystem;
    }, function (_unresolved_40) {
      BattleViewModel = _unresolved_40.BattleViewModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55357Z3IVNFZII3yJZFkbND", "BattleScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleScene", BattleScene = (_dec = ccclass('BattleScene'), _dec2 = property(_crd && PauseButton === void 0 ? (_reportPossibleCrUseOfPauseButton({
        error: Error()
      }), PauseButton) : PauseButton), _dec3 = property(_crd && RestartButton === void 0 ? (_reportPossibleCrUseOfRestartButton({
        error: Error()
      }), RestartButton) : RestartButton), _dec4 = property(_crd && BossHealthUI === void 0 ? (_reportPossibleCrUseOfBossHealthUI({
        error: Error()
      }), BossHealthUI) : BossHealthUI), _dec5 = property(_crd && UpgradePanel === void 0 ? (_reportPossibleCrUseOfUpgradePanel({
        error: Error()
      }), UpgradePanel) : UpgradePanel), _dec6 = property(_crd && PlayerHealthUI === void 0 ? (_reportPossibleCrUseOfPlayerHealthUI({
        error: Error()
      }), PlayerHealthUI) : PlayerHealthUI), _dec7 = property(_crd && ExpBarUI === void 0 ? (_reportPossibleCrUseOfExpBarUI({
        error: Error()
      }), ExpBarUI) : ExpBarUI), _dec(_class = (_class2 = class BattleScene extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pauseButton", _descriptor, this);

          _initializerDefineProperty(this, "restartButton", _descriptor2, this);

          _initializerDefineProperty(this, "bossHealthUI", _descriptor3, this);

          _initializerDefineProperty(this, "upgradePanel", _descriptor4, this);

          _initializerDefineProperty(this, "playerHealthUI", _descriptor5, this);

          _initializerDefineProperty(this, "expBarUI", _descriptor6, this);

          this._viewModel = null;
          this._bus = null;
          this._world = null;
          this._views = null;
          this._tick = null;
          this._inputHandler = null;
          this._stateSystem = null;
          this._waveSystem = null;
        }

        start() {
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).init();
          this._bus = new (_crd && Bus === void 0 ? (_reportPossibleCrUseOfBus({
            error: Error()
          }), Bus) : Bus)();

          this._buildWorld();

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLE_REQUEST, this._onPauseToggleRequest, this);

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).RESTART_REQUEST, this._onRestartRequest, this);

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).GAME_STATE_CHANGED, this._onGameStateChanged, this);

          this._viewModel = new (_crd && BattleViewModel === void 0 ? (_reportPossibleCrUseOfBattleViewModel({
            error: Error()
          }), BattleViewModel) : BattleViewModel)(this._bus);
          this.pauseButton.setup(this._bus);
          this.restartButton.setup(this._bus);
          this.bossHealthUI.setup(this._bus);
          this.upgradePanel.setup(this._bus, this._viewModel);
          this.playerHealthUI.setup(this._bus);
          this.expBarUI.setup(this._bus);

          this._createPlayer();

          this._tick = this.node.addComponent(_crd && FixedTick === void 0 ? (_reportPossibleCrUseOfFixedTick({
            error: Error()
          }), FixedTick) : FixedTick);

          this._tick.setup(this._world, this._views);

          this._tick.begin();

          this._inputHandler = this.node.addComponent(_crd && BattleInputHandler === void 0 ? (_reportPossibleCrUseOfBattleInputHandler({
            error: Error()
          }), BattleInputHandler) : BattleInputHandler);

          this._inputHandler.setup(this._bus);

          this._waveSystem.begin();
        }

        onDestroy() {
          var _this$_bus, _this$_bus2, _this$_bus3, _this$_viewModel, _this$_tick, _this$_world;

          (_this$_bus = this._bus) == null ? void 0 : _this$_bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLE_REQUEST, this._onPauseToggleRequest, this);
          (_this$_bus2 = this._bus) == null ? void 0 : _this$_bus2.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).RESTART_REQUEST, this._onRestartRequest, this);
          (_this$_bus3 = this._bus) == null ? void 0 : _this$_bus3.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).GAME_STATE_CHANGED, this._onGameStateChanged, this);
          (_this$_viewModel = this._viewModel) == null ? void 0 : _this$_viewModel.onDestroy();
          (_this$_tick = this._tick) == null ? void 0 : _this$_tick.stop();
          (_this$_world = this._world) == null ? void 0 : _this$_world.destroy();
        }

        _onPauseToggleRequest() {
          if (this._stateSystem.state === 'playing') {
            this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
              error: Error()
            }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLE_REQUEST, 'pause'); // 触发进入 paused

          }
        }

        _registerViewFactories() {
          this._views.registerFactory('bullet', e => {
            const node = new Node(`bullet_${e.id}`);
            return node.addComponent(_crd && BulletView === void 0 ? (_reportPossibleCrUseOfBulletView({
              error: Error()
            }), BulletView) : BulletView);
          });

          this._views.registerFactory('player', e => {
            const node = new Node(`player_${e.id}`);
            return node.addComponent(_crd && PlayerView === void 0 ? (_reportPossibleCrUseOfPlayerView({
              error: Error()
            }), PlayerView) : PlayerView);
          });

          this._views.registerFactory('enemy', e => {
            const node = new Node(`enemy_${e.id}`);
            return node.addComponent(_crd && EnemyView === void 0 ? (_reportPossibleCrUseOfEnemyView({
              error: Error()
            }), EnemyView) : EnemyView);
          });

          this._views.registerFactory('boss', e => {
            const node = new Node(`boss_${e.id}`);
            return node.addComponent(_crd && BossView === void 0 ? (_reportPossibleCrUseOfBossView({
              error: Error()
            }), BossView) : BossView);
          });

          this._views.registerFactory('turret', e => {
            const node = new Node(`turret_${e.id}`);
            return node.addComponent(_crd && TurretView === void 0 ? (_reportPossibleCrUseOfTurretView({
              error: Error()
            }), TurretView) : TurretView);
          });
        }

        _buildWorld() {
          this._views = new (_crd && ViewRegistry === void 0 ? (_reportPossibleCrUseOfViewRegistry({
            error: Error()
          }), ViewRegistry) : ViewRegistry)(this.node);
          this._world = new (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World)(this._bus, this._views);

          this._registerViewFactories();

          this._setupSystems();
        }

        _setupSystems() {
          this._world.addSystem(new (_crd && BossStageSystem === void 0 ? (_reportPossibleCrUseOfBossStageSystem({
            error: Error()
          }), BossStageSystem) : BossStageSystem)());

          this._world.addSystem(new (_crd && TurretSpawnSystem === void 0 ? (_reportPossibleCrUseOfTurretSpawnSystem({
            error: Error()
          }), TurretSpawnSystem) : TurretSpawnSystem)());

          this._world.addSystem(new (_crd && TurretScheduleSystem === void 0 ? (_reportPossibleCrUseOfTurretScheduleSystem({
            error: Error()
          }), TurretScheduleSystem) : TurretScheduleSystem)());

          this._world.addSystem(new (_crd && TurretAimSystem === void 0 ? (_reportPossibleCrUseOfTurretAimSystem({
            error: Error()
          }), TurretAimSystem) : TurretAimSystem)());

          this._world.addSystem(new (_crd && FireSystem === void 0 ? (_reportPossibleCrUseOfFireSystem({
            error: Error()
          }), FireSystem) : FireSystem)());

          this._world.addSystem(new (_crd && BulletSpawnSystem === void 0 ? (_reportPossibleCrUseOfBulletSpawnSystem({
            error: Error()
          }), BulletSpawnSystem) : BulletSpawnSystem)());

          this._world.addSystem(new (_crd && PlayerControlSystem === void 0 ? (_reportPossibleCrUseOfPlayerControlSystem({
            error: Error()
          }), PlayerControlSystem) : PlayerControlSystem)());

          this._world.addSystem(new (_crd && InvincibleSystem === void 0 ? (_reportPossibleCrUseOfInvincibleSystem({
            error: Error()
          }), InvincibleSystem) : InvincibleSystem)());

          this._world.addSystem(new (_crd && EnemySpawnSystem === void 0 ? (_reportPossibleCrUseOfEnemySpawnSystem({
            error: Error()
          }), EnemySpawnSystem) : EnemySpawnSystem)());

          this._waveSystem = new (_crd && WaveSystem === void 0 ? (_reportPossibleCrUseOfWaveSystem({
            error: Error()
          }), WaveSystem) : WaveSystem)();

          this._world.addSystem(this._waveSystem);

          this._world.addSystem(new (_crd && MovementSystem === void 0 ? (_reportPossibleCrUseOfMovementSystem({
            error: Error()
          }), MovementSystem) : MovementSystem)());

          this._world.addSystem(new (_crd && CombatSystem === void 0 ? (_reportPossibleCrUseOfCombatSystem({
            error: Error()
          }), CombatSystem) : CombatSystem)());

          this._world.addSystem(new (_crd && DamageSystem === void 0 ? (_reportPossibleCrUseOfDamageSystem({
            error: Error()
          }), DamageSystem) : DamageSystem)());

          this._world.addSystem(new (_crd && ExpSystem === void 0 ? (_reportPossibleCrUseOfExpSystem({
            error: Error()
          }), ExpSystem) : ExpSystem)());

          this._world.addSystem(new (_crd && CardApplySystem === void 0 ? (_reportPossibleCrUseOfCardApplySystem({
            error: Error()
          }), CardApplySystem) : CardApplySystem)());

          this._world.addSystem(new (_crd && CardSystem === void 0 ? (_reportPossibleCrUseOfCardSystem({
            error: Error()
          }), CardSystem) : CardSystem)());

          this._stateSystem = new (_crd && BattleStateSystem === void 0 ? (_reportPossibleCrUseOfBattleStateSystem({
            error: Error()
          }), BattleStateSystem) : BattleStateSystem)();

          this._world.addSystem(this._stateSystem);

          this._world.addSystem(new (_crd && OutOfBoundsSystem === void 0 ? (_reportPossibleCrUseOfOutOfBoundsSystem({
            error: Error()
          }), OutOfBoundsSystem) : OutOfBoundsSystem)());
        }

        _createPlayer() {
          const player = new (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane)('player');
          player.x = 0;
          player.y = -(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2 + 100;
          player.hp = 100;
          player.maxHp = 100;
          player.exp = 0;
          player.level = 1;
          player.expToNext = (_crd && expForLevel === void 0 ? (_reportPossibleCrUseOfexpForLevel({
            error: Error()
          }), expForLevel) : expForLevel)(1);
          player.collisionRadius = 20;
          player.hitInvincibleDuration = 1.0;
          player.weapons.push({
            config: {
              fireInterval: 0.2,
              bulletType: 'blue',
              bulletSpeed: 400,
              bulletDamage: 10,
              fireDirX: 0,
              fireDirY: 1
            },
            cooldownTimer: 0,
            enabled: true
          });

          this._world.add(player);

          this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PLAYER_HP_CHANGED, player.hp / player.maxHp);

          this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).EXP_CHANGED, player.exp, player.expToNext, player.level);
        }

        _onRestartRequest() {
          console.log('[BattleScene] 重开');

          this._pauseGame();

          this._world.destroy();

          this._viewModel.onDestroy();

          this._viewModel = new (_crd && BattleViewModel === void 0 ? (_reportPossibleCrUseOfBattleViewModel({
            error: Error()
          }), BattleViewModel) : BattleViewModel)(this._bus);
          this.upgradePanel.setup(this._bus, this._viewModel);

          this._buildWorld();

          this._createPlayer();

          this._tick.setup(this._world, this._views);

          this._resumeGame();

          this._waveSystem.begin(); //  恢复暂停按钮


          if (this.pauseButton) this.pauseButton.setEnabled(true);

          this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLED, false);
        }

        _onGameStateChanged(state) {
          switch (state) {
            case 'playing':
              this._resumeGame();

              break;

            case 'paused':
            case 'upgrading':
            case 'game_over':
            case 'level_clear':
              this._pauseGame();

              break;
          }
        }

        _pauseGame() {
          this._tick.stop();

          if (this._inputHandler) this._inputHandler.enabled = false;
        }

        _resumeGame() {
          this._tick.begin();

          if (this._inputHandler) this._inputHandler.enabled = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pauseButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "restartButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bossHealthUI", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "upgradePanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "playerHealthUI", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "expBarUI", [_dec7], {
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
//# sourceMappingURL=81716240878caee257b7da19702ed2cf52da3792.js.map