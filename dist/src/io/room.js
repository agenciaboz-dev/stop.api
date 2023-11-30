"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Room_1 = require("../classes/Room");
const Player_1 = require("../classes/Player");
const create = (socket, roomForm, playerForm) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("creating new room");
    const host = new Player_1.Player(playerForm.name, playerForm.icon);
    console.log(host);
    const room = new Room_1.Room(host, roomForm.name, roomForm.password);
    console.log(room);
    socket.emit("room:new:success", { room, player: host });
    socket.broadcast.emit("room:new", room);
});
const join = (socket, room_id, playerForm) => __awaiter(void 0, void 0, void 0, function* () {
    const room = Room_1.rooms.find((item) => item.id == room_id);
    if (room) {
        const player = new Player_1.Player(playerForm.name, playerForm.icon);
        room.addPlayer(player);
        socket.emit("room:join:success", { room, player });
        socket.broadcast.emit("room:join", { room, player });
    }
});
const list = (socket) => __awaiter(void 0, void 0, void 0, function* () {
    socket.emit("room:list", Room_1.rooms);
});
exports.default = { create, join, list };
