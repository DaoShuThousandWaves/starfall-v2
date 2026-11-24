System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Entity, BuildingEntity, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  _export("BuildingEntity", void 0);

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

      _cclegacy._RF.push({}, "0249dVHaSxApZDrC4z1zEfT", "BuildingEntity", undefined);

      _export("BuildingEntity", BuildingEntity = class BuildingEntity extends (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
        error: Error()
      }), Entity) : Entity) {
        constructor() {
          super();
          this.kind = 'building';
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=449df4d741943aa5031598cc99bbb3e62951ce20.js.map