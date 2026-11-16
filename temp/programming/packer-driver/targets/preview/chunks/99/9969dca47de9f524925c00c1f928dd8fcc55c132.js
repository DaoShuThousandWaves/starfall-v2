System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, InvincibleSystem, _crd;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../../Engine/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
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
          for (var p of world.query(kind)) {
            var h = p.health;
            if (!h || h.invincibleTimer <= 0) continue;
            h.invincibleTimer -= dt;
            if (h.invincibleTimer < 0) h.invincibleTimer = 0;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9969dca47de9f524925c00c1f928dd8fcc55c132.js.map