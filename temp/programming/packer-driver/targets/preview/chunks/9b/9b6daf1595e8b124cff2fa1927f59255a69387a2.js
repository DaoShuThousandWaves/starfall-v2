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
        ENEMY_KILLED: 'enemy-killed' // 敌机被击杀

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b6daf1595e8b124cff2fa1927f59255a69387a2.js.map