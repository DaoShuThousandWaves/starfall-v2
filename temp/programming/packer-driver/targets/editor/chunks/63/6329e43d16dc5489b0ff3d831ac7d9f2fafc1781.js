System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BATTLE_EVENT, CardApplySystem, _crd;

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

  function _reportPossibleCrUseOfCardConfigData(extras) {
    _reporterNs.report("CardConfigData", "../Config/CardConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardEffectType(extras) {
    _reporterNs.report("CardEffectType", "../Config/CardConfig", _context.meta, extras);
  }

  _export("CardApplySystem", void 0);

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

      _cclegacy._RF.push({}, "243fe3LRWFDWqIY1hF4Qiq1", "CardApplySystem", undefined);

      _export("CardApplySystem", CardApplySystem = class CardApplySystem {
        constructor() {
          this._world = null;
        }

        onStart(world) {
          this._world = world;
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).CARD_SELECTED, this._onCardSelected, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).CARD_SELECTED, this._onCardSelected, this);
          this._world = null;
        }

        onTick(_world, _dt) {// 事件驱动
        }

        _onCardSelected(card) {
          var _player$cardStacks$ge;

          const player = this._findPlayer();

          if (!player) return; // 1. 生效

          for (const effect of card.effects) {
            this._applyEffect(player, effect.type, effect.value);
          } // 2. 记叠层


          const stacks = (_player$cardStacks$ge = player.cardStacks.get(card.id)) != null ? _player$cardStacks$ge : 0;
          player.cardStacks.set(card.id, stacks + 1);
          console.log(`[CardApplySystem] ${card.name} 生效，叠了 ${stacks + 1} 层`);
        }

        _applyEffect(player, type, value) {
          switch (type) {
            case 'bullet_damage':
              {
                const w = player.weapons[0];
                if (w) w.bulletDamage *= value;
                break;
              }

            case 'fire_rate':
              {
                const w = player.weapons[0];
                if (w) w.fireInterval *= value;
                break;
              }

            case 'move_speed':
              {
                const w = player.weapons[0];
                if (w) w.bulletSpeed *= value;
                break;
              }

            case 'max_hp':
              player.maxHp += value;
              break;

            case 'heal':
              player.hp = Math.min(player.hp + value, player.maxHp);
              break;
          }
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
//# sourceMappingURL=6329e43d16dc5489b0ff3d831ac7d9f2fafc1781.js.map