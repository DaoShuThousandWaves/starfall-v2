System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BATTLE_EVENT, EXP_REWARD, expForLevel, ExpSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "../Entity/Plane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../BattleEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEXP_REWARD(extras) {
    _reporterNs.report("EXP_REWARD", "../Config/ExpConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfexpForLevel(extras) {
    _reporterNs.report("expForLevel", "../Config/ExpConfig", _context.meta, extras);
  }

  _export("ExpSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BATTLE_EVENT = _unresolved_2.BATTLE_EVENT;
    }, function (_unresolved_3) {
      EXP_REWARD = _unresolved_3.EXP_REWARD;
      expForLevel = _unresolved_3.expForLevel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "59bbbFmNqdDk4km0XqQr0OG", "ExpSystem", undefined);

      _export("ExpSystem", ExpSystem = class ExpSystem {
        constructor() {
          this._world = null;
        }

        onStart(world) {
          this._world = world;
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).ENEMY_KILLED, this._onEnemyKilled, this);
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_KILLED, this._onBossKilled, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).ENEMY_KILLED, this._onEnemyKilled, this);
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_KILLED, this._onBossKilled, this);
          this._world = null;
        }

        onTick(_world, _dt) {// 事件驱动，不需要每帧
        }

        _onEnemyKilled() {
          this._addExp((_crd && EXP_REWARD === void 0 ? (_reportPossibleCrUseOfEXP_REWARD({
            error: Error()
          }), EXP_REWARD) : EXP_REWARD).enemy);
        }

        _onBossKilled() {
          this._addExp((_crd && EXP_REWARD === void 0 ? (_reportPossibleCrUseOfEXP_REWARD({
            error: Error()
          }), EXP_REWARD) : EXP_REWARD).boss);
        }

        _addExp(amount) {
          const player = this._findPlayer();

          if (!player) return;
          player.exp += amount; // while：Boss 400 经验可能连升多级，每级发一次 LEVEL_UP

          let levelsGained = 0;

          while (player.exp >= player.expToNext) {
            player.exp -= player.expToNext;
            player.level++;
            player.expToNext = (_crd && expForLevel === void 0 ? (_reportPossibleCrUseOfexpForLevel({
              error: Error()
            }), expForLevel) : expForLevel)(player.level);
            levelsGained++;
          }

          if (levelsGained > 0) {
            console.log(`[ExpSystem] 升级到 Lv.${player.level}`);

            this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
              error: Error()
            }), BATTLE_EVENT) : BATTLE_EVENT).LEVEL_UP, player.level);
          } // 数据事实：经验变了。给经验条 UI 用


          this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).EXP_CHANGED, player.exp, player.expToNext, player.level);
        }

        _findPlayer() {
          for (const p of this._world.query('player')) return p;

          return null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eeec2337cc8eadc6247c47bc86de6ca50d66044e.js.map