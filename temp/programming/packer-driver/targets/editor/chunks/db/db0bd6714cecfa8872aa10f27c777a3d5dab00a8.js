System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Turret, BATTLE_EVENT, TurretSpawnSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "../Entity/Boss", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurret(extras) {
    _reporterNs.report("Turret", "../Entity/Turret", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBATTLE_EVENT(extras) {
    _reporterNs.report("BATTLE_EVENT", "../BattleEvents", _context.meta, extras);
  }

  _export("TurretSpawnSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Turret = _unresolved_2.Turret;
    }, function (_unresolved_3) {
      BATTLE_EVENT = _unresolved_3.BATTLE_EVENT;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "421c2Qfw15O+Yi3Into64uC", "TurretSpawnSystem", undefined);

      /**
       * 监听 TURRET_REBUILD_REQUEST，销毁旧炮台、按新阶段配置创建新炮台。
       * 阶段切换 = 全新阵容。
       */
      _export("TurretSpawnSystem", TurretSpawnSystem = class TurretSpawnSystem {
        constructor() {
          this._world = null;
        }

        onStart(world) {
          this._world = world;
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).TURRET_REBUILD_REQUEST, this._onRebuild, this);
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_KILLED, this._onBossKilled, this);
          world.bus.on((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).TURRET_KILLED, this._onTurretKilled, this);
        }

        onDestroy(world) {
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).TURRET_REBUILD_REQUEST, this._onRebuild, this);
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).BOSS_KILLED, this._onBossKilled, this);
          world.bus.off((_crd && BATTLE_EVENT === void 0 ? (_reportPossibleCrUseOfBATTLE_EVENT({
            error: Error()
          }), BATTLE_EVENT) : BATTLE_EVENT).TURRET_KILLED, this._onTurretKilled, this);
          this._world = null;
        }

        onTick() {}

        _onRebuild(boss, stageIndex) {
          // 1. 销毁旧炮台
          const oldIds = new Set(boss.turretIds.filter(id => id !== 0));

          for (const t of this._world.query('turret')) {
            if (oldIds.has(t.id)) {
              this._world.remove(t);
            }
          }

          boss.turretIds = []; // 2. 按新阶段配置创建

          const stage = boss.config.stages[stageIndex];
          if (!stage) return;

          for (const cfg of stage.turrets) {
            const turret = new (_crd && Turret === void 0 ? (_reportPossibleCrUseOfTurret({
              error: Error()
            }), Turret) : Turret)();
            turret.ownerId = boss.id;
            turret.config = cfg;
            turret.hp = cfg.hp;
            turret.maxHp = cfg.hp;
            turret.collisionRadius = cfg.collisionRadius;
            turret.aimAngle = cfg.baseAngle;
            turret.x = boss.x + cfg.offsetX;
            turret.y = boss.y + cfg.offsetY;

            this._world.add(turret);

            boss.turretIds.push(turret.id);
          }
        }

        _onTurretKilled(turret) {
          for (const boss of this._world.query('boss')) {
            const idx = boss.turretIds.indexOf(turret.id);
            if (idx >= 0) boss.turretIds[idx] = 0;
          }
        }

        _onBossKilled(boss) {
          const oldIds = new Set(boss.turretIds);

          for (const t of this._world.query('turret')) {
            if (oldIds.has(t.id)) {
              this._world.remove(t);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db0bd6714cecfa8872aa10f27c777a3d5dab00a8.js.map