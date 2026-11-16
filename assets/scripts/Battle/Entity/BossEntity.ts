import { Entity } from '../../Engine/Entity';
import type { BossConfigData } from '../Config/BossConfig';
import { HealthComp } from './Components/HealthComp';
import type { TurretScheduleState } from './TurretSchedule';

export class BossEntity extends Entity {
    readonly kind = 'boss';

    health = new HealthComp();

    config: BossConfigData;
    stageIndex = 0;

    /** 当前阶段炮台实体的 id 列表。顺序 = 配置顺序，长度 = 配置炮台数。
     *  死亡槽位 id = 0，不删除，保证 TurretScheduleSystem 的槽位索引稳定。 */
    turretIds: number[] = [];

    turretSchedule: TurretScheduleState | null = null;

    constructor(config: BossConfigData) {
        super();
        this.config = config;
        this.faction = 'enemy';
        this.collisionRadius = config.collisionRadius;
        this.health.hp = config.maxHp;
        this.health.maxHp = config.maxHp;
        this.enterStage(0);
    }

    public enterStage(index: number): void {
        const stage = this.config.stages[index];
        if (!stage) {
            console.warn(`[Boss] 阶段 ${index} 不存在`);
            return;
        }
        this.stageIndex = index;
        if (stage.turretSchedule) {
            this.turretSchedule = {
                config: stage.turretSchedule,
                activeIndex: 0,
                burstElapsed: 0,
                gapTimer: 0,
            };
        } else {
            this.turretSchedule = null;
        }
    }
}