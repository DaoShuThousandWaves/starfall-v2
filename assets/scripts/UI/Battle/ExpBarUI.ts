import { _decorator, Component, Label, ProgressBar } from 'cc';
import type { Bus } from '../../Engine/Bus';
import { BATTLE_EVENT } from '../../Battle/BattleEvents';

const { ccclass, property } = _decorator;

@ccclass('ExpBarUI')
export class ExpBarUI extends Component {

    @property(ProgressBar)
    progressBar: ProgressBar = null!;

    @property(Label)
    levelLabel: Label = null!;

    private _bus: Bus = null!;

    setup(bus: Bus): void {
        this._bus = bus;
        this._bus.on(BATTLE_EVENT.EXP_CHANGED, this._onExpChanged, this);
    }

    onLoad() {
        if (this.progressBar) this.progressBar.progress = 0;
        if (this.levelLabel) this.levelLabel.string = 'Lv.1';
    }

    onDestroy() {
        this._bus?.off(BATTLE_EVENT.EXP_CHANGED, this._onExpChanged, this);
    }

    private _onExpChanged(currentExp: number, expToNext: number, level: number): void {
        if (this.progressBar) {
            const ratio = expToNext > 0 ? currentExp / expToNext : 0;
            this.progressBar.progress = Math.max(0, Math.min(1, ratio));
        }
        if (this.levelLabel) {
            this.levelLabel.string = `Lv.${level}`;
        }
    }
}