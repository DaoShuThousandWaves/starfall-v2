import { _decorator, Component, ProgressBar } from 'cc';
import type { Bus } from '../../Engine/Bus';
import { BATTLE_EVENT } from '../../Battle/BattleEvents';

const { ccclass, property } = _decorator;

@ccclass('PlayerHealthUI')
export class PlayerHealthUI extends Component {

    @property(ProgressBar)
    progressBar: ProgressBar = null!;

    private _bus: Bus = null!;

    setup(bus: Bus): void {
        this._bus = bus;
        this._bus.on(BATTLE_EVENT.PLAYER_HP_CHANGED, this._onHpChanged, this);
    }

    onLoad() {
        if (this.progressBar) this.progressBar.progress = 1;
    }

    onDestroy() {
        this._bus?.off(BATTLE_EVENT.PLAYER_HP_CHANGED, this._onHpChanged, this);
    }

    private _onHpChanged(ratio: number): void {
        if (!this.progressBar) return;
        this.progressBar.progress = Math.max(0, Math.min(1, ratio));
    }


}