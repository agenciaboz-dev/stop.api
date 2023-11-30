"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uid_1 = require("uid");
class Player {
    constructor(name, icon) {
        this.count = [];
        this.id = (0, uid_1.uid)();
        this.name = name;
        this.icon = icon;
        this.score = 0;
    }
}
