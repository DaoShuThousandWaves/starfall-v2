System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, BOSS_CONFIG;

  function _reportPossibleCrUseOfTurretConfig(extras) {
    _reporterNs.report("TurretConfig", "./TurretConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretScheduleConfig(extras) {
    _reporterNs.report("TurretScheduleConfig", "./TurretConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ee6fxA5nVMt4peqs4dVAW5", "BossConfig", undefined);

      _export("BOSS_CONFIG", BOSS_CONFIG = {
        whale_boss: {
          id: 'whale_boss',
          name: '吴鲸波',
          maxHp: 3000,
          collisionRadius: 105,
          stageHpRatios: [0.7, 0.35],
          turrets: [{
            offsetX: -80,
            offsetY: 0,
            aimMode: 'target',
            aimSpeed: 90,
            baseAngle: 180,
            oscRange: 0,
            fireInterval: 1.0,
            bulletDamage: 8,
            bulletSpeed: 200,
            bulletType: 'yellow',
            spreadCount: 1,
            spreadAngle: 0
          }, {
            offsetX: 80,
            offsetY: 0,
            aimMode: 'target',
            aimSpeed: 90,
            baseAngle: 180,
            oscRange: 0,
            fireInterval: 1.0,
            bulletDamage: 8,
            bulletSpeed: 200,
            bulletType: 'yellow',
            spreadCount: 1,
            spreadAngle: 0
          }],
          turretSchedule: {
            mode: 'sequence',
            burstDuration: 2,
            burstGap: 1,
            loop: true
          }
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e8c68023a6378d89747bab9df3ddde370858d4b.js.map