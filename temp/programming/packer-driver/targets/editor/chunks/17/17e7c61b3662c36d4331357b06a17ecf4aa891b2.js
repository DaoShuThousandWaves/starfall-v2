System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MovementSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../Entity/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyEntity(extras) {
    _reporterNs.report("EnemyEntity", "../Entity/EnemyEntity", _context.meta, extras);
  }

  _export("MovementSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99150NU59tFWrVm2MnedgsG", "MovementSystem", undefined);

      _export("MovementSystem", MovementSystem = class MovementSystem {
        onTick(world, dt) {
          this._tickBullets(world, dt);

          this._tickEnemies(world, dt);
        }

        _tickBullets(world, dt) {
          for (const b of world.query('bullet')) {
            b.x += b.dirX * b.speed * dt;
            b.y += b.dirY * b.speed * dt;
          }
        }

        _tickEnemies(world, dt) {
          for (const p of world.query('enemy')) {
            switch (p.move.pattern) {
              case 'straight':
                this._moveStraight(p, dt);

                break;

              case 'sine':
                this._moveSine(p, dt);

                break;

              case 'none':
              default:
                // 不动
                break;
            }
          }
        }

        _moveStraight(p, dt) {
          p.x += p.move.dirX * p.move.speed * dt;
          p.y += p.move.dirY * p.move.speed * dt;
        }

        _moveSine(p, dt) {
          p.y -= p.move.speed * dt;
          p.move.phase += p.move.frequency * dt;
          p.x = p.move.originX + Math.sin(p.move.phase) * p.move.amplitude;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=17e7c61b3662c36d4331357b06a17ecf4aa891b2.js.map