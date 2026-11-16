System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, FixedTick;

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "./World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewRegistry(extras) {
    _reporterNs.report("ViewRegistry", "./ViewRegistry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9b7aUod/pKirrhVl56pibh", "Tick", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass
      } = _decorator);

      _export("FixedTick", FixedTick = (_dec = ccclass('FixedTick'), _dec(_class = class FixedTick extends Component {
        constructor(...args) {
          super(...args);
          this._world = null;
          this._views = null;
          this._accumulator = 0;
          this._fixedDt = 1 / 60;
          this._running = false;
        }

        setup(world, views, hz = 60) {
          this._world = world;
          this._views = views;
          this._fixedDt = 1 / hz;
        }

        begin() {
          this._running = true;

          this._world.start();
        }

        stop() {
          this._running = false;
        }

        update(realDt) {
          if (!this._running) return;
          this._accumulator += Math.min(realDt, 0.1);

          while (this._accumulator >= this._fixedDt) {
            this._world.tick(this._fixedDt);

            this._accumulator -= this._fixedDt;
          }

          this._views.syncAll(realDt);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fc4b69f2b8b309f3ead2f513cbe09adaf3b94285.js.map