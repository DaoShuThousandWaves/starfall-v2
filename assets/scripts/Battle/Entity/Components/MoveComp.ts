export type MovePattern = 'none' | 'straight' | 'sine' | 'arc' | 'dive' | 'sprint';

export class MoveComp {
    pattern: MovePattern = 'none';
    dirX: -1 | 0 | 1 = 0;
    dirY: -1 | 0 | 1 = 0;
    speed = 100;
    originX = 0;
    originY = 0;
    phase = 0;
    frequency = 3;
    amplitude = 80;
}