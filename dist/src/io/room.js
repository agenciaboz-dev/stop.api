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
const Room_1 = require("../class/Room");
const Player_1 = require("../class/Player");
const create = (socket, roomForm, playerForm) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("creating new room");
    // const host = new Player(playerForm.name, playerForm.icon)
    console.log(playerForm);
    const room = new Room_1.Room(playerForm, roomForm.name, roomForm.password);
    console.log("CONSOLE.LOG:", { room });
    socket.emit("room:new:success", { room });
    socket.broadcast.emit("room:new", room);
});
const join = (socket, room_id, playerForm) => __awaiter(void 0, void 0, void 0, function* () {
    const room = Room_1.rooms.find((item) => item.id == room_id);
    console.log("Entrando na sala", room);
    if (room) {
        const player = new Player_1.Player(playerForm.name, playerForm.icon);
        room.addPlayer(player);
        socket.emit("room:join:success", { room, player });
        socket.broadcast.emit("room:join", { room, player });
    }
});
const leave = (socket, roomId, playerId) => __awaiter(void 0, void 0, void 0, function* () {
    const room = Room_1.rooms.find((item) => item.id == roomId);
    if (room) {
        room.removePlayer(playerId);
        socket.emit("room:leave:success", room.players);
        socket.broadcast.to(roomId).emit("room:leave:left", room.players);
        console.log("Os de fé: ", room.players);
    }
});
const list = (socket) => __awaiter(void 0, void 0, void 0, function* () {
    socket.emit("room:list:success", Room_1.rooms);
    console.log(Room_1.rooms);
});
const listPlayers = (socket, roomId) => __awaiter(void 0, void 0, void 0, function* () {
    const room = Room_1.rooms.find((item) => item.id == roomId);
    socket.emit("room:players:success", room);
    console.log("Jogadores da sala:", { room });
});
exports.default = { create, join, leave, list, listPlayers };
