import { _decorator, Button, Component, Label } from 'cc';
import type { Bus } from '../../Engine/Bus';
import { BATTLE_EVENT } from '../../Battle/BattleEvents';
import type { GameState } from '../../Battle/System/BattleStateSystem';

const { ccclass, property } = _decorator;

@ccclass('PauseButton')
export class PauseButton extends Component {

    @property(Label)
    label: Label = null!;

    @property(Button)
    button: Button = null!;

    private _bus: Bus = null!;
    private _isPaused = false;

    setup(bus: Bus): void {
        this._bus = bus;
        // 【改】监听状态机事实，不再监听已废弃的 PAUSE_TOGGLED
        this._bus.on(BATTLE_EVENT.GAME_STATE_CHANGED, this._onGameStateChanged, this);
    }

    onLoad() {
        if (this.button) {
            this.button.node.on(Button.EventType.CLICK, this._onClick, this);
        }
        this._updateLabel();
    }

    onDestroy() {
        // 【改】null 保护
        if (this.button) {
            this.button.node.off(Button.EventType.CLICK, this._onClick, this);
        }
        this._bus?.off(BATTLE_EVENT.GAME_STATE_CHANGED, this._onGameStateChanged, this);
    }

    private _onClick(): void {
        // 【改】null 保护
        if (!this._bus) return;
        this._bus.emit(BATTLE_EVENT.PAUSE_TOGGLE_REQUEST);
    }

    public setEnabled(enabled: boolean): void {
        if (this.button) this.button.interactable = enabled;
    }

    private _onGameStateChanged(state: GameState): void {
        // 【改】根据状态机判断按钮文字
        this._isPaused = (state === 'paused');
        this._updateLabel();
    }

    private _updateLabel(): void {
        if (this.label) {
            this.label.string = this._isPaused ? '继续' : '暂停';
        }
    }
}