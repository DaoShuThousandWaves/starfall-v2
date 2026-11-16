export class AimComp {
    /** 当前炮口朝向（度）。TurretAimSystem 写，FireSystem 读 */
    aimAngle = 0;
    /** oscillate 模式相位（弧度） */
    oscPhase = 0;
    /** 开火冷却累积（秒）。FireSystem 写 */
    cooldownTimer = 0;
    /** 当前是否被编排允许开火。TurretScheduleSystem 写 */
    active = false;
}