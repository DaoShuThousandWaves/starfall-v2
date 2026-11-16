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

          var player = this._findPlayer();

          if (!player) return; // 1. 生效

          for (var effect of card.effects) {
            this._applyEffect(player, effect.type, effect.value);
          } // 2. 记叠层


          var stacks = (_player$cardStacks$ge = player.cardStacks.get(card.id)) != null ? _player$cardStacks$ge : 0;
          player.cardStacks.set(card.id, stacks + 1);
          console.log("[CardApplySystem] " + card.name + " \u751F\u6548\uFF0C\u53E0\u4E86 " + (stacks + 1) + " \u5C42");
        }

        _applyEffect(player, type, value) {
          switch (type) {
            case 'bullet_damage':
              {
                var w = player.weapons[0];
                if (w) w.config.bulletDamage *= value;
                break;
              }

            case 'fire_rate':
              {
                var _w = player.weapons[0];
                if (_w) _w.config.fireInterval *= value;
                break;
              }

            case 'move_speed':
              {
                var _w2 = player.weapons[0];
                if (_w2) _w2.config.bulletSpeed *= value;
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
          for (var p of this._world.query('player')) return p;

          return null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6fdc70f48cad92806a3539c78e3c724c5dc61b76.js.map