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
        GAME_OVER: 'game-over',
        BOSS_SPAWNED: 'boss-spawned',
        // Boss 出现（游戏事实）
        BOSS_HP_CHANGED: 'boss-hp-changed',
        // Boss 血量变化（数据事实）
        BOSS_KILLED: 'boss-killed',
        // Boss 死亡（游戏事实，已有）
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
//# sourceMappingURL=eb1a190ed7f00dfe8615dccdac867903215a595a.js.map