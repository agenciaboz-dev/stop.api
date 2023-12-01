export declare class Player {
    id: string;
    name: string;
    score: number;
    count: number[];
    icon: string;
    constructor(name: string, icon: string);
    addScore: (score: number) => void;
    totalyPoints: () => number;
}
