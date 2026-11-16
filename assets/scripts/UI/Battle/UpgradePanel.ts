import { _decorator, Component, Label, Node } from 'cc';
import type { Bus } from '../../Engine/Bus';
import { BATTLE_EVENT } from '../../Battle/BattleEvents';
import { BattleViewModel } from '../../Battle/ViewModel/BattleViewModel';

const { ccclass, property } = _decorator;

@ccclass('UpgradePanel')
export class UpgradePanel extends Component {

    @property(Node)
    rootNode: Node = null!;

    /** 三个卡牌按钮。每个按钮下有一个 Label 显示名字和描述 */
    @property([Node])
    cardNodes: Node[] = [];

    private _viewModel: BattleViewModel = null!;
    private _bus: Bus = null!;


    setup( bus: Bus,viewModel: BattleViewModel): void {
        this.onDestroy(); 

        this._viewModel = viewModel;
        this._bus = bus;
        if (this.rootNode) this.rootNode.active = false;
        // 只监听ViewModel发出的“UI意图变更”
        this._bus.on(BATTLE_EVENT.UI_UPGRADE_PANEL_STATE_CHANGED, this._onUIStateChanged, this);
        for (let i = 0; i < this.cardNodes.length; i++) {
            const node = this.cardNodes[i];
            if (node) node.on(Node.EventType.TOUCH_END, () => this._onCardClick(i), this);
        }
    }


    onDestroy() {
        this._bus?.off(BATTLE_EVENT.UI_UPGRADE_PANEL_STATE_CHANGED, this._onUIStateChanged, this);
        for (const node of this.cardNodes) {
            if (node) node.off(Node.EventType.TOUCH_END);
        }
    }

    private _onUIStateChanged(visible: boolean): void {
        this.rootNode.active = visible;
        if (visible && this._viewModel) {
            this._renderCards(this._viewModel.currentCards); // 从 ViewModel 拿数据渲染
        }
    }

    private _renderCards(cards: any[]): void {
        for (let i = 0; i < this.cardNodes.length; i++) {
            const node = this.cardNodes[i];
            const card = cards[i];

            if (!node) continue;

            if (!card) {
                node.active = false;
                continue;
            }

            node.active = true;
            const label = node.getChildByName('Label')?.getComponent(Label);
            if (label) {
                label.string = `${card.name}\n${card.desc}`;
            }
        }
    }

    private _onCardClick(index: number): void {
        const card = this._viewModel.currentCards[index];
        if (!card) return;

        this.rootNode.active = false;
        this._bus.emit(BATTLE_EVENT.CARD_SELECTED, card);
    }
}