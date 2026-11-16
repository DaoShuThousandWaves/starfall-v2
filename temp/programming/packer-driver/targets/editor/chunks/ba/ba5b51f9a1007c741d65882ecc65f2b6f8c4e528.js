System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EntityPool, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  _export("EntityPool", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b1f1w0sCVKO4PF+mVE38jl", "EntityPool", undefined);

      _export("EntityPool", EntityPool = class EntityPool {
        constructor(maxPerKind = 512) {
          this._pools = new Map();
          this._maxPerKind = void 0;
          this._maxPerKind = maxPerKind;
        }

        get(kind, factory) {
          const pool = this._pools.get(kind);

          if (pool && pool.length > 0) {
            const e = pool.pop();
            e.alive = true;
            return e;
          }

          return factory();
        }

        release(e) {
          let pool = this._pools.get(e.kind);

          if (!pool) {
            pool = [];

            this._pools.set(e.kind, pool);
          }

          if (pool.length < this._maxPerKind) {
            pool.push(e);
          }
        }

        clear() {
          this._pools.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba5b51f9a1007c741d65882ecc65f2b6f8c4e528.js.map