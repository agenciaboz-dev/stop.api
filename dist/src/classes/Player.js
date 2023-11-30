"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const uid_1 = require("uid");
class Player {
    constructor(name, icon) {
        this.count = [];
        this.addScore = (score) => {
            this.count.push(score);
            this.score = this.count.reduce((cnt, curr) => cnt + curr, 0);
        };
        this.totalyPoints = () => {
            const points = this.count.reduce((total, current) => {
                const sum = total + current;
                return sum;
            }, 0);
            return points;
        };
        this.id = (0, uid_1.uid)();
        this.name = name;
        this.icon = icon;
        this.score = 0;
    }
}
exports.Player = Player;
