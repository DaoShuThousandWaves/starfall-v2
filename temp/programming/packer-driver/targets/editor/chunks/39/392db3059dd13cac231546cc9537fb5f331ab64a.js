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
          stages: [// ===== 阶段 0：双炮交替（100%） =====
          {
            turrets: [{
              offsetX: -80,
              offsetY: 0,
              hp: 200,
              collisionRadius: 14,
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
              hp: 200,
              collisionRadius: 14,
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
          }, // ===== 阶段 1：四炮扇形（70%） =====
          {
            hpRatio: 0.7,
            turrets: [{
              offsetX: -120,
              offsetY: 20,
              hp: 200,
              collisionRadius: 14,
              aimMode: 'target',
              aimSpeed: 120,
              baseAngle: 180,
              oscRange: 0,
              fireInterval: 0.8,
              bulletDamage: 10,
              bulletSpeed: 220,
              bulletType: 'yellow',
              spreadCount: 3,
              spreadAngle: 30 // ← 扇形 3 发

            }, {
              offsetX: 120,
              offsetY: 20,
              hp: 200,
              collisionRadius: 14,
              aimMode: 'target',
              aimSpeed: 120,
              baseAngle: 180,
              oscRange: 0,
              fireInterval: 0.8,
              bulletDamage: 10,
              bulletSpeed: 220,
              bulletType: 'yellow',
              spreadCount: 3,
              spreadAngle: 30
            }],
            turretSchedule: {
              mode: 'volley' // ← 齐射

            }
          }, // ===== 阶段 2：单炮狂射（35%） =====
          {
            hpRatio: 0.35,
            turrets: [{
              offsetX: 0,
              offsetY: -60,
              hp: 200,
              collisionRadius: 14,
              aimMode: 'target',
              aimSpeed: 180,
              baseAngle: 270,
              oscRange: 0,
              fireInterval: 0.4,
              // ← 射速翻倍
              bulletDamage: 12,
              bulletSpeed: 260,
              bulletType: 'yellow',
              spreadCount: 2,
              spreadAngle: 20
            }],
            turretSchedule: {
              mode: 'volley'
            }
          }]
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=392db3059dd13cac231546cc9537fb5f331ab64a.js.map