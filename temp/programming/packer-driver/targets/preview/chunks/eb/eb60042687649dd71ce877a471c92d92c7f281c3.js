System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewPool, ViewRegistry, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "./Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewPool(extras) {
    _reporterNs.report("ViewPool", "./ViewPool", _context.meta, extras);
  }

  _export("ViewRegistry", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ViewPool = _unresolved_2.ViewPool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "747a02ARsBEnb5sfplAT/0Y", "ViewRegistry", undefined);

      __checkObsolete__(['Node']);

      _export("ViewRegistry", ViewRegistry = class ViewRegistry {
        constructor(layer, pool) {
          this._viewsById = new Map();
          this._activeViews = [];
          this._factories = new Map();
          this._layer = void 0;
          this._pool = void 0;
          this._layer = layer;
          this._pool = pool != null ? pool : new (_crd && ViewPool === void 0 ? (_reportPossibleCrUseOfViewPool({
            error: Error()
          }), ViewPool) : ViewPool)(256);
        }

        registerFactory(kind, factory) {
          this._factories.set(kind, factory);
        }

        attach(e) {
          var factory = this._factories.get(e.kind);

          if (!factory) {
            console.warn("[ViewRegistry] \u672A\u6CE8\u518C kind = " + e.kind + " \u7684\u5DE5\u5382");
            return null;
          }

          var view = this._pool.get(e.kind, () => factory(e));

          view.bind(e);
          view.node.parent = this._layer;

          this._viewsById.set(e.id, view);

          this._activeViews.push(view);

          return view;
        }

        detach(e) {
          var view = this._viewsById.get(e.id);

          if (!view) return;
          view.unbind();

          this._pool.release(e.kind, view);

          this._viewsById.delete(e.id);

          var idx = this._activeViews.indexOf(view);

          if (idx >= 0) {
            this._activeViews[idx] = this._activeViews[this._activeViews.length - 1];

            this._activeViews.pop();
          }
        }

        syncAll(dt) {
          for (var i = 0; i < this._activeViews.length; ++i) {
            this._activeViews[i].sync(dt);
          }
        }

        clear() {
          for (var i = 0; i < this._activeViews.length; i++) {
            var view = this._activeViews[i];
            view.unbind();

            if (view.node && view.node.isValid) {
              view.node.destroy();
            }
          }

          this._viewsById.clear();

          this._activeViews.length = 0;

          this._pool.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb60042687649dd71ce877a471c92d92c7f281c3.js.map