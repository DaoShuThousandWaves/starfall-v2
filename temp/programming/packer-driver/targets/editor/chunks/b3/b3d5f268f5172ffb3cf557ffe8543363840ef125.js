System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Entity, GhostEntity, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  _export("GhostEntity", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Entity = _unresolved_2.Entity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9470fKnZClGi75pTueVnc+u", "GhostEntity", undefined);

      _export("GhostEntity", GhostEntity = class GhostEntity extends (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
        error: Error()
      }), Entity) : Entity) {
        constructor(...args) {
          super(...args);
          this.kind = 'ghost';
          // 幽灵特有状态
          this.active = false;
          this.valid = false;
          this.typeId = '';
          this.gridX = 0;
          this.gridY = 0;
        } // 注意：x, y 属性继承自 Entity，用来记录真实世界坐标！


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b3d5f268f5172ffb3cf557ffe8543363840ef125.js.map