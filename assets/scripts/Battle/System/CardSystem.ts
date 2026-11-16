import type { System } from '../../Engine/System';
import type { World } from '../../Engine/World';
import type { PlayerEntity } from '../Entity/PlayerEntity';
import { BATTLE_EVENT } from '../BattleEvents';
import { CARD_POOL, type CardConfigData } from '../Config/CardConfig';

export class CardSystem implements System {

    private _world: World = null!;
    private _pendingUpgradeCount = 0;

    onStart(world: World): void {
        this._world = world;
        world.bus.on(BATTLE_EVENT.LEVEL_UP, this._onLevelUp, this);
        world.bus.on(BATTLE_EVENT.CARD_SELECTED, this._onCardSelected, this);
    }

    onDestroy(world: World): void {
        world.bus.off(BATTLE_EVENT.LEVEL_UP, this._onLevelUp, this);
        world.bus.off(BATTLE_EVENT.CARD_SELECTED, this._onCardSelected, this);
        this._world = null!;
    }

    onTick(_world: World, _dt: number): void {}

    private _onLevelUp(levelsGained: number): void {
        this._pendingUpgradeCount += levelsGained;
        if (this._pendingUpgradeCount === levelsGained) {
            this._tryDraw();
        }
    }

    private _onCardSelected(_card: CardConfigData): void {
        this._pendingUpgradeCount--;
        if (this._pendingUpgradeCount > 0) {
            this._tryDraw();
        } else {
            this._world.bus.emit(BATTLE_EVENT.UPGRADE_FINISHED);
        }
    }

    private _tryDraw(): void {
        const player = this._findPlayer();
        if (!player) {
            this._pendingUpgradeCount = 0;
            this._world.bus.emit(BATTLE_EVENT.UPGRADE_FINISHED);
            return;
        }

        const cards = this._drawCards(player, 3);
        if (cards.length === 0) {
            this._pendingUpgradeCount = 0;
            this._world.bus.emit(BATTLE_EVENT.UPGRADE_FINISHED);
            return;
        }

        this._world.bus.emit(BATTLE_EVENT.CARDS_DRAWN, cards);
    }

    private _drawCards(player: PlayerEntity, count: number): CardConfigData[] {
        const available = CARD_POOL.filter(card => {
            const stacks = player.exp.cardStacks.get(card.id) ?? 0;
            const max = card.maxStacks ?? Infinity;
            return stacks < max;
        });

        const pool = available.slice();
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }
        return pool.slice(0, count);
    }

    private _findPlayer(): PlayerEntity | null {
        for (const p of this._world.query<PlayerEntity>('player')) return p;
        return null;
    }
}