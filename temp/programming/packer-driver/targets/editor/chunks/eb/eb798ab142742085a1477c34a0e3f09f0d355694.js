System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Bus, World, ViewRegistry, FixedTick, GameData, Plane, MovementSystem, OutOfBoundsSystem, FireSystem, SpawnSystem, BulletView, _dec, _class, _crd, ccclass, BattleTest;

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

  function _reportPossibleCrUseOfSpawnSystem(extras) {
    _reporterNs.report("SpawnSystem", "./Battle/System/SpawnSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletView(extras) {
    _reporterNs.report("BulletView", "./Battle/View/BulletView", _context.meta, extras);
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
      SpawnSystem = _unresolved_11.SpawnSystem;
    }, function (_unresolved_12) {
      BulletView = _unresolved_12.BulletView;
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
          }), ViewRegistry) : ViewRegistry)(this.node);
          views.registerFactory('bullet', e => {
            const node = new Node(`bullet_${e.id}`);
            return node.addComponent(_crd && BulletView === void 0 ? (_reportPossibleCrUseOfBulletView({
              error: Error()
            }), BulletView) : BulletView);
          }); // 玩家还没有 View，但先注册一个空的，避免 warn

          views.registerFactory('player', () => null);
          const world = new (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World)(bus, views); // ⭐ System 顺序很重要

          world.addSystem(new (_crd && FireSystem === void 0 ? (_reportPossibleCrUseOfFireSystem({
            error: Error()
          }), FireSystem) : FireSystem)()); // 1. 先开火

          world.addSystem(new (_crd && SpawnSystem === void 0 ? (_reportPossibleCrUseOfSpawnSystem({
            error: Error()
          }), SpawnSystem) : SpawnSystem)()); // 2. 生成子弹

          world.addSystem(new (_crd && MovementSystem === void 0 ? (_reportPossibleCrUseOfMovementSystem({
            error: Error()
          }), MovementSystem) : MovementSystem)()); // 3. 移动所有子弹

          world.addSystem(new (_crd && OutOfBoundsSystem === void 0 ? (_reportPossibleCrUseOfOutOfBoundsSystem({
            error: Error()
          }), OutOfBoundsSystem) : OutOfBoundsSystem)()); // 4. 清理越界
          // 创建玩家

          const player = new (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane)('player');
          player.x = 0;
          player.y = -(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2 + 100;
          player.weapons.push({
            fireInterval: 0.2,
            // 每 0.2 秒一发
            cooldownTimer: 0,
            bulletType: 'blue',
            bulletSpeed: 400,
            bulletDamage: 10,
            fireDirX: 0,
            fireDirY: 1,
            enabled: true
          });
          world.add(player);
          const tick = this.node.addComponent(_crd && FixedTick === void 0 ? (_reportPossibleCrUseOfFixedTick({
            error: Error()
          }), FixedTick) : FixedTick);
          tick.setup(world, views);
          tick.begin();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb798ab142742085a1477c34a0e3f09f0d355694.js.map