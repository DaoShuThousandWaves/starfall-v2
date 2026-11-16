/**
 * 推进冷却并返回本帧应发射次数。
 * 发射器计时规则的唯一实现。接受任何带 cooldownTimer 字段的对象。
 */
export function advanceCooldown(
    state: { cooldownTimer: number },
    fireInterval: number,
    dt: number,
): number {
    state.cooldownTimer += dt;
    let count = 0;
    let guard = 0;
    while (state.cooldownTimer >= fireInterval && guard++ < 16) {
        state.cooldownTimer -= fireInterval;
        count++;
    }
    return count;
}