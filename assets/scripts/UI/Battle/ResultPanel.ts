import { _decorator, Component, Node, Label } from 'cc';
import type { Bus } from '../../Engine/Bus';
import { BATTLE_EVENT } from '../../Battle/BattleEvents';
import { BattleViewModel } from '../../Battle/ViewModel/BattleViewModel';

const { ccclass, property } = _decorator;

@ccclass('ResultPanel')
export class ResultPanel extends Component {
    @property(Node) rootNode: Node = null!;
    
    @property(Label) titleLabel: Label = null!;
    
    // 三个按钮节点
    @property(Node) btnResume: Node = null!;
    @property(Node) btnRestart: Node = null!;
    @property(Node) btnQuit: Node = null!;

    private _bus: Bus = null!;
    private _viewModel: BattleViewModel = null!;

    setup(bus: Bus, viewModel: BattleViewModel): void {
        this.onDestroy();
        this._bus = bus;
        this._viewModel = viewModel;
        this.rootNode.active = false;

        this._bus.on(BATTLE_EVENT.UI_RESULT_PANEL_STATE_CHANGED, this._onUIStateChanged, this);

        // 统一在代码里绑定事件，不依赖编辑器，避免漏配
        if (this.btnResume) this.btnResume.on(Node.EventType.TOUCH_END, this._onResumeClick, this);
        if (this.btnRestart) this.btnRestart.on(Node.EventType.TOUCH_END, this._onRestartClick, this);
        if (this.btnQuit) this.btnQuit.on(Node.EventType.TOUCH_END, this._onQuitClick, this);
    }

    protected onDestroy(): void {
        this._bus?.off(BATTLE_EVENT.UI_RESULT_PANEL_STATE_CHANGED, this._onUIStateChanged, this);
        if (this.btnResume) this.btnResume.off(Node.EventType.TOUCH_END, this._onResumeClick, this);
        if (this.btnRestart) this.btnRestart.off(Node.EventType.TOUCH_END, this._onRestartClick, this);
        if (this.btnQuit) this.btnQuit.off(Node.EventType.TOUCH_END, this._onQuitClick, this);
    }

    private _onResumeClick(): void {
        this._bus.emit(BATTLE_EVENT.PAUSE_TOGGLE_REQUEST);
    }

    private _onRestartClick(): void {
        this._bus.emit(BATTLE_EVENT.RESTART_REQUEST);
    }

    private _onQuitClick(): void {
        this._bus.emit(BATTLE_EVENT.QUIT_REQUEST);
    }

    private _onUIStateChanged(shouldShow: boolean): void {
        this.rootNode.active = shouldShow;
        
        // 显示时，从 ViewModel 拉取数据填充
        if (shouldShow) {
            this.titleLabel.string = this._viewModel.resultTitle;
            if (this.btnResume) {
                this.btnResume.active = this._viewModel.resultCanResume;
            }
        }
    }
}