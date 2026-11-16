System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, TurretScheduleSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "../Entity/Boss", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurret(extras) {
    _reporterNs.report("Turret", "../Entity/Turret", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretScheduleState(extras) {
    _reporterNs.report("TurretScheduleState", "../Entity/TurretSchedule", _context.meta, extras);
  }

  _export("TurretScheduleSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "924a28M7D1GbZdMgNsAs+0C", "TurretScheduleSystem", undefined);

      /**
       * 编排：决定当前哪个炮台有开火权，写到 turret.active。
       * 不碰瞄准、不碰开火。
       */
      _export("TurretScheduleSystem", TurretScheduleSystem = class TurretScheduleSystem {
        onTick(world, dt) {
          for (var boss of world.query('boss')) {
            if (!boss.alive || boss.hp <= 0) continue;

            this._tickSchedule(world, boss, dt);
          }
        }

        _tickSchedule(world, boss, dt) {
          var turrets = this._collectTurrets(world, boss);

          var schedule = boss.turretSchedule; // 无 schedule 或 volley：所有炮台 active

          if (!schedule || schedule.config.mode === 'volley') {
            for (var t of turrets) t.active = true;

            return;
          } // sequence 模式


          this._tickSequence(boss, schedule, turrets, dt);
        }

        _collectTurrets(world, boss) {
          var result = [];

          for (var t of world.query('turret')) {
            if (t.ownerId === boss.id && t.alive && t.hp > 0) result.push(t);
          }

          return result;
        }

        _tickSequence(boss, s, turrets, dt) {
          var _s$config$burstDurati;

          // 先全部清零
          for (var t of turrets) t.active = false; // 已结束


          if (s.activeIndex < 0) return; // 喘息中

          if (s.gapTimer > 0) {
            s.gapTimer -= dt;

            if (s.gapTimer <= 0) {
              s.gapTimer = 0;
              s.burstElapsed = 0;
            }

            return;
          } // 当前 active 的炮台


          var turret = turrets[s.activeIndex];

          if (!turret) {
            // 索引越界（存活炮台数变少），重置回 0
            s.activeIndex = 0;
            s.burstElapsed = 0;
            return;
          }

          turret.active = true; // 累积持续时间

          s.burstElapsed += dt;
          var burstDuration = (_s$config$burstDurati = s.config.burstDuration) != null ? _s$config$burstDurati : 2;

          if (s.burstElapsed >= burstDuration) {
            this._advanceTurret(turrets, s);
          }
        }

        _advanceTurret(turrets, s) {
          var _s$config$burstGap;

          s.activeIndex++;

          if (s.activeIndex >= turrets.length) {
            var _s$config$loop;

            if ((_s$config$loop = s.config.loop) != null ? _s$config$loop : true) {
              s.activeIndex = 0;
            } else {
              s.activeIndex = -1;
              s.burstElapsed = 0;
              s.gapTimer = 0;
              return;
            }
          }

          var next = turrets[s.activeIndex];
          if (next) next.cooldownTimer = 0;
          s.gapTimer = (_s$config$burstGap = s.config.burstGap) != null ? _s$config$burstGap : 1;
          s.burstElapsed = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be053d22e1cd5250593870e931da1a8df956db3a.js.map