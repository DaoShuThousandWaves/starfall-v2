import { _decorator, Component, EventMouse, EventTouch, NodeEventType, Vec2 } from 'cc';
import type { Bus } from '../Engine/Bus';
import { BATTLE_EVENT } from './BattleEvents';

const { ccclass } = _decorator;

@ccclass('BattleInputHandler')
export class BattleInputHandler extends Component {

    private _bus: Bus = null!;
    private _isDragging = false;
    private _activeSource: 'none' | 'touch' | 'mouse' = 'none';   // ← 新增
    private _tempDelta = new Vec2();

    setup(bus: Bus): void {
        this._bus = bus;
    }

    onEnable() {
        this.node.on(NodeEventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(NodeEventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(NodeEventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(NodeEventType.TOUCH_CANCEL, this._onTouchEnd, this);

        this.node.on(NodeEventType.MOUSE_DOWN, this._onMouseDown, this);
        this.node.on(NodeEventType.MOUSE_MOVE, this._onMouseMove, this);
        this.node.on(NodeEventType.MOUSE_UP, this._onMouseUp, this);
    }

    onDisable() {
        this.node.off(NodeEventType.TOUCH_START, this._onTouchStart, this);
        this.node.off(NodeEventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.off(NodeEventType.TOUCH_END, this._onTouchEnd, this);
        this.node.off(NodeEventType.TOUCH_CANCEL, this._onTouchEnd, this);

        this.node.off(NodeEventType.MOUSE_DOWN, this._onMouseDown, this);
        this.node.off(NodeEventType.MOUSE_MOVE, this._onMouseMove, this);
        this.node.off(NodeEventType.MOUSE_UP, this._onMouseUp, this);
    }

    // ===== 触摸 =====
    private _onTouchStart(e: EventTouch): void {
        this._activeSource = 'touch';     // ← 锁定触摸
        this._isDragging = true;
    }

    private _onTouchMove(e: EventTouch): void {
        if (this._activeSource !== 'touch') return;   // ← 只有触摸源才处理
        if (!this._isDragging || !this._bus) return;
        e.getUIDelta(this._tempDelta);
        this._bus.emit(BATTLE_EVENT.PLAYER_MOVE, this._tempDelta.x, this._tempDelta.y);
    }

    private _onTouchEnd(e: EventTouch): void {
        if (this._activeSource !== 'touch') return;
        this._isDragging = false;
        this._activeSource = 'none';
    }

    // ===== 鼠标 =====
    private _onMouseDown(e: EventMouse): void {
        if (e.getButton() !== EventMouse.BUTTON_LEFT) return;
        this._activeSource = 'mouse';     // ← 锁定鼠标
        this._isDragging = true;
    }

    private _onMouseMove(e: EventMouse): void {
        if (this._activeSource !== 'mouse') return;   // ← 只有鼠标源才处理
        if (!this._isDragging || !this._bus) return;
        e.getUIDelta(this._tempDelta);
        this._bus.emit(BATTLE_EVENT.PLAYER_MOVE, this._tempDelta.x, this._tempDelta.y);
    }

    private _onMouseUp(e: EventMouse): void {
        if (e.getButton() !== EventMouse.BUTTON_LEFT) return;
        if (this._activeSource !== 'mouse') return;
        this._isDragging = false;
        this._activeSource = 'none';
    }
}