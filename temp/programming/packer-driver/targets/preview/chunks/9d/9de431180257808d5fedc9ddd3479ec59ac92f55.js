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

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../Entity/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponData(extras) {
    _reporterNs.report("WeaponData", "../Entity/WeaponData", _context.meta, extras);
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
        }

        onDestroy(world) {
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).WEAPON_FIRE, this._onWeaponFire, this);
          this._world = null;
        } // 事件驱动的，不需要每帧遍历


        onTick(world, dt) {// 留空
        }

        _onWeaponFire(p, w) {
          var b = new (_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet)();
          b.x = p.x + w.config.fireDirX * 20;
          b.y = p.y + w.config.fireDirY * 20;
          b.dirX = w.config.fireDirX;
          b.dirY = w.config.fireDirY;
          b.speed = w.config.bulletSpeed;
          b.damage = w.config.bulletDamage;
          b.isPlayerBullet = p.kind === 'player';

          this._world.add(b);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9de431180257808d5fedc9ddd3479ec59ac92f55.js.map