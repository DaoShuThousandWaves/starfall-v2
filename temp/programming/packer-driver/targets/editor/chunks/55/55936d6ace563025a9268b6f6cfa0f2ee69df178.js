System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameData, BATTLE_EVENT, BOSS_CONFIG, BossEntity, EnemyEntity, EnemySpawnSystem, _crd;

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../../Core/Data/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
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

  function _reportPossibleCrUseOfBossEntity(extras) {
    _reporterNs.report("BossEntity", "../Entity/BossEntity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyEntity(extras) {
    _reporterNs.report("EnemyEntity", "../Entity/EnemyEntity", _context.meta, extras);
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
      BATTLE_EVENT = _unresolved_3.BATTLE_EVENT;
    }, function (_unresolved_4) {
      BOSS_CONFIG = _unresolved_4.BOSS_CONFIG;
    }, function (_unresolved_5) {
      BossEntity = _unresolved_5.BossEntity;
    }, function (_unresolved_6) {
      EnemyEntity = _unresolved_6.EnemyEntity;
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
          const e = this._world.acquire('enemy', () => new (_crd && EnemyEntity === void 0 ? (_reportPossibleCrUseOfEnemyEntity({
            error: Error()
          }), EnemyEntity) : EnemyEntity)());

          this._resetEnemy(e);

          this._setSpawnPosition(e, spawnSide);

          e.move.originX = e.x;
          e.move.originY = e.y;

          this._configureEnemy(e, enemyType, spawnSide);

          this._world.add(e);
        }

        _resetEnemy(e) {
          e.alive = true; // health

          e.health.hp = 100;
          e.health.maxHp = 100;
          e.health.invincibleTimer = 0;
          e.health.hitInvincibleDuration = 0; // move

          e.move.pattern = 'none';
          e.move.dirX = 0;
          e.move.dirY = 0;
          e.move.speed = 100;
          e.move.originX = 0;
          e.move.originY = 0;
          e.move.phase = 0;
          e.move.frequency = 3;
          e.move.amplitude = 80; // weapon：清空，_configureEnemy 会重新 push

          e.weapon.weapons.length = 0;
        }

        _setSpawnPosition(e, side) {
          const halfW = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewW / 2;
          const halfH = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2;

          if (side === 'left') {
            e.x = -halfW - 30;
            e.y = -halfH * 0.6 + Math.random() * halfH * 0.6;
            e.move.dirX = 1;
            e.move.dirY = 0;
          } else if (side === 'right') {
            e.x = halfW + 30;
            e.y = -halfH * 0.6 + Math.random() * halfH * 0.6;
            e.move.dirX = -1;
            e.move.dirY = 0;
          } else {
            e.x = -halfW + Math.random() * (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).viewW;
            e.y = halfH + 30;
            e.move.dirX = 0;
            e.move.dirY = -1;
          }
        }

        _configureEnemy(e, type, side) {
          switch (type) {
            case 'sine':
              e.health.hp = 25;
              e.health.maxHp = 25;
              e.move.speed = 120;
              e.move.pattern = 'sine';
              e.move.frequency = 3;
              e.move.amplitude = 80;
              break;

            case 'basic':
            default:
              e.health.hp = 30;
              e.health.maxHp = 30;
              e.move.speed = 100;
              e.move.pattern = side === 'top' && Math.random() < 0.5 ? 'sine' : 'straight';
              break;
          }

          e.weapon.weapons.push({
            config: {
              fireInterval: 2.0,
              bulletType: 'yellow',
              bulletSpeed: 200,
              bulletDamage: 8,
              fireDirX: 0,
              fireDirY: -1
            },
            cooldownTimer: Math.random() * 2.0,
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

          const boss = new (_crd && BossEntity === void 0 ? (_reportPossibleCrUseOfBossEntity({
            error: Error()
          }), BossEntity) : BossEntity)(config);
          boss.x = 0;
          boss.y = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2 - 300;

          this._world.add(boss);

          this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_SPAWNED, config.name);

          this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).TURRET_REBUILD_REQUEST, boss, 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=55936d6ace563025a9268b6f6cfa0f2ee69df178.js.map