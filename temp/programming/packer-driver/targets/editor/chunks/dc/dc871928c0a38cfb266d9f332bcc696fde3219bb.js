System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BATTLE_EVENT, CARD_POOL, CardSystem, _crd;

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

  function _reportPossibleCrUseOfCARD_POOL(extras) {
    _reporterNs.report("CARD_POOL", "../Config/CardConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardConfigData(extras) {
    _reporterNs.report("CardConfigData", "../Config/CardConfig", _context.meta, extras);
  }

  _export("CardSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BATTLE_EVENT = _unresolved_2.BATTLE_EVENT;
    }, function (_unresolved_3) {
      CARD_POOL = _unresolved_3.CARD_POOL;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bfa8a3VOAFHO5G1KsUQf7sk", "CardSystem", undefined);

      _export("CardSystem", CardSystem = class CardSystem {
        constructor() {
          this._world = null;
        }

        onStart(world) {
          this._world = world;
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).LEVEL_UP, this._onLevelUp, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).LEVEL_UP, this._onLevelUp, this);
          this._world = null;
        }

        onTick(_world, _dt) {// 事件驱动
        }

        _onLevelUp(_newLevel) {
          const player = this._findPlayer();

          if (!player) return;

          const cards = this._drawCards(player, 3);

          if (cards.length === 0) {
            console.log('[CardSystem] 卡池空，跳过选卡');
            return;
          }

          console.log(`[CardSystem] 抽到 ${cards.length} 张: ${cards.map(c => c.name).join(', ')}`);

          this._world.bus.emit((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).CARDS_DRAWN, cards);
        }

        _drawCards(player, count) {
          // 过滤：已叠满的卡不再出现
          const available = (_crd && CARD_POOL === void 0 ? (_reportPossibleCrUseOfCARD_POOL({
            error: Error()
          }), CARD_POOL) : CARD_POOL).filter(card => {
            var _player$cardStacks$ge, _card$maxStacks;

            const stacks = (_player$cardStacks$ge = player.cardStacks.get(card.id)) != null ? _player$cardStacks$ge : 0;
            const max = (_card$maxStacks = card.maxStacks) != null ? _card$maxStacks : Infinity;
            return stacks < max;
          }); // 洗牌（Fisher-Yates），取前 count 张

          const pool = available.slice();

          for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
          }

          return pool.slice(0, count);
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
//# sourceMappingURL=dc871928c0a38cfb266d9f332bcc696fde3219bb.js.map