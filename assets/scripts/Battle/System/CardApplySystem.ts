import type { System } from '../../Engine/System';
import type { World } from '../../Engine/World';
import type { PlayerEntity } from '../Entity/PlayerEntity';
import { BATTLE_EVENT } from '../BattleEvents';
import type { CardConfigData, CardEffectType } from '../Config/CardConfig';

export class CardApplySystem implements System {

    private _world: World = null!;

    onStart(world: World): void {
        this._world = world;
        world.bus.on(BATTLE_EVENT.CARD_SELECTED, this._onCardSelected, this);
    }

    onDestroy(world: World): void {
        world.bus.off(BATTLE_EVENT.CARD_SELECTED, this._onCardSelected, this);
        this._world = null!;
    }

    onTick(_world: World, _dt: number): void {}

    private _onCardSelected(card: CardConfigData): void {
        const player = this._findPlayer();
        if (!player) return;

        for (const effect of card.effects) {
            this._applyEffect(player, effect.type, effect.value);
        }

        const stacks = player.exp.cardStacks.get(card.id) ?? 0;
        player.exp.cardStacks.set(card.id, stacks + 1);
        console.log(`[CardApplySystem] ${card.name} 生效，叠了 ${stacks + 1} 层`);
    }

    private _applyEffect(player: PlayerEntity, type: CardEffectType, value: number): void {
        switch (type) {
            case 'bullet_damage':
                player.weapon.damageMultiplier *= value;
                break;
            case 'fire_rate':
                player.weapon.fireRateMultiplier *= value;
                break;
            case 'move_speed':
                player.weapon.bulletSpeedMultiplier *= value;
                break;
            case 'bullet_count':
                player.weapon.extraBulletCount += value;
                break;
            case 'max_hp':
                player.health.maxHp += value;
                break;
            case 'heal':
                player.health.hp = Math.min(player.health.hp + value, player.health.maxHp);
                break;
        }
    }

    private _findPlayer(): PlayerEntity | null {
        for (const p of this._world.query<PlayerEntity>('player')) return p;
        return null;
    }
}