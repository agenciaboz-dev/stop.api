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
const Player_1 = require("../class/Player");
const create = (socket, playerForm) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Criando novo jogador");
    const playerNew = new Player_1.Player(playerForm.name, playerForm.icon);
    console.log(playerNew);
    socket.emit("player:new:success", playerNew);
    socket.broadcast.emit("player:new", playerNew);
});
const find = (socket, playerId) => __awaiter(void 0, void 0, void 0, function* () {
    socket.emit("player:list");
});
exports.default = { create, find };
