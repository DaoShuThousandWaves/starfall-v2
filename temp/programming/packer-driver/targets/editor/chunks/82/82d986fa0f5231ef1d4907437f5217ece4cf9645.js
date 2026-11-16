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
        constructor(bus, views) {
          this.bus = void 0;
          this._buckets = new Map();
          this._systems = [];
          this._views = void 0;
          this.bus = bus;
          this._views = views;
        }

        addSystem(sys) {
          this._systems.push(sys);
        }

        add(e) {
          let set = this._buckets.get(e.kind);

          if (!set) {
            set = new Set();

            this._buckets.set(e.kind, set);
          }

          set.add(e);

          this._views.attach(e);

          return e;
        }

        remove(e) {
          var _this$_buckets$get;

          e.alive = false;
          (_this$_buckets$get = this._buckets.get(e.kind)) == null ? void 0 : _this$_buckets$get.delete(e);

          this._views.detach(e);
        }

        query(kind) {
          var _this$_buckets$get2;

          return (_this$_buckets$get2 = this._buckets.get(kind)) != null ? _this$_buckets$get2 : [];
        }

        tick(dt) {
          for (let i = 0; i < this._systems.length; ++i) {
            this._systems[i].onTick(this, dt);
          }
        }

        start() {
          for (let i = 0; i < this._systems.length; ++i) {
            var _this$_systems$i$onSt, _this$_systems$i;

            (_this$_systems$i$onSt = (_this$_systems$i = this._systems[i]).onStart) == null ? void 0 : _this$_systems$i$onSt.call(_this$_systems$i, this);
          }
        }

        hasAny(kind) {
          const set = this._buckets.get(kind);

          return set !== undefined && set.size > 0;
        }

        destroy() {
          for (let i = 0; i < this._systems.length; ++i) {
            var _this$_systems$i$onDe, _this$_systems$i2;

            (_this$_systems$i$onDe = (_this$_systems$i2 = this._systems[i]).onDestroy) == null ? void 0 : _this$_systems$i$onDe.call(_this$_systems$i2, this);
          }

          this._buckets.clear();

          this._views.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=82d986fa0f5231ef1d4907437f5217ece4cf9645.js.map