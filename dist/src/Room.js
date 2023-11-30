"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomClass = exports.rooms = void 0;
exports.rooms = [];
class RoomClass {
    constructor(host, room_name, password) {
        this.players = [];
        this.host = host;
        this.id = host.id;
        this.name = room_name;
        this.password = password;
        this.players.push(host);
        exports.rooms.push(this);
    }
}
exports.RoomClass = RoomClass;
