System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BATTLE_EVENT, BattleViewModel, _crd;

  function _reportPossibleCrUseOfBus(extras) {
    _reporterNs.report("Bus", "../../Engine/Bus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../System/BattleStateSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardConfigData(extras) {
    _reporterNs.report("CardConfigData", "../Config/CardConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../BattleEvents", _context.meta, extras);
  }

  _export("BattleViewModel", void 0);

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

      _cclegacy._RF.push({}, "e96e3dfvzdDp5xlD6hlFPVu", "BattleViewModel", undefined); // Battle/ViewModel/BattleViewModel.ts


      _export("BattleViewModel", BattleViewModel = class BattleViewModel {
        // 对外暴露的只读UI意图
        get shouldShowUpgradePanel() {
          // 通关优先级绝对高于升级
          if (this._levelCleared || this._gameState === 'level_clear' || this._gameState === 'game_over') {
            return false;
          }

          return this._gameState === 'upgrading' && this._cards.length > 0;
        }

        get shouldShowVictoryPanel() {
          return this._levelCleared || this._gameState === 'level_clear';
        }

        get currentCards() {
          return this._cards;
        }

        constructor(_bus) {
          // 内部缓存
          this._cards = [];
          this._gameState = 'playing';
          this._levelCleared = false;
          this._bus = _bus;

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).CARDS_DRAWN, this._onCardsDrawn, this);

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).GAME_STATE_CHANGED, this._onGameStateChanged, this);

          this._bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).LEVEL_CLEAR, this._onLevelClear, this);
        }

        onDestroy() {
          this._bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).CARDS_DRAWN, this._onCardsDrawn, this);

          this._bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).GAME_STATE_CHANGED, this._onGameStateChanged, this);

          this._bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).LEVEL_CLEAR, this._onLevelClear, this);
        }

        _onCardsDrawn(cards) {
          this._cards = cards;

          this._notifyUI();
        }

        _onGameStateChanged(state) {
          this._gameState = state;

          this._notifyUI();
        }

        _onLevelClear() {
          this._levelCleared = true;
          this._cards = []; // 清空待选卡，防止残留
        }

        _notifyUI() {
          this._bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).UI_UPGRADE_PANEL_STATE_CHANGED, this.shouldShowUpgradePanel);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1010890eacb9aea5d9acc09a7104a38b38d8463e.js.map