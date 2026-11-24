System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Entity, BuildingEntity, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingConfigData(extras) {
    _reporterNs.report("BuildingConfigData", "../Config/BuildingConfig", _context.meta, extras);
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

      _export("BuildingEntity", BuildingEntity = class BuildingEntity extends (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
        error: Error()
      }), Entity) : Entity) {
        constructor(...args) {
          super(...args);
          this.kind = 'building';
          this.typeId = '';
          this.gridX = 0;
          this.gridY = 0;
          this.pendingIncome = 0;
          this.level = 1;
          // B 模块用，先初始化为 1
          this.synergyMultiplier = 1;

          /** 当前等级的产出速率（缓存，升级/相性变化时重算） */
          this.effectiveIncomePerSecond = 0;

          /** 当前等级的容量 */
          this.effectiveIncomeCap = 0;
        }

        reset() {
          this.typeId = '';
          this.gridX = 0;
          this.gridY = 0;
          this.pendingIncome = 0;
          this.level = 1;
          this.synergyMultiplier = 1;
          this.effectiveIncomePerSecond = 0;
          this.effectiveIncomeCap = 0;
          this.x = 0;
          this.y = 0;
          this.alive = true;
        }
        /** 根据 config + level + synergy 重算产出参数 */


        recalc(config) {
          this.effectiveIncomePerSecond = config.incomePerSecond * config.incomeMultiplier(this.level) * this.synergyMultiplier;
          this.effectiveIncomeCap = config.incomeCap * config.capMultiplier(this.level);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7bcfd33feda4266258fc1af2e47e5bc76593ca23.js.map