System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Entity, Bus, World, ViewRegistry, TestView, TestEntity, MovementSystem, _dec, _class, _crd, ccclass, TestRunner;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "./Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "./Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "./Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewRegistry(extras) {
    _reporterNs.report("ViewRegistry", "./Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "./Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestView(extras) {
    _reporterNs.report("TestView", "./TestView", _context.meta, extras);
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
      Entity = _unresolved_2.Entity;
    }, function (_unresolved_3) {
      Bus = _unresolved_3.Bus;
    }, function (_unresolved_4) {
      World = _unresolved_4.World;
    }, function (_unresolved_5) {
      ViewRegistry = _unresolved_5.ViewRegistry;
    }, function (_unresolved_6) {
      TestView = _unresolved_6.TestView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "818e88LjF9F26ds8pOTbr69", "TestRunner", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass
      } = _decorator);
      TestEntity = class TestEntity extends (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
        error: Error()
      }), Entity) : Entity) {
        constructor(...args) {
          super(...args);
          this.kind = 'test';
          this.vx = 100;
        }

      };
      MovementSystem = class MovementSystem {
        onTick(world, dt) {
          for (const e of world.query('test')) {
            e.x += e.vx * dt;

            if (e.x > 300) {
              e.x = -300; // 跑出右边就回左边
            }
          }
        }

      };

      _export("TestRunner", TestRunner = (_dec = ccclass('TestRunner'), _dec(_class = class TestRunner extends Component {
        constructor(...args) {
          super(...args);
          this._world = null;
          this._views = null;
          this._accumulator = 0;
          this._fixedDt = 1 / 60;
        }

        start() {
          const bus = new (_crd && Bus === void 0 ? (_reportPossibleCrUseOfBus({
            error: Error()
          }), Bus) : Bus)();
          const views = new (_crd && ViewRegistry === void 0 ? (_reportPossibleCrUseOfViewRegistry({
            error: Error()
          }), ViewRegistry) : ViewRegistry)(this.node); // 所有 View 挂在 TestRunner 节点下
          // 注册工厂：kind = 'test' 的 Entity 用 TestView

          views.registerFactory('test', e => {
            const node = new Node(`view_${e.id}`);
            return node.addComponent(_crd && TestView === void 0 ? (_reportPossibleCrUseOfTestView({
              error: Error()
            }), TestView) : TestView);
          });
          const world = new (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World)(bus, views);
          world.addSystem(new MovementSystem()); // 创建 3 个 Entity

          for (let i = 0; i < 3; i++) {
            const e = new TestEntity();
            e.x = -300 + i * 100;
            e.y = i * 80 - 80; // 错开 y 方便观察

            world.add(e);
          }

          world.start(); // 每帧驱动

          this._world = world;
          this._views = views;
        }

        update(realDt) {
          this._accumulator += Math.min(realDt, 0.1);

          while (this._accumulator >= this._fixedDt) {
            this._world.tick(this._fixedDt);

            this._accumulator -= this._fixedDt;
          }

          this._views.syncAll(realDt);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ae6d69f150bdc3c01cafe2332d1bc4e81fb12640.js.map