System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, HallEvents, _dec, _class, _crd, ccclass, property, WorldViewController;

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "../HallEvents", _context.meta, extras);
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
    }, function (_unresolved_2) {
      HallEvents = _unresolved_2.HallEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36080OrSZVNaYlJR+Q9skcF", "WorldViewController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WorldViewController", WorldViewController = (_dec = ccclass('WorldViewController'), _dec(_class = class WorldViewController extends Component {
        constructor() {
          super(...arguments);
          this._bus = null;
          this._targetNode = null;
        }

        setup(bus, targetNode) {
          this._bus = bus;
          this._targetNode = targetNode;

          this._registerSceneListeners();
        }

        onDestroy() {
          this._unregisterSceneListeners();
        }

        _registerSceneListeners() {
          this._bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).INPUT_DRAG, this._worldMove, this);
        }

        _unregisterSceneListeners() {
          this._bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).INPUT_DRAG, this._worldMove, this);
        }

        _worldMove(x, y) {
          console.log(x, y);

          this._targetNode.position.set(x, y);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0f875657f11edf6a109b1b556e838798617f0d1.js.map