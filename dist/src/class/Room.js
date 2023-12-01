"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = exports.rooms = void 0;
exports.rooms = [];
class Room {
    constructor(host, room_name, password) {
        this.players = [];
        this.addPlayer = (player) => {
            this.players.push(player);
        };
        this.host = host;
        this.id = host.id;
        this.name = room_name;
        this.password = password;
        this.players.push(host);
        exports.rooms.push(this);
    }
}
exports.Room = Room;
