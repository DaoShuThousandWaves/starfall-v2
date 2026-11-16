System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, BATTLE_EVENT;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "916ef9UUFhJ4Ii30jcWylr0", "BattleEvents", undefined);

      _export("BATTLE_EVENT", BATTLE_EVENT = {
        WEAPON_FIRE: 'weapon-fire',
        PLAYER_MOVE: 'player-move',
        BULLET_HIT: 'bullet-hit',
        // 子弹命中
        ENEMY_KILLED: 'enemy-killed',
        // 敌机被击杀
        PLAYER_DIED: 'player-died',
        // 玩家死亡
        GAME_OVER: 'game-over'
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d6810fc4411de2a4a8519f0192c7122a57c5bdc.js.map