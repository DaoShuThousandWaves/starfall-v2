System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, GridView;

  function _reportPossibleCrUseOfEntityView(extras) {
    _reporterNs.report("EntityView", "../../Engine/ViewRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
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

      _cclegacy._RF.push({}, "ba535jFMCtI44s8LdvFFi7K", "GridView", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Graphics']);

      ({
        ccclass
      } = _decorator);

      _export("GridView", GridView = (_dec = ccclass('GridView'), _dec(_class = class GridView extends Component {
        bind(entity) {}

        sync(dt) {}

        unbind() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3002f0711f4de188c256f9bb1e0791c28715a92d.js.map