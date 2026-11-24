System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BATTLE_EVENT, DamageSystem, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../BattleEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../Entity/Bullet", _context.meta, extras);
  }

  _export("DamageSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BATTLE_EVENT = _unresolved_2.BATTLE_EVENT;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc21dq1RblArJo3iLE0qJe8", "DamageSystem", undefined);

      _export("DamageSystem", DamageSystem = class DamageSystem {
        constructor() {
          this._world = null;
        }

        onStart(world) {
          this._world = world;
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BULLET_HIT, this._onBulletHit, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BULLET_HIT, this._onBulletHit, this);
          this._world = null;
        }

        onTick(world, dt) {}

        _onBulletHit(bullet, target) {
          if (!target.alive) return;
          var dmg = bullet.damage;

          this._world.remove(bullet);

          var health = target.health;
          if (!health) return;
          if (health.invincibleTimer > 0) return;
          health.hp -= dmg;

          if (target.kind === 'boss') {
            this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
              error: Error()
            }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_HP_CHANGED, health.hp / health.maxHp);
          }

          if (target.kind === 'player') {
            this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
              error: Error()
            }), BATTLE_EVENT) : BATTLE_EVENT).PLAYER_HP_CHANGED, health.hp / health.maxHp);
          } // turret 目前没有 HP UI，不 emit


          if (health.hitInvincibleDuration > 0) {
            health.invincibleTimer = health.hitInvincibleDuration;
          }

          if (health.hp <= 0) {
            this._world.remove(target);

            switch (target.kind) {
              case 'enemy':
                this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                  error: Error()
                }), BATTLE_EVENT) : BATTLE_EVENT).ENEMY_KILLED, target);

                break;

              case 'boss':
                this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                  error: Error()
                }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_KILLED, target);

                break;

              case 'player':
                this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                  error: Error()
                }), BATTLE_EVENT) : BATTLE_EVENT).PLAYER_DIED);

                break;

              case 'turret':
                this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                  error: Error()
                }), BATTLE_EVENT) : BATTLE_EVENT).TURRET_KILLED, target);

                break;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b77d4a97c53be3d8d709134e853f8d936f0bcce5.js.map