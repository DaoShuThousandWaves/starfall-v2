System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, World, Bus, ViewRegistry, FixedTick, GameData, BulletView, PlayerView, EnemyView, FireSystem, BulletSpawnSystem, PlayerControlSystem, EnemySpawnSystem, MovementSystem, CombatSystem, DamageSystem, BattleStateSystem, OutOfBoundsSystem, Plane, BattleInputHandler, BATTLE_EVENT, PauseButton, RestartButton, BossView, BossStageSystem, BOSS_CONFIG, Boss, InvincibleSystem, TurretSystem, BossHealthUI, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, BattleScene;

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

  function _reportPossibleCrUseOfBOSS_CONFIG(extras) {
    _reporterNs.report("BOSS_CONFIG", "./Config/BossConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "./Entity/Boss", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInvincibleSystem(extras) {
    _reporterNs.report("InvincibleSystem", "./System/InvincibleSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretSystem(extras) {
    _reporterNs.report("TurretSystem", "./System/TurretSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBossHealthUI(extras) {
    _reporterNs.report("BossHealthUI", "../UI/Battle/BossHealthUI", _context.meta, extras);
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
      BOSS_CONFIG = _unresolved_26.BOSS_CONFIG;
    }, function (_unresolved_27) {
      Boss = _unresolved_27.Boss;
    }, function (_unresolved_28) {
      InvincibleSystem = _unresolved_28.InvincibleSystem;
    }, function (_unresolved_29) {
      TurretSystem = _unresolved_29.TurretSystem;
    }, function (_unresolved_30) {
      BossHealthUI = _unresolved_30.BossHealthUI;
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
      }), BossHealthUI) : BossHealthUI), _dec(_class = (_class2 = class BattleScene extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pauseButton", _descriptor, this);

          _initializerDefineProperty(this, "restartButton", _descriptor2, this);

          _initializerDefineProperty(this, "bossHealthUI", _descriptor3, this);

          this._bus = null;
          this._world = null;
          this._views = null;
          this._tick = null;
          this._inputHandler = null;
          this._stateSystem = null;
        }

        start() {
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).init();
          this._bus = new (_crd && Bus === void 0 ? (_reportPossibleCrUseOfBus({
            error: Error()
          }), Bus) : Bus)();
          this._views = new (_crd && ViewRegistry === void 0 ? (_reportPossibleCrUseOfViewRegistry({
            error: Error()
          }), ViewRegistry) : ViewRegistry)(this.node);
          this._world = new (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World)(this._bus, this._views);

          this._registerViewFactories();

          this._setupSystems(); // 监听游戏结束


          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).GAME_OVER, this._onGameOver, this);

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLE_REQUEST, this._onPauseToggleRequest, this);

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).RESTART_REQUEST, this._onRestartRequest, this);

          this.pauseButton.setup(this._bus);
          this.restartButton.setup(this._bus);
          this.bossHealthUI.setup(this._bus);

          this._createPlayer();

          this._spawnTestBoss();

          this._tick = this.node.addComponent(_crd && FixedTick === void 0 ? (_reportPossibleCrUseOfFixedTick({
            error: Error()
          }), FixedTick) : FixedTick);

          this._tick.setup(this._world, this._views);

          this._tick.begin();

          this._inputHandler = this.node.addComponent(_crd && BattleInputHandler === void 0 ? (_reportPossibleCrUseOfBattleInputHandler({
            error: Error()
          }), BattleInputHandler) : BattleInputHandler);

          this._inputHandler.setup(this._bus);
        }

        onDestroy() {
          var _this$_bus, _this$_bus2, _this$_bus3, _this$_tick, _this$_world;

          (_this$_bus = this._bus) == null ? void 0 : _this$_bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLE_REQUEST, this._onPauseToggleRequest, this);
          (_this$_bus2 = this._bus) == null ? void 0 : _this$_bus2.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).RESTART_REQUEST, this._onRestartRequest, this);
          (_this$_bus3 = this._bus) == null ? void 0 : _this$_bus3.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).GAME_OVER, this._onGameOver, this);
          (_this$_tick = this._tick) == null ? void 0 : _this$_tick.stop();
          (_this$_world = this._world) == null ? void 0 : _this$_world.destroy();
        }

        _onPauseToggleRequest() {
          if (this._stateSystem && this._stateSystem.state === 'over') {
            return;
          }

          if (this._tick.isRunning) {
            this._tick.stop();

            if (this._inputHandler) this._inputHandler.enabled = false;

            this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
              error: Error()
            }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLED, true);
          } else {
            this._tick.begin();

            if (this._inputHandler) this._inputHandler.enabled = true;

            this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
              error: Error()
            }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLED, false);
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
        }

        _setupSystems() {
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

          this._world.addSystem(new (_crd && MovementSystem === void 0 ? (_reportPossibleCrUseOfMovementSystem({
            error: Error()
          }), MovementSystem) : MovementSystem)());

          this._world.addSystem(new (_crd && CombatSystem === void 0 ? (_reportPossibleCrUseOfCombatSystem({
            error: Error()
          }), CombatSystem) : CombatSystem)());

          this._world.addSystem(new (_crd && DamageSystem === void 0 ? (_reportPossibleCrUseOfDamageSystem({
            error: Error()
          }), DamageSystem) : DamageSystem)());

          this._world.addSystem(new (_crd && BossStageSystem === void 0 ? (_reportPossibleCrUseOfBossStageSystem({
            error: Error()
          }), BossStageSystem) : BossStageSystem)());

          this._world.addSystem(new (_crd && TurretSystem === void 0 ? (_reportPossibleCrUseOfTurretSystem({
            error: Error()
          }), TurretSystem) : TurretSystem)());

          this._stateSystem = new (_crd && BattleStateSystem === void 0 ? (_reportPossibleCrUseOfBattleStateSystem({
            error: Error()
          }), BattleStateSystem) : BattleStateSystem)();

          this._world.addSystem(this._stateSystem);

          this._world.addSystem(new (_crd && OutOfBoundsSystem === void 0 ? (_reportPossibleCrUseOfOutOfBoundsSystem({
            error: Error()
          }), OutOfBoundsSystem) : OutOfBoundsSystem)());
        }

        _spawnTestBoss() {
          const config = (_crd && BOSS_CONFIG === void 0 ? (_reportPossibleCrUseOfBOSS_CONFIG({
            error: Error()
          }), BOSS_CONFIG) : BOSS_CONFIG)['whale_boss'];
          const boss = new (_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
            error: Error()
          }), Boss) : Boss)(config);
          boss.x = 0;
          boss.y = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2 - 300;

          this._world.add(boss);

          this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_SPAWNED, config.name);
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
          player.collisionRadius = 20;
          player.hitInvincibleDuration = 1.0;
          player.weapons.push({
            fireInterval: 0.2,
            cooldownTimer: 0,
            bulletType: 'blue',
            bulletSpeed: 400,
            bulletDamage: 10,
            fireDirX: 0,
            fireDirY: 1,
            enabled: true
          });

          this._world.add(player);
        }

        _onGameOver() {
          console.log('[BattleScene] 游戏结束');

          this._tick.stop();

          if (this._inputHandler) this._inputHandler.enabled = false;
          if (this.pauseButton) this.pauseButton.setEnabled(false);
        }

        _onRestartRequest() {
          console.log('[BattleScene] 重开');

          this._tick.stop();

          this._world.destroy();

          this._views = new (_crd && ViewRegistry === void 0 ? (_reportPossibleCrUseOfViewRegistry({
            error: Error()
          }), ViewRegistry) : ViewRegistry)(this.node);
          this._world = new (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World)(this._bus, this._views);

          this._registerViewFactories();

          this._setupSystems();

          this._createPlayer();

          this._tick.setup(this._world, this._views);

          this._tick.begin(); // ⭐ 恢复输入


          if (this._inputHandler) this._inputHandler.enabled = true; // ⭐ 恢复暂停按钮

          if (this.pauseButton) this.pauseButton.setEnabled(true);

          this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLED, false);
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=709e60abcd3af4b52bbfd7a9eafd0ec5af018100.js.map