System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BATTLE_EVENT, Bullet, BulletSpawnSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "../Entity/Plane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../BattleEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponConfig(extras) {
    _reporterNs.report("WeaponConfig", "../Config/WeaponConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../Entity/Bullet", _context.meta, extras);
  }

  _export("BulletSpawnSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BATTLE_EVENT = _unresolved_2.BATTLE_EVENT;
    }, function (_unresolved_3) {
      Bullet = _unresolved_3.Bullet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "24e20/+5jJOSrRAldlSNYMu", "BulletSpawnSystem", undefined);

      _export("BulletSpawnSystem", BulletSpawnSystem = class BulletSpawnSystem {
        constructor() {
          this._world = null;
        }

        onStart(world) {
          this._world = world;
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).WEAPON_FIRE, this._onWeaponFire, this);
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BULLET_SPAWN_REQUEST, this._onSpawnRequest, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).WEAPON_FIRE, this._onWeaponFire, this);
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BULLET_SPAWN_REQUEST, this._onSpawnRequest, this);
          this._world = null;
        } // 事件驱动的，不需要每帧遍历


        onTick(world, dt) {// 留空
        }

        _onWeaponFire(p, w) {
          this.spawn({
            x: p.x + w.fireDirX * 20,
            y: p.y + w.fireDirY * 20,
            dirX: w.fireDirX,
            dirY: w.fireDirY,
            speed: w.bulletSpeed,
            damage: w.bulletDamage,
            isPlayerBullet: p.kind === 'player'
          });
        }

        _onSpawnRequest(params) {
          this.spawn(params);
        } // 唯一创建出口


        spawn(params) {
          var b = new (_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet)();
          b.x = params.x;
          b.y = params.y;
          b.dirX = params.dirX;
          b.dirY = params.dirY;
          b.speed = params.speed;
          b.damage = params.damage;
          b.isPlayerBullet = params.isPlayerBullet;

          this._world.add(b);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d877227a79fedddc1a67e100dc4baa3a8d3ea53f.js.map