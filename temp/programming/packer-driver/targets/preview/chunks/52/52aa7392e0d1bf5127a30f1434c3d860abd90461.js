System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, TurretAimSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "../Entity/Plane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurret(extras) {
    _reporterNs.report("Turret", "../Entity/Turret", _context.meta, extras);
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
        onTick(world, _dt) {
          for (var turret of world.query('turret')) {
            if (!turret.alive || turret.hp <= 0) continue;

            this._tickAim(world, turret, _dt);
          }
        }

        _tickAim(world, turret, dt) {
          var c = turret.config;

          switch (c.aimMode) {
            case 'fixed':
              turret.aimAngle = c.baseAngle;
              break;

            case 'target':
              this._aimAtPlayer(world, turret, dt);

              break;

            case 'spin':
              turret.aimAngle = (turret.aimAngle + c.aimSpeed * dt) % 360;
              break;

            case 'oscillate':
              turret.oscPhase += c.aimSpeed * Math.PI / 180 * dt;
              turret.aimAngle = c.baseAngle + Math.sin(turret.oscPhase) * c.oscRange;
              break;
          }
        }

        _aimAtPlayer(world, turret, dt) {
          var player = this._findPlayer(world);

          if (!player) return;
          var c = turret.config;
          var targetAngle = Math.atan2(player.y - turret.y, player.x - turret.x) * 180 / Math.PI;
          var diff = targetAngle - turret.aimAngle;
          diff = ((diff + 180) % 360 + 360) % 360 - 180;
          var maxStep = c.aimSpeed * dt;

          if (Math.abs(diff) <= maxStep) {
            turret.aimAngle = targetAngle;
          } else {
            turret.aimAngle += Math.sign(diff) * maxStep;
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
//# sourceMappingURL=52aa7392e0d1bf5127a30f1434c3d860abd90461.js.map