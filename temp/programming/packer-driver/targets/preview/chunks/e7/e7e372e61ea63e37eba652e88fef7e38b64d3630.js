System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameData, Plane, EnemySpawnSystem, _crd;

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../../Core/Data/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "../Entity/Plane", _context.meta, extras);
  }

  _export("EnemySpawnSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameData = _unresolved_2.GameData;
    }, function (_unresolved_3) {
      Plane = _unresolved_3.Plane;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eea5at/8HhDyJM+XzXi2a3C", "EnemySpawnSystem", undefined);

      _export("EnemySpawnSystem", EnemySpawnSystem = class EnemySpawnSystem {
        constructor() {
          this._spawnTimer = 0;
          this._spawnInterval = 1.5;
        }

        // 每 1.5 秒生成一个敌机
        onTick(world, dt) {
          this._spawnTimer += dt;

          while (this._spawnTimer >= this._spawnInterval) {
            this._spawnTimer -= this._spawnInterval;

            this._spawnOneEnemy(world, this._pickSide());
          }
        }
        /** 60% 从顶部，20% 从左，20% 从右 */


        _pickSide() {
          var r = Math.random();
          if (r < 0.6) return 'top';
          if (r < 0.8) return 'left';
          return 'right';
        }

        _spawnOneEnemy(world, side) {
          var p = new (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane)('enemy');
          var halfW = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewW / 2;
          var halfH = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2;

          if (side === 'top') {
            p.x = -halfW + Math.random() * (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).viewW;
            p.y = halfH + 30;
            p.moveDirX = 0;
            p.moveDirY = -1;
            p.movePattern = Math.random() < 0.5 ? 'straight' : 'sine';
          } else if (side === 'left') {
            p.x = -halfW - 30;
            p.y = -halfH * 0.6 + Math.random() * halfH * 0.6;
            p.moveDirX = 1;
            p.moveDirY = 0;
            p.movePattern = 'straight';
          } else {
            p.x = halfW + 30;
            p.y = -halfH * 0.6 + Math.random() * halfH * 0.6;
            p.moveDirX = -1;
            p.moveDirY = 0;
            p.movePattern = 'straight';
          }

          p.baseX = p.x;
          p.baseY = p.y;
          p.hp = 30;
          p.maxHp = 30;
          p.moveSpeed = 100;
          p.collisionRadius = 20;
          p.weapons.push({
            fireInterval: 2.0,
            cooldownTimer: Math.random() * 2.0,
            // 随机初始冷却，避免所有敌机同时开火
            bulletType: 'yellow',
            bulletSpeed: 200,
            bulletDamage: 8,
            fireDirX: 0,
            fireDirY: -1,
            // 向下
            enabled: true
          });
          world.add(p);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e7e372e61ea63e37eba652e88fef7e38b64d3630.js.map