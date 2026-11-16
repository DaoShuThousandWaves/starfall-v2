System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BATTLE_EVENT, Bullet, SpawnSystem, _crd;

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

  _export("SpawnSystem", void 0);

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

      _cclegacy._RF.push({}, "24e20/+5jJOSrRAldlSNYMu", "SpawnSystem", undefined);

      _export("SpawnSystem", SpawnSystem = class SpawnSystem {
        constructor() {
          // 事件回调没有 world 参数，必须存一份引用
          // 这是 System 持有 World 的合理例外
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
        } // SpawnSystem 是事件驱动的，不需要每帧遍历


        onTick(world, dt) {// 留空
        }

        _onWeaponFire(p, w) {
          var b = new (_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet)();
          b.x = p.x;
          b.y = p.y + 20; // 从飞机上方 20 像素处发射

          b.dirX = w.fireDirX;
          b.dirY = w.fireDirY;
          b.speed = w.bulletSpeed;
          b.damage = w.bulletDamage;
          b.isPlayerBullet = p.kind === 'player';

          this._world.add(b);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7bd923eb9569dc6a0f300a6a3b4fe59faaa5c622.js.map