System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HallEvents, HallViewModel, _crd;

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "../HallEvents", _context.meta, extras);
  }

  _export("HallViewModel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      HallEvents = _unresolved_2.HallEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07f5ajcSJBB4anJVFN1Oukd", "HallViewModel", undefined);

      _export("HallViewModel", HallViewModel = class HallViewModel {
        constructor() {
          this._selectedBuildingId = null;
          this._bus = null;
        }

        get selectedBuildingId() {
          return this._selectedBuildingId;
        }

        selectBuilding(id) {
          this._selectedBuildingId = id;

          this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).UI_SELECTED_BUILDING_CHANGED, id);
        }

        requestUpgrade() {
          if (this._selectedBuildingId === null) return;

          this._bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).UPGRADE_REQUEST, {
            buildingId: this._selectedBuildingId
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=94de09f2b11bca8e2c4492141712fb3f001c5b5f.js.map