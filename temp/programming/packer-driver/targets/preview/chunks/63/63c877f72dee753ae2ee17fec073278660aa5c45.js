System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BATTLE_EVENT, LEVELS, WaveSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../BattleEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLEVELS(extras) {
    _reporterNs.report("LEVELS", "../Config/LevelConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelConfigData(extras) {
    _reporterNs.report("LevelConfigData", "../Config/LevelConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyGroupConfig(extras) {
    _reporterNs.report("EnemyGroupConfig", "../Config/LevelConfig", _context.meta, extras);
  }

  _export("WaveSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BATTLE_EVENT = _unresolved_2.BATTLE_EVENT;
    }, function (_unresolved_3) {
      LEVELS = _unresolved_3.LEVELS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "348e3crE3JJfKxMgjOUhJND", "WaveSystem", undefined);

      _export("WaveSystem", WaveSystem = class WaveSystem {
        constructor() {
          this._world = null;
          this._level = null;
          this._state = 'idle';
          this._levelTime = 0;
          this._runningWaves = [];
        }

        onStart(world) {
          this._world = world;
          this._level = (_crd && LEVELS === void 0 ? (_reportPossibleCrUseOfLEVELS({
            error: Error()
          }), LEVELS) : LEVELS)['level_1'];
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).ENEMY_KILLED, this._checkClear, this);
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_KILLED, this._checkClear, this);
          this.begin();
        }

        onDestroy(world) {
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).ENEMY_KILLED, this._checkClear, this);
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_KILLED, this._checkClear, this);
          this._world = null;
        }

        begin() {
          if (this._state !== 'idle') return;

          if (!this._level || this._level.waves.length === 0) {
            console.warn('[WaveSystem] 关卡没有波次');
            return;
          }

          this._levelTime = 0;
          this._runningWaves = [];
          this._state = 'running';

          for (var wave of this._level.waves) {
            var _wave$boss$bossId, _wave$boss, _wave$boss$delay, _wave$boss2;

            this._runningWaves.push({
              startTime: wave.startTime,
              bossId: (_wave$boss$bossId = (_wave$boss = wave.boss) == null ? void 0 : _wave$boss.bossId) != null ? _wave$boss$bossId : null,
              bossDelay: (_wave$boss$delay = (_wave$boss2 = wave.boss) == null ? void 0 : _wave$boss2.delay) != null ? _wave$boss$delay : 0,
              bossSpawned: false,
              groups: wave.enemyGroups.map(cfg => ({
                config: cfg,
                remain: cfg.count,
                timer: cfg.delay,
                started: cfg.delay <= 0
              })),
              started: false
            });
          }

          console.log("[WaveSystem] \u5173\u5361 " + this._level.name + " \u5F00\u59CB");
        }

        onTick(_world, dt) {
          if (this._state !== 'running') return;
          this._levelTime += dt;

          for (var wave of this._runningWaves) {
            if (!wave.started) {
              if (this._levelTime >= wave.startTime) {
                wave.started = true;
                console.log("[WaveSystem] \u7B2C " + (this._runningWaves.indexOf(wave) + 1) + " \u6CE2\u5F00\u59CB");
              } else {
                continue;
              }
            }

            this._tickWave(wave, dt);
          }
        }

        _tickWave(wave, dt) {
          for (var i = wave.groups.length - 1; i >= 0; i--) {
            var g = wave.groups[i];

            if (!g.started) {
              g.timer -= dt;
              if (g.timer > 0) continue; // 还没到时间，跳过

              g.started = true;
              g.timer = 0; // 保证归零
            } else {
              g.timer -= dt;
            }

            var guard = 0;

            while (g.timer <= 0 && g.remain > 0 && guard++ < 16) {
              var _g$config$spawnSide;

              this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                error: Error()
              }), BATTLE_EVENT) : BATTLE_EVENT).ENEMY_SPAWN_REQUEST, g.config.enemyType, (_g$config$spawnSide = g.config.spawnSide) != null ? _g$config$spawnSide : 'top');

              g.remain--;

              if (g.config.spawnInterval <= 0) {
                while (g.remain > 0) {
                  var _g$config$spawnSide2;

                  this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                    error: Error()
                  }), BATTLE_EVENT) : BATTLE_EVENT).ENEMY_SPAWN_REQUEST, g.config.enemyType, (_g$config$spawnSide2 = g.config.spawnSide) != null ? _g$config$spawnSide2 : 'top');

                  g.remain--;
                }

                g.timer = Infinity;
              } else {
                g.timer += g.config.spawnInterval;
              }
            }

            if (g.remain <= 0) wave.groups.splice(i, 1);
          }

          if (wave.bossId && !wave.bossSpawned) {
            wave.bossDelay -= dt;

            if (wave.bossDelay <= 0) {
              this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
                error: Error()
              }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_SPAWN_REQUEST, wave.bossId);

              wave.bossSpawned = true;
            }
          }
        }

        _checkClear() {
          if (this._state !== 'running') return;

          for (var w of this._runningWaves) {
            if (!w.started) return;
            if (w.groups.length > 0) return;
            if (w.bossId && !w.bossSpawned) return;
          }

          var hasEnemies = this._world.hasAny('enemy') || this._world.hasAny('boss');

          if (!hasEnemies) {
            this._state = 'finished'; // 在ExpSystem给经验之前，先发出通关信号

            this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
              error: Error()
            }), BATTLE_EVENT) : BATTLE_EVENT).LEVEL_CLEAR);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=63c877f72dee753ae2ee17fec073278660aa5c45.js.map