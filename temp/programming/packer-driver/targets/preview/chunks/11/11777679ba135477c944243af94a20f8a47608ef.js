System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, World, Bus, ViewRegistry, FixedTick, GameData, BulletView, PlayerView, EnemyView, FireSystem, BulletSpawnSystem, PlayerControlSystem, EnemySpawnSystem, MovementSystem, CombatSystem, DamageSystem, BattleStateSystem, OutOfBoundsSystem, Plane, BattleInputHandler, BATTLE_EVENT, PauseButton, RestartButton, _dec, _class, _crd, ccclass, BattleScene;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55357Z3IVNFZII3yJZFkbND", "BattleScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass
      } = _decorator);

      _export("BattleScene", BattleScene = (_dec = ccclass('BattleScene'), _dec(_class = class BattleScene extends Component {
        constructor() {
          super(...arguments);
          this._bus = null;
          this._world = null;
          this._views = null;
          this._tick = null;
          this._inputHandler = null;
          this._battleState = null;
        }

        start() {
          var _this$node$parent, _this$node$parent$get, _this$node$parent2, _this$node$parent2$ge;

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

          this._addSystems();

          this._createPlayer();

          this._tick = this.node.addComponent(_crd && FixedTick === void 0 ? (_reportPossibleCrUseOfFixedTick({
            error: Error()
          }), FixedTick) : FixedTick);

          this._tick.setup(this._world, this._views);

          this._tick.begin();

          this._inputHandler = this.node.addComponent(_crd && BattleInputHandler === void 0 ? (_reportPossibleCrUseOfBattleInputHandler({
            error: Error()
          }), BattleInputHandler) : BattleInputHandler);

          this._inputHandler.setup(this._bus); // 7. 监听游戏结束


          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).GAME_OVER, this._onGameOver, this);

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLE_REQUEST, this._onPauseToggleRequest, this);

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).RESTART_REQUEST, this._onRestartRequest, this); // setup 按钮


          var pauseBtn = (_this$node$parent = this.node.parent) == null ? void 0 : (_this$node$parent$get = _this$node$parent.getChildByName('PauseButton')) == null ? void 0 : _this$node$parent$get.getComponent(_crd && PauseButton === void 0 ? (_reportPossibleCrUseOfPauseButton({
            error: Error()
          }), PauseButton) : PauseButton);
          if (pauseBtn) pauseBtn.setup(this._bus);
          var restartBtn = (_this$node$parent2 = this.node.parent) == null ? void 0 : (_this$node$parent2$ge = _this$node$parent2.getChildByName('RestartButton')) == null ? void 0 : _this$node$parent2$ge.getComponent(_crd && RestartButton === void 0 ? (_reportPossibleCrUseOfRestartButton({
            error: Error()
          }), RestartButton) : RestartButton);
          if (restartBtn) restartBtn.setup(this._bus);
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
          // ⭐ 死亡后忽略暂停请求
          if (this._battleState && this._battleState.state === 'over') {
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
            var node = new Node("bullet_" + e.id);
            return node.addComponent(_crd && BulletView === void 0 ? (_reportPossibleCrUseOfBulletView({
              error: Error()
            }), BulletView) : BulletView);
          });

          this._views.registerFactory('player', e => {
            var node = new Node("player_" + e.id);
            return node.addComponent(_crd && PlayerView === void 0 ? (_reportPossibleCrUseOfPlayerView({
              error: Error()
            }), PlayerView) : PlayerView);
          });

          this._views.registerFactory('enemy', e => {
            var node = new Node("enemy_" + e.id);
            return node.addComponent(_crd && EnemyView === void 0 ? (_reportPossibleCrUseOfEnemyView({
              error: Error()
            }), EnemyView) : EnemyView);
          });
        }

        _addSystems() {
          this._world.addSystem(new (_crd && FireSystem === void 0 ? (_reportPossibleCrUseOfFireSystem({
            error: Error()
          }), FireSystem) : FireSystem)());

          this._world.addSystem(new (_crd && BulletSpawnSystem === void 0 ? (_reportPossibleCrUseOfBulletSpawnSystem({
            error: Error()
          }), BulletSpawnSystem) : BulletSpawnSystem)());

          this._world.addSystem(new (_crd && PlayerControlSystem === void 0 ? (_reportPossibleCrUseOfPlayerControlSystem({
            error: Error()
          }), PlayerControlSystem) : PlayerControlSystem)());

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

          this._battleState = new (_crd && BattleStateSystem === void 0 ? (_reportPossibleCrUseOfBattleStateSystem({
            error: Error()
          }), BattleStateSystem) : BattleStateSystem)();

          this._world.addSystem(new (_crd && BattleStateSystem === void 0 ? (_reportPossibleCrUseOfBattleStateSystem({
            error: Error()
          }), BattleStateSystem) : BattleStateSystem)());

          this._world.addSystem(new (_crd && OutOfBoundsSystem === void 0 ? (_reportPossibleCrUseOfOutOfBoundsSystem({
            error: Error()
          }), OutOfBoundsSystem) : OutOfBoundsSystem)());
        }

        _createPlayer() {
          var player = new (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane)('player');
          player.x = 0;
          player.y = -(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2 + 100;
          player.hp = 100;
          player.maxHp = 100;
          player.collisionRadius = 20;
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

          var input = this.node.getComponent(_crd && BattleInputHandler === void 0 ? (_reportPossibleCrUseOfBattleInputHandler({
            error: Error()
          }), BattleInputHandler) : BattleInputHandler);
          if (input) input.enabled = false; // 停掉输入
        }

        _onRestartRequest() {
          var _this$node$parent3, _this$node$parent3$ge;

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

          this._addSystems();

          this._createPlayer();

          this._tick.setup(this._world, this._views);

          this._tick.begin(); // ⭐ 恢复输入


          if (this._inputHandler) this._inputHandler.enabled = true; // ⭐ 恢复暂停按钮

          var pauseBtn = (_this$node$parent3 = this.node.parent) == null ? void 0 : (_this$node$parent3$ge = _this$node$parent3.getChildByName('PauseButton')) == null ? void 0 : _this$node$parent3$ge.getComponent(_crd && PauseButton === void 0 ? (_reportPossibleCrUseOfPauseButton({
            error: Error()
          }), PauseButton) : PauseButton);
          if (pauseBtn != null && pauseBtn.button) pauseBtn.button.interactable = true;

          this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLED, false);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=11777679ba135477c944243af94a20f8a47608ef.js.map