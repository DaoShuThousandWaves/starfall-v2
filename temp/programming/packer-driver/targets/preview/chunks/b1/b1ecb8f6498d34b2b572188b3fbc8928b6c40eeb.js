System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Plane, Boss, _crd;

  function _reportPossibleCrUseOfBossConfigData(extras) {
    _reporterNs.report("BossConfigData", "../Config/BossConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "./Plane", _context.meta, extras);
  }

  _export("Boss", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Plane = _unresolved_2.Plane;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5c85FWtJxJX6jsyUJfTh01", "Boss", undefined);

      _export("Boss", Boss = class Boss extends (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
        error: Error()
      }), Plane) : Plane) {
        constructor(config) {
          super('boss');
          this.config = void 0;

          /** 当前阶段索引。0 = 初始阶段 */
          this.stageIndex = 0;
          this.config = config;
          this.hp = config.maxHp;
          this.maxHp = config.maxHp;
          this.collisionRadius = config.collisionRadius;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b1ecb8f6498d34b2b572188b3fbc8928b6c40eeb.js.map