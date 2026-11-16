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
          const r = Math.random();
          if (r < 0.6) return 'top';
          if (r < 0.8) return 'left';
          return 'right';
        }

        _spawnOneEnemy(world, side) {
          const plane = new (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane)('enemy');
          const halfW = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewW / 2;
          const halfH = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2;

          if (side === 'top') {
            plane.x = -halfW + Math.random() * (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).viewW;
            plane.y = halfH + 30;
            plane.moveDirX = 0;
            plane.moveDirY = -1;
            plane.movePattern = Math.random() < 0.5 ? 'straight' : 'sine';
          } else if (side === 'left') {
            plane.x = -halfW - 30;
            plane.y = -halfH * 0.6 + Math.random() * halfH * 0.6;
            plane.moveDirX = 1;
            plane.moveDirY = 0;
            plane.movePattern = 'straight';
          } else {
            plane.x = halfW + 30;
            plane.y = -halfH * 0.6 + Math.random() * halfH * 0.6;
            plane.moveDirX = -1;
            plane.moveDirY = 0;
            plane.movePattern = 'straight';
          }

          plane.originX = plane.x;
          plane.originY = plane.y;
          plane.hp = 30;
          plane.maxHp = 30;
          plane.moveSpeed = 100;
          plane.collisionRadius = 20;
          plane.weapons.push({
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
          world.add(plane);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=363afe252a9e6748287d78e9f4b686836e31b761.js.map