System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Bus, World, ViewRegistry, FixedTick, Bullet, MovementSystem, BulletView, OutOfBoundsSystem, _dec, _class, _crd, ccclass, BattleTest;

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

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Battle/Entity/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMovementSystem(extras) {
    _reporterNs.report("MovementSystem", "./Battle/System/MovementSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletView(extras) {
    _reporterNs.report("BulletView", "./Battle/View/BulletView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOutOfBoundsSystem(extras) {
    _reporterNs.report("OutOfBoundsSystem", "./Battle/System/OutOfBoundsSystem", _context.meta, extras);
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
      Bullet = _unresolved_6.Bullet;
    }, function (_unresolved_7) {
      MovementSystem = _unresolved_7.MovementSystem;
    }, function (_unresolved_8) {
      BulletView = _unresolved_8.BulletView;
    }, function (_unresolved_9) {
      OutOfBoundsSystem = _unresolved_9.OutOfBoundsSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "818e88LjF9F26ds8pOTbr69", "TestRunner", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass
      } = _decorator);

      _export("BattleTest", BattleTest = (_dec = ccclass('BattleTest'), _dec(_class = class BattleTest extends Component {
        constructor(...args) {
          super(...args);
          this._world = null;
        }

        start() {
          const bus = new (_crd && Bus === void 0 ? (_reportPossibleCrUseOfBus({
            error: Error()
          }), Bus) : Bus)();
          const views = new (_crd && ViewRegistry === void 0 ? (_reportPossibleCrUseOfViewRegistry({
            error: Error()
          }), ViewRegistry) : ViewRegistry)(this.node); // 暂时没有 View，但需要传

          views.registerFactory('bullet', e => {
            const node = new Node(`bullet_${e.id}`);
            return node.addComponent(_crd && BulletView === void 0 ? (_reportPossibleCrUseOfBulletView({
              error: Error()
            }), BulletView) : BulletView);
          });
          const world = new (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World)(bus, views);
          world.addSystem(new (_crd && MovementSystem === void 0 ? (_reportPossibleCrUseOfMovementSystem({
            error: Error()
          }), MovementSystem) : MovementSystem)());
          world.addSystem(new (_crd && OutOfBoundsSystem === void 0 ? (_reportPossibleCrUseOfOutOfBoundsSystem({
            error: Error()
          }), OutOfBoundsSystem) : OutOfBoundsSystem)()); // 手动创建 3 颗子弹，从底部往上飞

          for (let i = 0; i < 3; i++) {
            const b = new (_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
              error: Error()
            }), Bullet) : Bullet)();
            b.x = -100 + i * 100; // 横向错开

            b.y = 0;
            b.dirX = 0; // 垂直向上

            b.dirY = 1;
            b.speed = 200; // 每秒 200 像素

            b.damage = 10;
            b.isPlayerBullet = true; // ⚠️ ViewRegistry 没有 'bullet' 的工厂，attach 会 warn，但不会崩
            // attach 返回 null，子弹 Node 不会创建
            // 这里只验证数据层，不接 View

            world.add(b);
          }

          this._world = world; // 挂 FixedTick

          const tick = this.node.addComponent(_crd && FixedTick === void 0 ? (_reportPossibleCrUseOfFixedTick({
            error: Error()
          }), FixedTick) : FixedTick);
          tick.setup(world, views);
          tick.begin(); // 每 0.5 秒打印一次子弹位置

          this.schedule(() => {
            const positions = [];

            for (const b of world.query('bullet')) {
              positions.push(`(${b.x.toFixed(1)}, ${b.y.toFixed(1)})`);
            }

            console.log(`[BattleTest] 子弹位置: ${positions.join(' | ')}`);
          }, 0.5);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4781ed22f7c5c12dda5df14137878f98a84fb33.js.map