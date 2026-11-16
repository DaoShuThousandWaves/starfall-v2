import type { System } from "../../Engine/System";
import type { World } from "../../Engine/World";
import { BATTLE_EVENT } from "../BattleEvents";
import type { BossEntity } from "../Entity/BossEntity";


export class BossStageSystem implements System {


    onTick(world: World, dt: number): void {
        for(const boss of world.query<BossEntity>('boss')){
            this._checkStage(world,boss);
        }
    }

    private _checkStage(world: World, boss: BossEntity): void {
        const stages = boss.config.stages;
        const nextIndex = boss.stageIndex + 1;
        if (nextIndex >= stages.length) return;

        const nextStage = stages[nextIndex];
        if (nextStage.hpRatio === undefined) return;
        const ratio = boss.health.hp / boss.health.maxHp;

        if (ratio <= nextStage.hpRatio) {
            boss.enterStage(nextIndex);
            world.bus.emit(BATTLE_EVENT.BOSS_STAGE_CHANGED, boss, nextIndex);
            world.bus.emit(BATTLE_EVENT.TURRET_REBUILD_REQUEST, boss, nextIndex);  
            console.log(`[BossStageSystem] ${boss.config.name} 进入阶段 ${nextIndex}`);
        }
    }
}


