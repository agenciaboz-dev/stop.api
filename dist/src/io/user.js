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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_1 = require("./socket");
const user_1 = __importDefault(require("./user"));
const logout = (socket, clients) => __awaiter(void 0, void 0, void 0, function* () {
    const io = (0, socket_1.getIoInstance)();
    io.emit("user:disconnect", user_1.default);
    clients.remove(clients === null || clients === void 0 ? void 0 : clients.get(socket));
});
const login = (socket, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (data) {
        socket.emit("user:login:success", data);
    }
    else {
        socket.emit("user:login:failed", { error: "Credenciais inválidas." });
    }
});
exports.default = {
    logout,
    login,
};
