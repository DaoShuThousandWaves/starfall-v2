import { view} from 'cc';



export class GameData  {
    public static viewW: number = 720;
    public static viewH: number = 1280;

    public static init(): void {
        const size = view.getVisibleSize();
        this.viewW = size.width;
        this.viewH = size.height;
    }
}


