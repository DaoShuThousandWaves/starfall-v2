System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Entity, Plane, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponConfig(extras) {
    _reporterNs.report("WeaponConfig", "../Config/WeaponConfig", _context.meta, extras);
  }

  _export("Plane", void 0);

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

      _cclegacy._RF.push({}, "041e6VBfaFJUIcYUukoYaGb", "Plane", undefined);

      _export("Plane", Plane = class Plane extends (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
        error: Error()
      }), Entity) : Entity) {
        constructor(kind) {
          super();
          this.kind = void 0;
          this.hp = 100;
          this.maxHp = 100;
          this.weapons = [];
          this.pattern = 'none';
          this.kind = kind;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3338a238322d25226817c209b732d58ce1b58a5a.js.map