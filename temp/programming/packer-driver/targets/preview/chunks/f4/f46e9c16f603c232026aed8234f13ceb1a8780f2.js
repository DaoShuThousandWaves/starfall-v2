System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, World, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "./Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "./Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "./System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewRegistry(extras) {
    _reporterNs.report("ViewRegistry", "./ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityPool(extras) {
    _reporterNs.report("EntityPool", "../Core/Pool/EntityPool", _context.meta, extras);
  }

  _export("World", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfbb1RLsGxPlI7b94nlHhFb", "World", undefined);

      _export("World", World = class World {
        constructor(bus, views, pool) {
          if (pool === void 0) {
            pool = null;
          }

          this.bus = void 0;
          this._buckets = new Map();
          this._systems = [];
          this._views = void 0;
          this._pool = void 0;
          this.bus = bus;
          this._views = views;
          this._pool = pool;
        }

        addSystem(sys) {
          this._systems.push(sys);
        }
        /** 从池取实体。池不存在时直接 factory() */


        acquire(kind, factory) {
          if (this._pool) return this._pool.get(kind, factory);
          return factory();
        }

        add(e) {
          var set = this._buckets.get(e.kind);

          if (!set) {
            set = new Set();

            this._buckets.set(e.kind, set);
          }

          set.add(e);

          this._views.attach(e);

          return e;
        }

        remove(e) {
          var _this$_buckets$get, _this$_pool;

          e.alive = false;
          (_this$_buckets$get = this._buckets.get(e.kind)) == null ? void 0 : _this$_buckets$get.delete(e);

          this._views.detach(e);

          (_this$_pool = this._pool) == null ? void 0 : _this$_pool.release(e);
        }

        query(kind) {
          var _this$_buckets$get2;

          return (_this$_buckets$get2 = this._buckets.get(kind)) != null ? _this$_buckets$get2 : [];
        }

        tick(dt) {
          for (var i = 0; i < this._systems.length; ++i) {
            this._systems[i].onTick(this, dt);
          }
        }

        start() {
          for (var i = 0; i < this._systems.length; ++i) {
            var _this$_systems$i$onSt, _this$_systems$i;

            (_this$_systems$i$onSt = (_this$_systems$i = this._systems[i]).onStart) == null ? void 0 : _this$_systems$i$onSt.call(_this$_systems$i, this);
          }
        }

        hasAny(kind) {
          var set = this._buckets.get(kind);

          return set !== undefined && set.size > 0;
        }

        destroy() {
          var _this$_pool2;

          for (var i = 0; i < this._systems.length; ++i) {
            var _this$_systems$i$onDe, _this$_systems$i2;

            (_this$_systems$i$onDe = (_this$_systems$i2 = this._systems[i]).onDestroy) == null ? void 0 : _this$_systems$i$onDe.call(_this$_systems$i2, this);
          }

          this._buckets.clear();

          this._views.clear();

          (_this$_pool2 = this._pool) == null ? void 0 : _this$_pool2.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f46e9c16f603c232026aed8234f13ceb1a8780f2.js.map