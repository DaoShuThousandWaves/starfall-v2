System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, TurretAimSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerEntity(extras) {
    _reporterNs.report("PlayerEntity", "../Entity/PlayerEntity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretEntity(extras) {
    _reporterNs.report("TurretEntity", "../Entity/TurretEntity", _context.meta, extras);
  }

  _export("TurretAimSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8dad9jrwEBGsLKIkFkq3fpY", "TurretAimSystem", undefined);

      _export("TurretAimSystem", TurretAimSystem = class TurretAimSystem {
        onTick(world, dt) {
          for (var turret of world.query('turret')) {
            if (!turret.alive || turret.health.hp <= 0) continue;

            this._tickAim(world, turret, dt);
          }
        }

        _tickAim(world, turret, dt) {
          var c = turret.config;

          switch (c.aimMode) {
            case 'fixed':
              turret.aim.aimAngle = c.baseAngle;
              break;

            case 'target':
              this._aimAtPlayer(world, turret, dt);

              break;

            case 'spin':
              turret.aim.aimAngle = (turret.aim.aimAngle + c.aimSpeed * dt) % 360;
              break;

            case 'oscillate':
              turret.aim.oscPhase += c.aimSpeed * Math.PI / 180 * dt;
              turret.aim.aimAngle = c.baseAngle + Math.sin(turret.aim.oscPhase) * c.oscRange;
              break;
          }
        }

        _aimAtPlayer(world, turret, dt) {
          var player = this._findPlayer(world);

          if (!player) return;
          var c = turret.config;
          var targetAngle = Math.atan2(player.y - turret.y, player.x - turret.x) * 180 / Math.PI;
          var diff = targetAngle - turret.aim.aimAngle;
          diff = ((diff + 180) % 360 + 360) % 360 - 180;
          var maxStep = c.aimSpeed * dt;

          if (Math.abs(diff) <= maxStep) {
            turret.aim.aimAngle = targetAngle;
          } else {
            turret.aim.aimAngle += Math.sign(diff) * maxStep;
          }
        }

        _findPlayer(world) {
          for (var p of world.query('player')) return p;

          return null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07e8945035765f359e301440ecf4afbf36230a63.js.map