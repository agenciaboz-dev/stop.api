"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSocket = exports.getIoInstance = exports.initializeIoServer = void 0;
const socket_io_1 = require("socket.io");
const room_1 = __importDefault(require("./room"));
const player_1 = __importDefault(require("./player"));
let io = null;
const initializeIoServer = (server) => {
    io = new socket_io_1.Server(server, {
        cors: { origin: "*" },
        maxHttpBufferSize: 1e8,
    });
};
exports.initializeIoServer = initializeIoServer;
const getIoInstance = () => {
    if (!io) {
        throw new Error("Socket.IO has not been initialized. Please call initializeIoServer first.");
    }
    return io;
};
exports.getIoInstance = getIoInstance;
const handleSocket = (socket) => {
    console.log(`new connection:${socket.id}`);
    socket.on("disconnect", () => {
        console.log(`disconnected: ${socket.id}`);
    });
    socket.on("player:new", (data) => player_1.default.create(socket, data));
    socket.on("player:find", (playerId) => player_1.default.find(socket, playerId));
    socket.on("room:new", (roomForm, player) => room_1.default.create(socket, roomForm, player));
    socket.on("room:join", (room_id, player) => room_1.default.join(socket, room_id, player));
    socket.on("room:leave", (roomId, playerId) => room_1.default.leave(socket, roomId, playerId));
    socket.on("room:list", () => room_1.default.list(socket));
    socket.on("room:players", (roomId) => room_1.default.listPlayers(socket, roomId));
};
exports.handleSocket = handleSocket;
