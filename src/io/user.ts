import { Socket } from "socket.io"
import { getIoInstance, handleSocket } from "./socket"
import { ClientBag } from "../definitions/client"
import user from "./user"

import { normalize } from "path"

const logout = async (socket: Socket, clients: ClientBag) => {
    const io = getIoInstance()

    io.emit("user:disconnect", user)
    clients.remove(clients?.get(socket))
}

const login = async (socket: Socket, data: User) => {
    if (data) {
        socket.emit("user:login:success", data)
    } else {
        socket.emit("user:login:failed", { error: "Credenciais inválidas." })
    }
}

export default {
    logout,
    login,
}
