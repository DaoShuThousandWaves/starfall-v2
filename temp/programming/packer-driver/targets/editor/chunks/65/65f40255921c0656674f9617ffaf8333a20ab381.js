System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewPool, _crd;

  function _reportPossibleCrUseOfEntityView(extras) {
    _reporterNs.report("EntityView", "./ViewRegistry", _context.meta, extras);
  }

  _export("ViewPool", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d92f9g1n1MWo1r6hnBJx8C", "ViewPool", undefined);

      /**
       * EntityView 实例池。按 kind 分池。
       * 节点还池时 active = false + removeFromParent，不 destroy。
       * 出池时 active = true，由 ViewRegistry.attach 重新挂 parent。
       */
      _export("ViewPool", ViewPool = class ViewPool {
        constructor(maxPerKind = 256) {
          this._pools = new Map();
          this._maxPerKind = void 0;
          this._maxPerKind = maxPerKind;
        }

        get(kind, factory) {
          const pool = this._pools.get(kind);

          if (pool && pool.length > 0) {
            const view = pool.pop();
            view.node.active = true; // 复位可见性（PlayerView 无敌闪烁可能置过 false）

            return view;
          }

          return factory();
        }

        release(kind, view) {
          let pool = this._pools.get(kind);

          if (!pool) {
            pool = [];

            this._pools.set(kind, pool);
          }

          if (pool.length < this._maxPerKind) {
            view.node.active = false;
            view.node.removeFromParent();
            pool.push(view);
          } else {
            view.node.destroy();
          }
        }

        clear() {
          for (const pool of this._pools.values()) {
            for (const view of pool) {
              if (view.node && view.node.isValid) {
                view.node.destroy();
              }
            }
          }

          this._pools.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=65f40255921c0656674f9617ffaf8333a20ab381.js.map