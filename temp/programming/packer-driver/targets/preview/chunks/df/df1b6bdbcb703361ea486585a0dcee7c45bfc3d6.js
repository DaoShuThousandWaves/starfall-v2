System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BATTLE_EVENT, FireSystem, _crd;

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

  _export("FireSystem", void 0);

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

      _cclegacy._RF.push({}, "c048ddk1MpD5IUuhAScj6Mu", "FireSystem", undefined);

      _export("FireSystem", FireSystem = class FireSystem {
        onTick(world, dt) {
          for (var p of world.query('player')) {
            this._tickWeapons(world, p, dt);
          }

          for (var _p of world.query('enemy')) {
            this._tickWeapons(world, _p, dt);
          }
        }

        _tickWeapons(world, p, dt) {
          for (var w of p.weapons) {
            if (!w.enabled) continue;
            w.cooldownTimer += dt; // while + guard：一帧内可能多次开火（高射速武器）

            var guard = 0;

            while (w.cooldownTimer >= w.config.fireInterval && guard++ < 16) {
              w.cooldownTimer -= w.config.fireInterval;
              world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                error: Error()
              }), BATTLE_EVENT) : BATTLE_EVENT).WEAPON_FIRE, p, w);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=df1b6bdbcb703361ea486585a0dcee7c45bfc3d6.js.map