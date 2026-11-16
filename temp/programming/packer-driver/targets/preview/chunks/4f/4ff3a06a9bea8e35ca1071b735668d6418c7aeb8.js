System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, TurretEntity, BATTLE_EVENT, TurretSpawnSystem, _crd;

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../../Engine/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../../Engine/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBossEntity(extras) {
    _reporterNs.report("BossEntity", "../Entity/BossEntity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurretEntity(extras) {
    _reporterNs.report("TurretEntity", "../Entity/TurretEntity", _context.meta, extras);
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
      TurretEntity = _unresolved_2.TurretEntity;
    }, function (_unresolved_3) {
      BATTLE_EVENT = _unresolved_3.BATTLE_EVENT;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "421c2Qfw15O+Yi3Into64uC", "TurretSpawnSystem", undefined);

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
          var oldIds = new Set(boss.turretIds.filter(id => id !== 0));

          for (var t of this._world.query('turret')) {
            if (oldIds.has(t.id)) this._world.remove(t);
          }

          boss.turretIds = [];
          var stage = boss.config.stages[stageIndex];
          if (!stage) return;

          for (var cfg of stage.turrets) {
            var turret = new (_crd && TurretEntity === void 0 ? (_reportPossibleCrUseOfTurretEntity({
              error: Error()
            }), TurretEntity) : TurretEntity)();
            turret.ownerId = boss.id;
            turret.config = cfg;
            turret.health.hp = cfg.hp;
            turret.health.maxHp = cfg.hp;
            turret.collisionRadius = cfg.collisionRadius;
            turret.aim.aimAngle = cfg.baseAngle;
            turret.x = boss.x + cfg.offsetX;
            turret.y = boss.y + cfg.offsetY;

            this._world.add(turret);

            boss.turretIds.push(turret.id);
          }
        }

        _onTurretKilled(turret) {
          for (var boss of this._world.query('boss')) {
            var idx = boss.turretIds.indexOf(turret.id);
            if (idx >= 0) boss.turretIds[idx] = 0;
          }
        }

        _onBossKilled(boss) {
          var oldIds = new Set(boss.turretIds.filter(id => id !== 0));

          for (var t of this._world.query('turret')) {
            if (oldIds.has(t.id)) this._world.remove(t);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ff3a06a9bea8e35ca1071b735668d6418c7aeb8.js.map