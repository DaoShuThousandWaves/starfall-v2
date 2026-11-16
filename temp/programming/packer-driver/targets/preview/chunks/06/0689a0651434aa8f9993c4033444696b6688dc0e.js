System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Entity, Bus, World, TestEntity, MovementSystem, CullSystem, _dec, _class, _crd, ccclass, property, TestRunner;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "./Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "./Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "./Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "./Engine/World", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Entity = _unresolved_2.Entity;
    }, function (_unresolved_3) {
      Bus = _unresolved_3.Bus;
    }, function (_unresolved_4) {
      World = _unresolved_4.World;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "818e88LjF9F26ds8pOTbr69", "TestRunner", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      TestEntity = class TestEntity extends (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
        error: Error()
      }), Entity) : Entity) {
        constructor() {
          super(...arguments);
          this.kind = 'test';
          this.vx = 10;
          this.name = '';
        }

      };
      MovementSystem = class MovementSystem {
        onStart(world) {
          console.log("start");
        }

        onTick(world, dt) {
          var count = 0;

          for (var e of world.query('test')) {
            e.x += e.vx * dt;
            count++;
          }

          if (count > 0) {
            console.log("[MovementSystem] tick, \u5904\u7406\u4E86 " + count + " \u4E2A\u5B9E\u4F53, dt=" + dt.toFixed(4));
          }
        }

      }; // ========== System 2：检查谁跑远了 ==========

      CullSystem = class CullSystem {
        onTick(world, dt) {
          for (var e of world.query('test')) {
            if (e.x > 100) {
              console.log("[CullSystem] " + e.name + " \u8DD1\u8FDC\u4E86(x=" + e.x.toFixed(1) + ")\uFF0C\u79FB\u9664");
              world.remove(e);
            }
          }
        }

      };

      _export("TestRunner", TestRunner = (_dec = ccclass('TestRunner'), _dec(_class = class TestRunner extends Component {
        constructor() {
          super(...arguments);
          this._world = null;
        }

        start() {
          // 1. 组装 World
          var bus = new (_crd && Bus === void 0 ? (_reportPossibleCrUseOfBus({
            error: Error()
          }), Bus) : Bus)();
          this._world = new (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World)(bus);

          this._world.addSystem(new MovementSystem());

          this._world.addSystem(new CullSystem()); // 2. 放 3 个 Entity


          for (var i = 0; i < 3; i++) {
            var e = new TestEntity();
            e.name = "e" + i;
            e.x = 0;

            this._world.add(e);

            console.log("\u521B\u5EFA " + e.name + ", id=" + e.id);
          }

          this._world.start(); // 4. 手动模拟 20 帧（每帧 0.1 秒）


          console.log('--- 开始模拟 ---');

          for (var frame = 0; frame < 20; frame++) {
            this._world.tick(0.1);
          }

          console.log('--- 模拟结束，剩余 test 实体数:', this._countTest(), '---');
        }

        _countTest() {
          var n = 0;

          for (var _ of this._world.query('test')) n++;

          return n;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0689a0651434aa8f9993c4033444696b6688dc0e.js.map