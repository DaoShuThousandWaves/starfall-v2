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
            for (var t of turrets) if (t) t.active = true;

            return;
          } // sequence 模式


          this._tickSequence(boss, schedule, turrets, dt);
        }

        _collectTurrets(world, boss) {
          var result = [];

          for (var id of boss.turretIds) {
            if (id === 0) {
              result.push(null);
              continue;
            }

            result.push(this._findTurretById(world, boss, id));
          }

          return result;
        }

        _findTurretById(world, boss, id) {
          for (var t of world.query('turret')) {
            if (t.id === id && t.ownerId === boss.id && t.alive && t.hp > 0) {
              return t;
            }
          }

          return null;
        }

        _tickSequence(boss, schedule, turrets, dt) {
          var _schedule$config$burs;

          // 先全部清零
          for (var t of turrets) if (t) t.active = false; // 已结束


          if (schedule.activeIndex < 0) return; // 喘息中

          if (schedule.gapTimer > 0) {
            schedule.gapTimer -= dt;

            if (schedule.gapTimer <= 0) {
              schedule.gapTimer = 0;
              schedule.burstElapsed = 0;
            }

            return;
          } // 当前 active 的炮台


          var turret = turrets[schedule.activeIndex];

          if (!turret) {
            // 槽位死亡（或越界）：跳到下一个活槽位，本帧不开火
            this._advanceTurret(turrets, schedule);

            return;
          }

          turret.active = true; // 累积持续时间

          schedule.burstElapsed += dt;
          var burstDuration = (_schedule$config$burs = schedule.config.burstDuration) != null ? _schedule$config$burs : 2;

          if (schedule.burstElapsed >= burstDuration) {
            this._advanceTurret(turrets, schedule);
          }
        }

        _advanceTurret(turrets, schedule) {
          var _schedule$config$loop, _schedule$config$burs2;

          var n = turrets.length;

          if (n === 0) {
            schedule.activeIndex = -1;
            return;
          }

          var loop = (_schedule$config$loop = schedule.config.loop) != null ? _schedule$config$loop : true;
          var next = schedule.activeIndex;
          var guard = 0;

          do {
            next++;

            if (next >= n) {
              if (!loop) {
                schedule.activeIndex = -1;
                schedule.burstElapsed = 0;
                schedule.gapTimer = 0;
                return;
              }

              next = 0;
            }

            if (guard++ > n) {
              // 全部槽位都死了，loop 也没意义了
              schedule.activeIndex = -1;
              return;
            }
          } while (!turrets[next]);

          schedule.activeIndex = next;
          var t = turrets[next];
          if (t) t.cooldownTimer = 0;
          schedule.gapTimer = (_schedule$config$burs2 = schedule.config.burstGap) != null ? _schedule$config$burs2 : 1;
          schedule.burstElapsed = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=326a4faacf0450b947cecc55363d80c01599fb46.js.map