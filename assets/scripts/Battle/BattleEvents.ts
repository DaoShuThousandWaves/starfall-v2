export const BATTLE_EVENT = {
    // ==========================================
    // 1. 输入与操作请求 (Input & Requests)
    // ==========================================
    PLAYER_MOVE: 'player-move',                     // (dx: number, dy: number)
    PAUSE_TOGGLE_REQUEST: 'pause-toggle-request',   // ()
    RESTART_REQUEST: 'restart-request',             // ()
    QUIT_REQUEST: 'quit-request', 

    // ==========================================
    // 2. 实体生成与重建请求 (Spawn Requests)
    // ==========================================
    WEAPON_FIRE: 'weapon-fire',                     // (req: BulletFireRequest)
    ENEMY_SPAWN_REQUEST: 'enemy-spawn-request',     // (enemyType: EnemyType, spawnSide: SpawnSide)
    BOSS_SPAWN_REQUEST: 'boss-spawn-request',       // (bossId: string)
    TURRET_REBUILD_REQUEST: 'turret-rebuild-request', // (boss: Boss, stageIndex: number)

    // ==========================================
    // 3. 战斗与击杀事实 (Combat Facts)
    // ==========================================
    BULLET_HIT: 'bullet-hit',                       // (bullet: Bullet, target: Plane | Turret)
    ENEMY_KILLED: 'enemy-killed',                   // (enemy: Plane)
    BOSS_KILLED: 'boss-killed',                     // (boss: Boss)
    TURRET_KILLED: 'turret-killed',                 // (turret: Turret)
    PLAYER_DIED: 'player-died',                     // ()
    BOSS_SPAWNED: 'boss-spawned',                   // (bossName: string)
    BOSS_STAGE_CHANGED: 'boss-stage-changed',       // (boss: Boss, stageIndex: number)

    // ==========================================
    // 4. 数据变化事实 (Data Changed Facts - 供 UI 监听)
    // ==========================================
    PLAYER_HP_CHANGED: 'player-hp-changed',         // (ratio: number)
    BOSS_HP_CHANGED: 'boss-hp-changed',             // (ratio: number)
    EXP_CHANGED: 'exp-changed',                     // (currentExp: number, expToNext: number, level: number)
    
    /** 升级了（游戏事实）。参数：(levelsGained: number) */
    LEVEL_UP: 'level-up',                           

    // ==========================================
    // 5. 游戏状态机流转 (Game State Flow)
    // ==========================================
    GAME_STATE_CHANGED: 'game-state-changed',       // (state: GameState)
    LEVEL_CLEAR: 'level-clear',                     // ()
  

    // ==========================================
    // 6. 选卡与 UI 交互 (Upgrade & UI)
    // ==========================================
    CARDS_DRAWN: 'cards-drawn',                     // (cards: CardConfigData[])
    CARD_SELECTED: 'card-selected',                 // (card: CardConfigData)
    UPGRADE_FINISHED: 'upgrade-finished',           // ()
    UI_UPGRADE_PANEL_STATE_CHANGED: 'ui-upgrade-panel-state-changed', // (visible: boolean)
     // 结果面板（暂停/胜利/失败）意图
    UI_RESULT_PANEL_STATE_CHANGED: 'ui-result-panel-state-changed', // (visible: boolean)
} as const;