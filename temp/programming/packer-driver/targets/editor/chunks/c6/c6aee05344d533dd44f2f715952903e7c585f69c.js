System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Entity, _crd;

  function _reportPossibleCrUseOfHealthComp(extras) {
    _reporterNs.report("HealthComp", "../Battle/Entity/Components/HealthComp", _context.meta, extras);
  }

  _export("Entity", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a2f8HpwvxHjLM7RwdnW77J", "Entity", undefined);

      _export("Entity", Entity = class Entity {
        constructor() {
          this.id = void 0;
          this.x = 0;
          this.y = 0;
          this.alive = true;
          this.kind = '';
          this.faction = 'neutral';
          this.collisionRadius = 0;

          /**
           * 可选的生命值组件。子弹没有 health，玩家/敌人/Boss/炮台有。
           * 基类声明为可选，子类覆盖为必选。
           */
          this.health = void 0;
          this.id = Entity._nextId++;
        }

      });

      Entity._nextId = 1;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c6aee05344d533dd44f2f715952903e7c585f69c.js.map