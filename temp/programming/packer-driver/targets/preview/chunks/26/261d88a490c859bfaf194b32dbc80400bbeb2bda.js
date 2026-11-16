System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BATTLE_EVENT, advanceCooldown, FireSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../BattleEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyEntity(extras) {
    _reporterNs.report("EnemyEntity", "../Entity/EnemyEntity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerEntity(extras) {
    _reporterNs.report("PlayerEntity", "../Entity/PlayerEntity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretEntity(extras) {
    _reporterNs.report("TurretEntity", "../Entity/TurretEntity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletFireRequest(extras) {
    _reporterNs.report("BulletFireRequest", "./BulletSpawnSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfadvanceCooldown(extras) {
    _reporterNs.report("advanceCooldown", "./FireCooldown", _context.meta, extras);
  }

  _export("FireSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BATTLE_EVENT = _unresolved_2.BATTLE_EVENT;
    }, function (_unresolved_3) {
      advanceCooldown = _unresolved_3.advanceCooldown;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c048ddk1MpD5IUuhAScj6Mu", "FireSystem", undefined);

      _export("FireSystem", FireSystem = class FireSystem {
        onTick(world, dt) {
          for (var p of world.query('player')) this._tickPlayer(world, p, dt);

          for (var _p of world.query('enemy')) this._tickEnemy(world, _p, dt);

          for (var t of world.query('turret')) this._tickTurret(world, t, dt);
        }

        _tickPlayer(world, p, dt) {
          for (var w of p.weapon.weapons) {
            if (!w.enabled) continue;
            var n = (_crd && advanceCooldown === void 0 ? (_reportPossibleCrUseOfadvanceCooldown({
              error: Error()
            }), advanceCooldown) : advanceCooldown)(w, w.config.fireInterval, dt);

            for (var i = 0; i < n; i++) {
              var req = {
                x: p.x + w.config.fireDirX * 20,
                y: p.y + w.config.fireDirY * 20,
                dirX: w.config.fireDirX,
                dirY: w.config.fireDirY,
                bulletSpeed: w.config.bulletSpeed,
                bulletDamage: w.config.bulletDamage,
                isPlayerBullet: p.kind === 'player',
                spreadCount: w.config.spreadCount,
                spreadAngle: w.config.spreadAngle
              };
              world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                error: Error()
              }), BATTLE_EVENT) : BATTLE_EVENT).WEAPON_FIRE, req);
            }
          }
        }

        _tickEnemy(world, p, dt) {
          for (var w of p.weapon.weapons) {
            if (!w.enabled) continue;
            var n = (_crd && advanceCooldown === void 0 ? (_reportPossibleCrUseOfadvanceCooldown({
              error: Error()
            }), advanceCooldown) : advanceCooldown)(w, w.config.fireInterval, dt);

            for (var i = 0; i < n; i++) {
              var req = {
                x: p.x + w.config.fireDirX * 20,
                y: p.y + w.config.fireDirY * 20,
                dirX: w.config.fireDirX,
                dirY: w.config.fireDirY,
                bulletSpeed: w.config.bulletSpeed,
                bulletDamage: w.config.bulletDamage,
                isPlayerBullet: false,
                spreadCount: w.config.spreadCount,
                spreadAngle: w.config.spreadAngle
              };
              world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                error: Error()
              }), BATTLE_EVENT) : BATTLE_EVENT).WEAPON_FIRE, req);
            }
          }
        }

        _tickTurret(world, t, dt) {
          if (!t.aim.active || !t.alive || t.health.hp <= 0) return;
          var c = t.config;
          var n = (_crd && advanceCooldown === void 0 ? (_reportPossibleCrUseOfadvanceCooldown({
            error: Error()
          }), advanceCooldown) : advanceCooldown)(t.aim, c.fireInterval, dt);

          for (var i = 0; i < n; i++) {
            var rad = t.aim.aimAngle * Math.PI / 180;
            var req = {
              x: t.x,
              y: t.y,
              dirX: Math.cos(rad),
              dirY: Math.sin(rad),
              bulletSpeed: c.bulletSpeed,
              bulletDamage: c.bulletDamage,
              isPlayerBullet: false,
              spreadCount: c.spreadCount,
              spreadAngle: c.spreadAngle
            };
            world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
              error: Error()
            }), BATTLE_EVENT) : BATTLE_EVENT).WEAPON_FIRE, req);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=261d88a490c859bfaf194b32dbc80400bbeb2bda.js.map