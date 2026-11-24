System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BUILDING_CONFIG, HallEvents, GameData, gridToLocal, BuildingEntity, BuildSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBUILDING_CONFIG(extras) {
    _reporterNs.report("BUILDING_CONFIG", "../Config/BuildingConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallEvents(extras) {
    _reporterNs.report("HallEvents", "../HallEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../../Core/Data/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgridToLocal(extras) {
    _reporterNs.report("gridToLocal", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingEntity(extras) {
    _reporterNs.report("BuildingEntity", "../Entity/BuildingEntity", _context.meta, extras);
  }

  _export("BuildSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BUILDING_CONFIG = _unresolved_2.BUILDING_CONFIG;
    }, function (_unresolved_3) {
      HallEvents = _unresolved_3.HallEvents;
    }, function (_unresolved_4) {
      GameData = _unresolved_4.GameData;
    }, function (_unresolved_5) {
      gridToLocal = _unresolved_5.gridToLocal;
    }, function (_unresolved_6) {
      BuildingEntity = _unresolved_6.BuildingEntity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7810faDJW9AZLbWzoNC/UqO", "BuildSystem", undefined);

      _export("BuildSystem", BuildSystem = class BuildSystem {
        constructor() {
          this._world = null;
        }

        // 注意：构造函数不需要注入 GridMap 了！
        onStart(world) {
          this._world = world;
          world.bus.on((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_REQUEST, this._onBuildRequest, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_REQUEST, this._onBuildRequest, this);
          this._world = null;
        }

        onTick() {}

        _onBuildRequest(payload) {
          // 1. 依然需要查重（因为 Player 可能连点两次），但这里是通过发事件去查，或者直接依赖接口
          // 为了简单，你可以在这里留个引用查一下，但真正严谨的做法是校验通过直接发
          // 先假设通过校验
          const cfg = (_crd && BUILDING_CONFIG === void 0 ? (_reportPossibleCrUseOfBUILDING_CONFIG({
            error: Error()
          }), BUILDING_CONFIG) : BUILDING_CONFIG)[payload.typeId];
          if (!cfg) return; // 2. 扣钱（可抽离到 EconomySystem，这里为了直观直接扣）

          const coins = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.data.coins;

          if (coins < cfg.cost) {
            return;
          }

          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.data.coins -= cfg.cost;
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.save();

          this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).COIN_CHANGED, (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).profile.data.coins); // 3. 造实体


          const b = this._world.acquire('building', () => new (_crd && BuildingEntity === void 0 ? (_reportPossibleCrUseOfBuildingEntity({
            error: Error()
          }), BuildingEntity) : BuildingEntity)());

          b.reset();
          b.typeId = payload.typeId;
          b.gridX = payload.gridX;
          b.gridY = payload.gridY;
          const pos = (_crd && gridToLocal === void 0 ? (_reportPossibleCrUseOfgridToLocal({
            error: Error()
          }), gridToLocal) : gridToLocal)(payload.gridX, payload.gridY);
          b.x = pos.x;
          b.y = pos.y; // 4. 进 World（触发渲染）

          this._world.add(b); // 5. 广播完成，彻底不管 GridMap


          this._world.bus.emit((_crd && HallEvents === void 0 ? (_reportPossibleCrUseOfHallEvents({
            error: Error()
          }), HallEvents) : HallEvents).BUILD_COMPLETED, b);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=178303625fea521abbd7451de6c09121a8786a42.js.map