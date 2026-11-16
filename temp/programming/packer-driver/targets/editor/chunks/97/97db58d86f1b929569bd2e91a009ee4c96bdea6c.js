System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, InvincibleSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "../Entity/Plane", _context.meta, extras);
  }

  _export("InvincibleSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71168/Xb8FBdaXf1uPZcr/W", "InvincibleSystem", undefined);

      _export("InvincibleSystem", InvincibleSystem = class InvincibleSystem {
        onTick(world, dt) {
          this._tickKind(world, 'player', dt);

          this._tickKind(world, 'enemy', dt);

          this._tickKind(world, 'boss', dt);

          this._tickKind(world, 'turret', dt);
        }

        _tickKind(world, kind, dt) {
          for (const p of world.query(kind)) {
            if (p.invincibleTimer <= 0) continue;
            p.invincibleTimer -= dt;
            if (p.invincibleTimer < 0) p.invincibleTimer = 0;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=97db58d86f1b929569bd2e91a009ee4c96bdea6c.js.map