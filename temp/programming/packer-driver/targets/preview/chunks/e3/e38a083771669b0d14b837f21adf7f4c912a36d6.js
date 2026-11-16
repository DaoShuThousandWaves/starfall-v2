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
        BOSS_KILLED: 'boss-killed',
        GAME_OVER: 'game-over',
        BOSS_SHOW_HP_BAR: 'boss-show-hp-bar',
        // Boss 出现，显示血条
        BOSS_HIDE_HP_BAR: 'boss-hide-hp-bar',
        // Boss 死亡，隐藏血条
        BOSS_HP_CHANGED: 'boss-hp-changed',
        // Boss 扣血，更新进度
        PAUSE_TOGGLE_REQUEST: 'pause-toggle-request',
        RESTART_REQUEST: 'restart-request',
        PAUSE_TOGGLED: 'pause-toggled',
        BOSS_STAGE_CHANGED: 'boss-stage-changed'
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e38a083771669b0d14b837f21adf7f4c912a36d6.js.map