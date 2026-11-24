System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, HallEvents, _dec, _class, _crd, ccclass, WorldViewController;

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
        ccclass
      } = _decorator);

      _export("WorldViewController", WorldViewController = (_dec = ccclass('WorldViewController'), _dec(_class = class WorldViewController extends Component {
        constructor(...args) {
          super(...args);
          this._bus = null;
          this._targetNode = null;
          // 缩放限制
          this._minScale = 0.5;
          this._maxScale = 2.0;
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
          // 监听单指/鼠标拖拽（带增量）
          this._bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).INPUT_SINGLE_DRAG, this._onWorldDrag, this); // 监听双指/滚轮缩放


          this._bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).INPUT_PINCH, this._onWorldPinch, this);
        }

        _unregisterSceneListeners() {
          this._bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).INPUT_SINGLE_DRAG, this._onWorldDrag, this);

          this._bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).INPUT_PINCH, this._onWorldPinch, this);
        }
        /**
         * 处理地图拖拽
         * @param dx 屏幕X轴增量
         * @param dy 屏幕Y轴增量
         */


        _onWorldDrag(dx, dy) {
          if (!this._targetNode) return;
          const pos = this._targetNode.position;
          const currentScale = this._targetNode.scale.x; // 【核心细节】：必须要除以当前的缩放比例，否则地图放大后，拖动会显得很慢（不跟手）

          this._targetNode.setPosition(pos.x + dx / currentScale, pos.y + dy / currentScale, pos.z);
        }
        /**
         * 处理地图缩放
         * @param factor 缩放系数
         */


        _onWorldPinch(factor) {
          if (!this._targetNode) return;
          const currentScale = this._targetNode.scale.x;
          let newScale = currentScale * factor; // 限制缩放范围

          newScale = Math.max(this._minScale, Math.min(this._maxScale, newScale)); // 如果超出了限制，不更新

          if (Math.abs(newScale - currentScale) < 0.001) return;

          this._targetNode.setScale(newScale, newScale, 1);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=11b250f1d783c173bb7274da1628939d0519ccfd.js.map