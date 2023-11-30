"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSocket = exports.getIoInstance = exports.initializeIoServer = void 0;
const socket_io_1 = require("socket.io");
const room_1 = __importDefault(require("./room"));
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
    socket.on("room:new", (data) => room_1.default.create(socket, data.room, data.player));
    socket.on("room:join", (data) => room_1.default.join(socket, data.room_id, data.player));
    socket.on("room:list", () => room_1.default.list(socket));
};
exports.handleSocket = handleSocket;
