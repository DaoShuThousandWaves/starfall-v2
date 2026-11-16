/** 第 level 级升到 level+1 级所需经验 */
export function expForLevel(level: number): number {
    return 50 + (level - 1) * 30;
}

/** 不同击杀给的经验 */
export const EXP_REWARD = {
    enemy: 15,
    boss: 400,
} as const;