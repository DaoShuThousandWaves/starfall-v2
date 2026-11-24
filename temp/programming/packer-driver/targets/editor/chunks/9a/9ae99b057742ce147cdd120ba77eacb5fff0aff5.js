System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfWeaponData(extras) {
    _reporterNs.report("WeaponData", "../../Battle/Entity/WeaponData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingEntity(extras) {
    _reporterNs.report("BuildingEntity", "../../Hall/Entity/BuildingEntity", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9869JEQItI3rssbkIq68+I", "PlayerProfile", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ae99b057742ce147cdd120ba77eacb5fff0aff5.js.map