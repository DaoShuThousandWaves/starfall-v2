System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BATTLE_EVENT, Bullet, BulletSpawnSystem, _crd;

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
          }), BATTLE_EVENT) : BATTLE_EVENT).WEAPON_FIRE, this._onFire, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).WEAPON_FIRE, this._onFire, this);
          this._world = null;
        } // 事件驱动的，不需要每帧遍历


        onTick(world, dt) {// 留空
        }

        _onFire(req) {
          var _req$spreadCount, _req$spreadAngle;

          var count = (_req$spreadCount = req.spreadCount) != null ? _req$spreadCount : 1;
          var spreadDeg = (_req$spreadAngle = req.spreadAngle) != null ? _req$spreadAngle : 0;

          if (count <= 1 || spreadDeg <= 0) {
            this._spawnOne(req.x, req.y, req.dirX, req.dirY, req);

            return;
          }

          var baseRad = Math.atan2(req.dirY, req.dirX);
          var totalRad = spreadDeg * Math.PI / 180;
          var step = totalRad / (count - 1);
          var start = baseRad - totalRad / 2;

          for (var i = 0; i < count; i++) {
            var a = start + step * i;

            this._spawnOne(req.x, req.y, Math.cos(a), Math.sin(a), req);
          }
        }

        _spawnOne(x, y, dirX, dirY, req) {
          var b = new (_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet)();
          b.x = x;
          b.y = y;
          b.dirX = dirX;
          b.dirY = dirY;
          b.speed = req.bulletSpeed;
          b.damage = req.bulletDamage;
          b.isPlayerBullet = req.isPlayerBullet;

          this._world.add(b);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fad888ccced66c5373e6c354f16d5b0e57913dcf.js.map