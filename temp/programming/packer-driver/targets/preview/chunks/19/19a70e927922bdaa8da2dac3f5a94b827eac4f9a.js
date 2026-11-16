System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Bullet, TurretSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "../Entity/Boss", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretData(extras) {
    _reporterNs.report("TurretData", "../Entity/TurretData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "../Entity/Plane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../Entity/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretScheduleState(extras) {
    _reporterNs.report("TurretScheduleState", "../Entity/TurretSchedule", _context.meta, extras);
  }

  _export("TurretSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Bullet = _unresolved_2.Bullet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9845a3KA7VEoaIx22xJUuIm", "TurretSystem", undefined);

      _export("TurretSystem", TurretSystem = class TurretSystem {
        onTick(world, dt) {
          for (var boss of world.query('boss')) {
            if (boss.hp <= 0) continue;

            for (var turret of boss.turrets) {
              this._tickAim(world, boss, turret, dt);
            }

            this._tickFiring(world, boss, dt);
          }
        } // ===== 瞄准 =====


        _tickAim(world, boss, turret, dt) {
          var c = turret.config;

          switch (c.aimMode) {
            case 'fixed':
              turret.aimAngle = c.baseAngle;
              break;

            case 'target':
              this._aimAtPlayer(world, boss, turret, dt);

              break;

            case 'spin':
              turret.aimAngle = (turret.aimAngle + c.aimSpeed * dt) % 360;
              break;

            case 'oscillate':
              turret.oscPhase += c.aimSpeed * Math.PI / 180 * dt;
              turret.aimAngle = c.baseAngle + Math.sin(turret.oscPhase) * c.oscRange;
              break;
          }
        }

        _aimAtPlayer(world, boss, turret, dt) {
          var player = this._findPlayer(world);

          if (!player) return;
          var c = turret.config;
          var turretX = boss.x + c.offsetX;
          var turretY = boss.y + c.offsetY;
          var targetAngle = Math.atan2(player.y - turretY, player.x - turretX) * 180 / Math.PI; // 平滑旋转：diff 归一到 [-180, 180]，每帧最多转 aimSpeed * dt

          var diff = targetAngle - turret.aimAngle;
          diff = ((diff + 180) % 360 + 360) % 360 - 180;
          var maxStep = c.aimSpeed * dt;

          if (Math.abs(diff) <= maxStep) {
            turret.aimAngle = targetAngle;
          } else {
            turret.aimAngle += Math.sign(diff) * maxStep;
          }
        }

        _findPlayer(world) {
          for (var p of world.query('player')) return p;

          return null;
        } // ===== 开火 =====


        _tickFiring(world, boss, dt) {
          var schedule = boss.turretSchedule; // 没有 schedule 配置 → 默认 volley（各自独立计时，当前行为）

          if (!schedule || schedule.config.mode === 'volley') {
            for (var turret of boss.turrets) {
              this._tickFire(world, boss, turret, dt);
            }

            return;
          } // sequence 模式


          this._tickSequence(world, boss, schedule, dt);
        }

        _tickSequence(world, boss, s, dt) {
          var _s$config$burstDurati;

          // 已结束（loop = false 打完一圈）
          if (s.activeIndex < 0) return; // 喘息中：所有炮台停火

          if (s.gapTimer > 0) {
            s.gapTimer -= dt;

            if (s.gapTimer <= 0) {
              s.gapTimer = 0;
              s.burstElapsed = 0;
            }

            return;
          }

          var turret = boss.turrets[s.activeIndex];
          if (!turret) return; // 当前炮台开火

          this._tickFire(world, boss, turret, dt); // 累积持续时间


          s.burstElapsed += dt;
          var burstDuration = (_s$config$burstDurati = s.config.burstDuration) != null ? _s$config$burstDurati : 2;

          if (s.burstElapsed >= burstDuration) {
            this._advanceTurret(boss, s);
          }
        }

        _advanceTurret(boss, s) {
          var _s$config$burstGap;

          s.activeIndex++;

          if (s.activeIndex >= boss.turrets.length) {
            var _s$config$loop;

            if ((_s$config$loop = s.config.loop) != null ? _s$config$loop : true) {
              s.activeIndex = 0;
            } else {
              // 打完一圈，结束
              s.activeIndex = -1;
              s.burstElapsed = 0;
              s.gapTimer = 0;
              return;
            }
          } // 新炮台冷却归零，避免切过去立刻开火


          var next = boss.turrets[s.activeIndex];
          if (next) next.cooldownTimer = 0;
          s.gapTimer = (_s$config$burstGap = s.config.burstGap) != null ? _s$config$burstGap : 1;
          s.burstElapsed = 0;
        }

        _tickFire(world, boss, turret, dt) {
          var c = turret.config;
          turret.cooldownTimer += dt;
          var guard = 0;

          while (turret.cooldownTimer >= c.fireInterval && guard++ < 16) {
            turret.cooldownTimer -= c.fireInterval;

            this._fire(world, boss, turret);
          }
        }

        _fire(world, boss, turret) {
          var c = turret.config;
          var x = boss.x + c.offsetX;
          var y = boss.y + c.offsetY;

          if (c.spreadCount <= 1 || c.spreadAngle <= 0) {
            this._spawnBullet(world, x, y, turret.aimAngle, c);

            return;
          } // 扇形：以 aimAngle 为中心向左右散开


          var step = c.spreadAngle / (c.spreadCount - 1);
          var start = turret.aimAngle - c.spreadAngle / 2;

          for (var i = 0; i < c.spreadCount; i++) {
            this._spawnBullet(world, x, y, start + step * i, c);
          }
        }

        _spawnBullet(world, x, y, angleDeg, c) {
          var rad = angleDeg * Math.PI / 180;
          var b = new (_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet)();
          b.x = x;
          b.y = y;
          b.dirX = Math.cos(rad);
          b.dirY = Math.sin(rad);
          b.speed = c.bulletSpeed;
          b.damage = c.bulletDamage;
          b.isPlayerBullet = false;
          world.add(b);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=19a70e927922bdaa8da2dac3f5a94b827eac4f9a.js.map