System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BATTLE_EVENT, BattleStateSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../BattleEvents", _context.meta, extras);
  }

  _export("BattleStateSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BATTLE_EVENT = _unresolved_2.BATTLE_EVENT;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5080b/nopFE7ZALKvmXCQU+", "BattleStateSystem", undefined);

      // 关卡通关（最高优先级）
      _export("BattleStateSystem", BattleStateSystem = class BattleStateSystem {
        constructor() {
          this._world = null;
          this._state = 'playing';
        }

        onStart(world) {
          this._world = world;
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PLAYER_DIED, this._onPlayerDied, this);
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).CARDS_DRAWN, this._onCardsDrawn, this);
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).LEVEL_CLEAR, this._onLevelClear, this);
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLE_REQUEST, this._onPauseToggle, this);
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).UPGRADE_FINISHED, this._onUpgradeFinished, this);
          world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).GAME_STATE_CHANGED, this._state);
        }

        onDestroy(world) {
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PLAYER_DIED, this._onPlayerDied, this);
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).CARDS_DRAWN, this._onCardsDrawn, this);
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).LEVEL_CLEAR, this._onLevelClear, this);
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PAUSE_TOGGLE_REQUEST, this._onPauseToggle, this);
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).UPGRADE_FINISHED, this._onUpgradeFinished, this);
          this._world = null;
        }

        onTick(world, dt) {}

        get state() {
          return this._state;
        }

        _changeState(newState) {
          if (this._state === newState) return;
          this._state = newState;

          this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).GAME_STATE_CHANGED, newState);
        }

        _onPlayerDied() {
          if (this._state === 'game_over' || this._state === 'level_clear') return;

          this._changeState('game_over');
        }

        _onLevelClear() {
          // 通关优先级最高，不管你是在选卡还是游玩，直接强制转为通关
          this._changeState('level_clear');
        }

        _onCardsDrawn() {
          if (this._state === 'game_over' || this._state === 'level_clear') return; // 兜底：即使WaveSystem信号迟到，这里也直接拦截

          var hasEnemies = this._world.hasAny('enemy') || this._world.hasAny('boss');

          if (!hasEnemies) return; // 不进入upgrading状态

          this._changeState('upgrading');
        }

        _onUpgradeFinished() {
          if (this._state === 'upgrading') {
            this._changeState('playing');
          }
        }

        _onPauseToggle() {
          if (this._state === 'playing') {
            this._changeState('paused');
          } else if (this._state === 'paused') {
            this._changeState('playing');
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ad60036b0ace7870370ddd6d0067ea07226fe908.js.map