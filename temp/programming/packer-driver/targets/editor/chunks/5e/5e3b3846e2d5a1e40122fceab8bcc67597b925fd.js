System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameData, Plane, Boss, BATTLE_EVENT, BOSS_CONFIG, EmitterRuntime, EnemySpawnSystem, _crd;

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

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "../Entity/Boss", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../BattleEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBOSS_CONFIG(extras) {
    _reporterNs.report("BOSS_CONFIG", "../Config/BossConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyType(extras) {
    _reporterNs.report("EnemyType", "../Config/LevelConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpawnSide(extras) {
    _reporterNs.report("SpawnSide", "../Config/LevelConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEmitterRuntime(extras) {
    _reporterNs.report("EmitterRuntime", "../Entity/EmitterRuntime", _context.meta, extras);
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
    }, function (_unresolved_4) {
      Boss = _unresolved_4.Boss;
    }, function (_unresolved_5) {
      BATTLE_EVENT = _unresolved_5.BATTLE_EVENT;
    }, function (_unresolved_6) {
      BOSS_CONFIG = _unresolved_6.BOSS_CONFIG;
    }, function (_unresolved_7) {
      EmitterRuntime = _unresolved_7.EmitterRuntime;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eea5at/8HhDyJM+XzXi2a3C", "EnemySpawnSystem", undefined);

      _export("EnemySpawnSystem", EnemySpawnSystem = class EnemySpawnSystem {
        constructor() {
          this._world = null;
        }

        onStart(world) {
          this._world = world;
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).ENEMY_SPAWN_REQUEST, this._onSpawnEnemy, this);
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_SPAWN_REQUEST, this._onSpawnBoss, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).ENEMY_SPAWN_REQUEST, this._onSpawnEnemy, this);
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_SPAWN_REQUEST, this._onSpawnBoss, this);
          this._world = null;
        }

        onTick(_world, _dt) {// 事件驱动，无需每帧
        }

        _onSpawnEnemy(enemyType, spawnSide) {
          const plane = new (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane)('enemy');

          this._setSpawnPosition(plane, spawnSide);

          plane.originX = plane.x;
          plane.originY = plane.y;
          plane.collisionRadius = 20;

          this._configureEnemy(plane, enemyType, spawnSide);

          this._world.add(plane);
        }

        _setSpawnPosition(plane, side) {
          const halfW = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewW / 2;
          const halfH = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2;

          if (side === 'left') {
            plane.x = -halfW - 30;
            plane.y = -halfH * 0.6 + Math.random() * halfH * 0.6;
            plane.moveDirX = 1;
            plane.moveDirY = 0;
          } else if (side === 'right') {
            plane.x = halfW + 30;
            plane.y = -halfH * 0.6 + Math.random() * halfH * 0.6;
            plane.moveDirX = -1;
            plane.moveDirY = 0;
          } else {
            plane.x = -halfW + Math.random() * (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).viewW;
            plane.y = halfH + 30;
            plane.moveDirX = 0;
            plane.moveDirY = -1;
          }
        }

        _configureEnemy(plane, type, side) {
          switch (type) {
            case 'sine':
              plane.hp = 25;
              plane.maxHp = 25;
              plane.moveSpeed = 120;
              plane.movePattern = 'sine';
              plane.moveFrequency = 3;
              plane.moveAmplitude = 80;
              break;

            case 'basic':
            default:
              plane.hp = 30;
              plane.maxHp = 30;
              plane.moveSpeed = 100;
              plane.movePattern = side === 'top' && Math.random() < 0.5 ? 'sine' : 'straight';
              break;
          }

          const rt = new (_crd && EmitterRuntime === void 0 ? (_reportPossibleCrUseOfEmitterRuntime({
            error: Error()
          }), EmitterRuntime) : EmitterRuntime)();
          rt.cooldownTimer = Math.random() * 2.0;
          plane.weapons.push({
            config: {
              fireInterval: 2.0,
              bulletType: 'yellow',
              bulletSpeed: 200,
              bulletDamage: 8,
              fireDirX: 0,
              fireDirY: -1
            },
            runtime: rt,
            enabled: true
          });
        }

        _onSpawnBoss(bossId) {
          const config = (_crd && BOSS_CONFIG === void 0 ? (_reportPossibleCrUseOfBOSS_CONFIG({
            error: Error()
          }), BOSS_CONFIG) : BOSS_CONFIG)[bossId];

          if (!config) {
            console.warn(`[EnemySpawnSystem] 未知 Boss: ${bossId}`);
            return;
          }

          const boss = new (_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
            error: Error()
          }), Boss) : Boss)(config);
          boss.x = 0;
          boss.y = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2 - 300;

          this._world.add(boss);

          this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_SPAWNED, config.name);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5e3b3846e2d5a1e40122fceab8bcc67597b925fd.js.map