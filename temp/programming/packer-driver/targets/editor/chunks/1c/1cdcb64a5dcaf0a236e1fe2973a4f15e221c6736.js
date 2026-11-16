System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BATTLE_EVENT, GameData, PlayerControlSystem, _crd;

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "../Entity/Plane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../BattleEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../../Core/Data/GameData", _context.meta, extras);
  }

  _export("PlayerControlSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BATTLE_EVENT = _unresolved_2.BATTLE_EVENT;
    }, function (_unresolved_3) {
      GameData = _unresolved_3.GameData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b54fM7KkFDtK+Tp1O3nvMF", "PlayerControlSystem", undefined);

      _export("PlayerControlSystem", PlayerControlSystem = class PlayerControlSystem {
        constructor() {
          // 事件回调需要 world，同 SpawnSystem
          this._world = null;
        }

        onStart(world) {
          this._world = world;
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PLAYER_MOVE, this._onPlayerMove, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).PLAYER_MOVE, this._onPlayerMove, this);
          this._world = null;
        }

        onTick(world, dt) {}

        _onPlayerMove(dx, dy) {
          for (const p of this._world.query('player')) {
            p.x += dx;
            p.y += dy;

            this._clampToScreen(p);
          }
        }

        _clampToScreen(p) {
          const halfW = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewW / 2;
          const halfH = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).viewH / 2;
          const margin = 20; // 玩家半宽/半高

          p.x = Math.max(-halfW + margin, Math.min(halfW - margin, p.x));
          p.y = Math.max(-halfH + margin, Math.min(halfH - margin, p.y));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1cdcb64a5dcaf0a236e1fe2973a4f15e221c6736.js.map