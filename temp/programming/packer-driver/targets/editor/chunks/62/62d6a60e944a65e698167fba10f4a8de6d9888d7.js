System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Bus, World, ViewRegistry, FixedTick, GameData, Plane, MovementSystem, OutOfBoundsSystem, FireSystem, BulletSpawnSystem, PlayerControlSystem, BulletView, PlayerView, BattleInputHandler, EnemyView, CombatSystem, DamageSystem, EnemySpawnSystem, _dec, _class, _crd, ccclass, BattleTest;

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "./Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "./Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewRegistry(extras) {
    _reporterNs.report("ViewRegistry", "./Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFixedTick(extras) {
    _reporterNs.report("FixedTick", "./Engine/Tick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "./Core/Data/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "./Battle/Entity/Plane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMovementSystem(extras) {
    _reporterNs.report("MovementSystem", "./Battle/System/MovementSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOutOfBoundsSystem(extras) {
    _reporterNs.report("OutOfBoundsSystem", "./Battle/System/OutOfBoundsSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireSystem(extras) {
    _reporterNs.report("FireSystem", "./Battle/System/FireSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletSpawnSystem(extras) {
    _reporterNs.report("BulletSpawnSystem", "./Battle/System/BulletSpawnSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControlSystem(extras) {
    _reporterNs.report("PlayerControlSystem", "./Battle/System/PlayerControlSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletView(extras) {
    _reporterNs.report("BulletView", "./Battle/View/BulletView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerView(extras) {
    _reporterNs.report("PlayerView", "./Battle/View/PlayerView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleInputHandler(extras) {
    _reporterNs.report("BattleInputHandler", "./Battle/BattleInputHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyView(extras) {
    _reporterNs.report("EnemyView", "./Battle/View/EnemyView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCombatSystem(extras) {
    _reporterNs.report("CombatSystem", "./Battle/System/CombatSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageSystem(extras) {
    _reporterNs.report("DamageSystem", "./Battle/System/DamageSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemySpawnSystem(extras) {
    _reporterNs.report("EnemySpawnSystem", "./Battle/System/EnemySpawnSystem", _context.meta, extras);
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
      GameData = _unresolved_6.GameData;
    }, function (_unresolved_7) {
      Plane = _unresolved_7.Plane;
    }, function (_unresolved_8) {
      MovementSystem = _unresolved_8.MovementSystem;
    }, function (_unresolved_9) {
      OutOfBoundsSystem = _unresolved_9.OutOfBoundsSystem;
    }, function (_unresolved_10) {
      FireSystem = _unresolved_10.FireSystem;
    }, function (_unresolved_11) {
      BulletSpawnSystem = _unresolved_11.BulletSpawnSystem;
    }, function (_unresolved_12) {
      PlayerControlSystem = _unresolved_12.PlayerControlSystem;
    }, function (_unresolved_13) {
      BulletView = _unresolved_13.BulletView;
    }, function (_unresolved_14) {
      PlayerView = _unresolved_14.PlayerView;
    }, function (_unresolved_15) {
      BattleInputHandler = _unresolved_15.BattleInputHandler;
    }, function (_unresolved_16) {
      EnemyView = _unresolved_16.EnemyView;
    }, function (_unresolved_17) {
      CombatSystem = _unresolved_17.CombatSystem;
    }, function (_unresolved_18) {
      DamageSystem = _unresolved_18.DamageSystem;
    }, function (_unresolved_19) {
      EnemySpawnSystem = _unresolved_19.EnemySpawnSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "818e88LjF9F26ds8pOTbr69", "TestRunner", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass
      } = _decorator);

      _export("BattleTest", BattleTest = (_dec = ccclass('BattleTest'), _dec(_class = class BattleTest extends Component {
        start() {
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).init();
          const bus = new (_crd && Bus === void 0 ? (_reportPossibleCrUseOfBus({
            error: Error()
          }), Bus) : Bus)();
          const views = new (_crd && ViewRegistry === void 0 ? (_reportPossibleCrUseOfViewRegistry({
            error: Error()
          }), ViewRegistry) : ViewRegistry)(this.node); // ⭐ player 注册真实 PlayerView

          views.registerFactory('player', e => {
            const node = new Node(`player_${e.id}`);
            return node.addComponent(_crd && PlayerView === void 0 ? (_reportPossibleCrUseOfPlayerView({
              error: Error()
            }), PlayerView) : PlayerView);
          });
          views.registerFactory('enemy', e => {
            const node = new Node(`enemy_${e.id}`);
            return node.addComponent(_crd && EnemyView === void 0 ? (_reportPossibleCrUseOfEnemyView({
              error: Error()
            }), EnemyView) : EnemyView);
          });
          views.registerFactory('bullet', e => {
            const node = new Node(`bullet_${e.id}`);
            return node.addComponent(_crd && BulletView === void 0 ? (_reportPossibleCrUseOfBulletView({
              error: Error()
            }), BulletView) : BulletView);
          });
          const world = new (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World)(bus, views);
          world.addSystem(new (_crd && FireSystem === void 0 ? (_reportPossibleCrUseOfFireSystem({
            error: Error()
          }), FireSystem) : FireSystem)());
          world.addSystem(new (_crd && BulletSpawnSystem === void 0 ? (_reportPossibleCrUseOfBulletSpawnSystem({
            error: Error()
          }), BulletSpawnSystem) : BulletSpawnSystem)());
          world.addSystem(new (_crd && PlayerControlSystem === void 0 ? (_reportPossibleCrUseOfPlayerControlSystem({
            error: Error()
          }), PlayerControlSystem) : PlayerControlSystem)());
          world.addSystem(new (_crd && EnemySpawnSystem === void 0 ? (_reportPossibleCrUseOfEnemySpawnSystem({
            error: Error()
          }), EnemySpawnSystem) : EnemySpawnSystem)());
          world.addSystem(new (_crd && MovementSystem === void 0 ? (_reportPossibleCrUseOfMovementSystem({
            error: Error()
          }), MovementSystem) : MovementSystem)());
          world.addSystem(new (_crd && CombatSystem === void 0 ? (_reportPossibleCrUseOfCombatSystem({
            error: Error()
          }), CombatSystem) : CombatSystem)());
          world.addSystem(new (_crd && DamageSystem === void 0 ? (_reportPossibleCrUseOfDamageSystem({
            error: Error()
          }), DamageSystem) : DamageSystem)());
          world.addSystem(new (_crd && OutOfBoundsSystem === void 0 ? (_reportPossibleCrUseOfOutOfBoundsSystem({
            error: Error()
          }), OutOfBoundsSystem) : OutOfBoundsSystem)()); // 创建玩家

          const player = new (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane)('player');
          player.x = 0;
          player.y = -(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2 + 100;
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
          world.add(player);
          const enemy = new (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane)('enemy');
          enemy.x = 0;
          enemy.y = 200;
          enemy.hp = 30;
          enemy.maxHp = 30;
          enemy.collisionRadius = 20;
          world.add(enemy); // ⭐ 挂 FixedTick + InputHandler

          const tick = this.node.addComponent(_crd && FixedTick === void 0 ? (_reportPossibleCrUseOfFixedTick({
            error: Error()
          }), FixedTick) : FixedTick);
          tick.setup(world, views);
          tick.begin();
          const inputHandler = this.node.addComponent(_crd && BattleInputHandler === void 0 ? (_reportPossibleCrUseOfBattleInputHandler({
            error: Error()
          }), BattleInputHandler) : BattleInputHandler);
          inputHandler.setup(bus);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=62d6a60e944a65e698167fba10f4a8de6d9888d7.js.map