System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Entity, BuildingEntity, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  _export("BuildingEntity", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Entity = _unresolved_2.Entity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0249dVHaSxApZDrC4z1zEfT", "BuildingEntity", undefined);

      /**
       * 经营场景建筑实体，继承项目原生Entity，不新增组件体系
       * kind = 'building'，复用Engine统一生命周期、数字ID、World/ViewRegistry
       */
      _export("BuildingEntity", BuildingEntity = class BuildingEntity extends (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
        error: Error()
      }), Entity) : Entity) {
        constructor(gridX, gridY, typeId) {
          super(); // 直接复用基类自带 x/y 存格子坐标，不再额外写 gridX gridY

          this.kind = 'building';
          // 建筑业务字段
          this.typeId = void 0;
          this.pendingIncome = 0;
          this.synergyMultiplier = 1.0;
          this.level = 1;
          this.x = gridX;
          this.y = gridY;
          this.typeId = typeId;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=03e975f26cb204bf879369dc0568257058873e66.js.map