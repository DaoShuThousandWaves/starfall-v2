import type{World} from "./World"


export interface System  {
    onStart?(world:World): void;
    onTick(world:World,dt:number): void;
    onDestroy?(world:World): void;
}


