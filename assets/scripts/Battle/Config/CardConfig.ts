export type CardRarity = 'common' | 'rare' | 'epic';

/** 卡牌效果类型。CardSystem 不解释效果，ApplySystem 解释 */
export type CardEffectType =
    | 'bullet_damage'      // 子弹伤害倍率
    | 'fire_rate'          // 开火间隔倍率
    | 'move_speed'         // 子弹速度倍率
    | 'bullet_count'       // 每次多发一颗
    | 'max_hp'             // 最大血量增加
    | 'heal';              // 立即回复

export interface CardEffect {
    type: CardEffectType;
    /** 倍率（1.3 = +30%）或绝对值（bullet_count 用 1 = 多一颗） */
    value: number;
}

export interface CardConfigData {
    id: string;
    name: string;
    desc: string;
    rarity: CardRarity;
    /** 效果列表。一张卡可以有多个效果 */
    effects: CardEffect[];
    /** 最大可叠层数。不填 = 无限 */
    maxStacks?: number;
}

export const CARD_POOL: CardConfigData[] = [
    {
        id: 'dmg_up',
        name: '强力弹头',
        desc: '子弹伤害 +30%',
        rarity: 'common',
        effects: [{ type: 'bullet_damage', value: 1.3 }],
        maxStacks: 5,
    },
    {
        id: 'fire_rate_up',
        name: '速射装置',
        desc: '开火间隔 -20%',
        rarity: 'common',
        effects: [{ type: 'fire_rate', value: 0.8 }],
        maxStacks: 4,
    },
    {
        id: 'bullet_count_up',
        name: '散射模块',
        desc: '每次多发一颗子弹',
        rarity: 'rare',
        effects: [{ type: 'bullet_count', value: 1 }],
        maxStacks: 3,
    },
    {
        id: 'move_speed_up',
        name: '弹道加速',
        desc: '子弹速度 +25%',
        rarity: 'common',
        effects: [{ type: 'move_speed', value: 1.25 }],
        maxStacks: 4,
    },
    {
        id: 'max_hp_up',
        name: '装甲强化',
        desc: '最大血量 +30，立即回满',
        rarity: 'rare',
        effects: [
            { type: 'max_hp', value: 30 },
            { type: 'heal', value: 30 },
        ],
        maxStacks: 3,
    },
];