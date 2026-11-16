System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewRegistry, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "./Entity", _context.meta, extras);
  }

  _export("ViewRegistry", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "747a02ARsBEnb5sfplAT/0Y", "ViewRegistry", undefined);

      __checkObsolete__(['Node']);

      _export("ViewRegistry", ViewRegistry = class ViewRegistry {
        constructor(layer) {
          this._viewsById = new Map();
          this._activeViews = [];
          this._factories = new Map();
          this._layer = void 0;
          this._layer = layer;
        }

        registerFactory(kind, factory) {
          this._factories.set(kind, factory);
        }

        attach(e) {
          const factory = this._factories.get(e.kind);

          if (!factory) {
            console.warn(`[ViewRegistry] 未注册 kind = ${e.kind} 的工厂`);
            return null;
          }

          const view = factory(e);

          if (!view) {
            return null;
          }

          view.bind(e);
          view.node.parent = this._layer;

          this._viewsById.set(e.id, view);

          this._activeViews.push(view);

          return view;
        }

        detach(e) {
          const view = this._viewsById.get(e.id);

          if (!view) return;
          view.unbind();
          view.node.destroy();

          this._viewsById.delete(e.id);

          const idx = this._activeViews.indexOf(view);

          if (idx >= 0) {
            this._activeViews[idx] = this._activeViews[this._activeViews.length - 1];

            this._activeViews.pop();
          }
        }

        syncAll(dt) {
          for (let i = 0; i < this._activeViews.length; ++i) {
            this._activeViews[i].sync(dt);
          }
        }

        clear() {
          for (let i = 0; i < this._activeViews.length; i++) {
            const view = this._activeViews[i];
            view.unbind();
            view.node.destroy();
          }

          this._viewsById.clear();

          this._activeViews.length = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e797fc8e4a00b5049e1e24d0a824a31a4be434d5.js.map