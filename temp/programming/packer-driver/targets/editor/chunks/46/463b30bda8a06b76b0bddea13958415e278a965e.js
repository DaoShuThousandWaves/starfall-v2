System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Entity, Bus, TestEntity, _dec, _class, _crd, ccclass, property, TestRunner;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "./Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "./Engine/Bus", _context.meta, extras);
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
        constructor(...args) {
          super(...args);
          this.kind = 'jojo';
          this.vx = 10;
        }

      };

      _export("TestRunner", TestRunner = (_dec = ccclass('TestRunner'), _dec(_class = class TestRunner extends Component {
        start() {
          const e1 = new TestEntity();
          const e2 = new TestEntity();
          console.log(e1.kind, e2.kind);
          console.log(e1.id, e2.id);
          const bus = new (_crd && Bus === void 0 ? (_reportPossibleCrUseOfBus({
            error: Error()
          }), Bus) : Bus)();
          bus.on('ping', (id, kind) => {
            console.log(id, kind);
          });
          bus.emit('ping', e1.id, e1.kind);
          const busA = new (_crd && Bus === void 0 ? (_reportPossibleCrUseOfBus({
            error: Error()
          }), Bus) : Bus)();
          const busB = new (_crd && Bus === void 0 ? (_reportPossibleCrUseOfBus({
            error: Error()
          }), Bus) : Bus)();
          busA.on('hello', () => console.log('A 收到 hello'));
          busB.on('hello', () => console.log('B 收到 hello'));
          busA.emit('hello'); // 只应该 A 收到

          console.log('--- 上面只打了一条，说明 A/B 是隔离的 ---');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=463b30bda8a06b76b0bddea13958415e278a965e.js.map