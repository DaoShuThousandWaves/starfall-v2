System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Entity, Bus, World, ViewRegistry, FixedTick, TestView, TestEntity, MovementSystem, _dec, _class, _crd, ccclass, TestRunner;

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

  function _reportPossibleCrUseOfFixedTick(extras) {
    _reporterNs.report("FixedTick", "./Engine/Tick", _context.meta, extras);
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
      FixedTick = _unresolved_6.FixedTick;
    }, function (_unresolved_7) {
      TestView = _unresolved_7.TestView;
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
        constructor() {
          super(...arguments);
          this.kind = 'test';
          this.vx = 100;
        }

      };
      MovementSystem = class MovementSystem {
        onTick(world, dt) {
          for (var e of world.query('test')) {
            e.x += e.vx * dt;
            if (e.x > 300) e.x = -300;
          }
        }

      };

      _export("TestRunner", TestRunner = (_dec = ccclass('TestRunner'), _dec(_class = class TestRunner extends Component {
        constructor() {
          super(...arguments);
          this._tick = null;
          this._testMode = 0;
        }

        // 0=正常，1=暂停，2=恢复
        start() {
          // 1. 组装 World
          var bus = new (_crd && Bus === void 0 ? (_reportPossibleCrUseOfBus({
            error: Error()
          }), Bus) : Bus)();
          var views = new (_crd && ViewRegistry === void 0 ? (_reportPossibleCrUseOfViewRegistry({
            error: Error()
          }), ViewRegistry) : ViewRegistry)(this.node);
          views.registerFactory('test', e => {
            var node = new Node("view_" + e.id);
            return node.addComponent(_crd && TestView === void 0 ? (_reportPossibleCrUseOfTestView({
              error: Error()
            }), TestView) : TestView);
          });
          var world = new (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World)(bus, views);
          world.addSystem(new MovementSystem()); // 2. 创建 3 个 Entity

          for (var i = 0; i < 3; i++) {
            var e = new TestEntity();
            e.x = -300 + i * 100;
            e.y = i * 80 - 80;
            world.add(e);
          } // 3. 挂 FixedTick 并启动


          this._tick = this.node.addComponent(_crd && FixedTick === void 0 ? (_reportPossibleCrUseOfFixedTick({
            error: Error()
          }), FixedTick) : FixedTick);

          this._tick.setup(world, views);

          this._tick.begin(); // 4. 定时测试暂停/恢复（每 2 秒切换一次）


          this.schedule(() => {
            this._testMode = (this._testMode + 1) % 3;

            if (this._testMode === 1) {
              console.log('[TestRunner] 暂停');

              this._tick.stop();
            } else if (this._testMode === 2) {
              console.log('[TestRunner] 恢复');

              this._tick.begin();
            } else {
              console.log('[TestRunner] 正常运行中');
            }
          }, 2.0);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2466b9456ff3647e431b8aa07e0727329fe9386d.js.map