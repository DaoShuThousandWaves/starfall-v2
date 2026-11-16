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
            switch (p.move.movePattern) {
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
          p.x += p.moveDirX * p.moveSpeed * dt;
          p.y += p.moveDirY * p.moveSpeed * dt;
        }

        _moveSine(p, dt) {
          p.y -= p.moveSpeed * dt;
          p.movePhase += p.moveFrequency * dt; // 摆动频率

          p.x = p.originX + Math.sin(p.movePhase) * p.moveAmplitude; // 摆动幅度 80 像素
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a657896d46fbacc931744ade9d885e20bcafe043.js.map