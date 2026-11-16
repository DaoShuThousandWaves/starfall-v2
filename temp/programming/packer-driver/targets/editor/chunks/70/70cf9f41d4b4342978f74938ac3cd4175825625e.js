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
          this._views = new Map();
          this._list = [];
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
          view.bind(e);
          view.node.parent = this._layer;

          this._views.set(e.id, view);

          this._list.push(view);

          return view;
        }

        detach(e) {
          const view = this._views.get(e.id);

          if (!view) return;
          view.unbind();
          view.node.destroy();

          this._views.delete(e.id);

          const idx = this._list.indexOf(view);

          if (idx >= 0) {
            this._list[idx] = this._list[this._list.length - 1];

            this._list.pop();
          }
        }

        syncAll(dt) {
          for (let i = 0; i < this._list.length; ++i) {
            this._list[i].sync(dt);
          }
        }

        clear() {
          for (let i = 0; i < this._list.length; i++) {
            const view = this._list[i];
            view.unbind();
            view.node.destroy();
          }

          this._views.clear();

          this._list.length = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=70cf9f41d4b4342978f74938ac3cd4175825625e.js.map