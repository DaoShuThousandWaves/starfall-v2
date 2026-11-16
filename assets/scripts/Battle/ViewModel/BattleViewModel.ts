// Battle/ViewModel/BattleViewModel.ts
import type { Bus } from '../../Engine/Bus';
import type { GameState } from '../System/BattleStateSystem';
import type { CardConfigData } from '../Config/CardConfig';
import { BATTLE_EVENT } from '../BattleEvents';

export class BattleViewModel {
    private _cards: CardConfigData[] = [];
    private _gameState: GameState = 'playing';
    private _levelCleared = false;

    // 选卡面板意图
    public get shouldShowUpgradePanel(): boolean {
        if (this._levelCleared || this._gameState === 'level_clear' || this._gameState === 'game_over') {
            return false;
        }
        return this._gameState === 'upgrading' && this._cards.length > 0;
    }

    public get currentCards(): CardConfigData[] {
        return this._cards;
    }

    // === 【新增】结果面板（暂停/胜利/失败）意图 ===
    public get shouldShowResultPanel(): boolean {
        return this._gameState === 'paused' || 
               this._gameState === 'level_clear' || 
               this._gameState === 'game_over';
    }

    public get resultTitle(): string {
        if (this._gameState === 'paused') return '游戏暂停';
        if (this._gameState === 'level_clear') return '关卡胜利';
        if (this._gameState === 'game_over') return '挑战失败';
        return '';
    }

    public get resultCanResume(): boolean {
        // 只有暂停状态才允许“继续游戏”，胜利/失败不允许
        return this._gameState === 'paused';
    }

    constructor(private _bus: Bus) {
        this._bus.on(BATTLE_EVENT.CARDS_DRAWN, this._onCardsDrawn, this);
        this._bus.on(BATTLE_EVENT.GAME_STATE_CHANGED, this._onGameStateChanged, this);
        this._bus.on(BATTLE_EVENT.LEVEL_CLEAR, this._onLevelClear, this);
    }

    onDestroy(): void {
        this._bus.off(BATTLE_EVENT.CARDS_DRAWN, this._onCardsDrawn, this);
        this._bus.off(BATTLE_EVENT.GAME_STATE_CHANGED, this._onGameStateChanged, this);
        this._bus.off(BATTLE_EVENT.LEVEL_CLEAR, this._onLevelClear, this);
    }

    private _onCardsDrawn(cards: CardConfigData[]): void {
        this._cards = cards;
        this._notifyStateChange(); 
    }

    private _onGameStateChanged(state: GameState): void {
        this._gameState = state;
        this._notifyStateChange();
    }

    private _onLevelClear(): void {
        this._levelCleared = true;
        this._cards = [];
        this._notifyStateChange(); 
    }

    private _notifyStateChange(): void {
        // 广播选卡的显示意图
        this._bus.emit(BATTLE_EVENT.UI_UPGRADE_PANEL_STATE_CHANGED, this.shouldShowUpgradePanel);
        
        this._bus.emit(BATTLE_EVENT.UI_RESULT_PANEL_STATE_CHANGED, this.shouldShowResultPanel);
    }
}