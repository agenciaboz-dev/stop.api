import { Server as SocketIoServer } from "socket.io"
import { Server as HttpServer } from "http"
import { Server as HttpsServer } from "https"
import { Socket } from "socket.io"
import { Client, ClientBag } from "../definitions/client"
import user from "./user"
import room from "./room"

let io: SocketIoServer | null = null

export const initializeIoServer = (server: HttpServer | HttpsServer) => {
    io = new SocketIoServer(server, {
        cors: { origin: "*" },
        maxHttpBufferSize: 1e8,
    })
}

export const getIoInstance = () => {
    if (!io) {
        throw new Error("Socket.IO has not been initialized. Please call initializeIoServer first.")
    }
    return io
}

export const handleSocket = (socket: Socket) => {
    console.log(`new connection:${socket.id}`)

    socket.on("disconnect", () => {
        console.log(`disconnected: ${socket.id}`)
    })

    socket.on("room:new", (data: { room: RoomForm; player: PlayerForm }) => room.create(socket, data.room, data.player))
    socket.on("room:join", (data: { room_id: string; player: PlayerForm }) => room.join(socket, data.room_id, data.player))
    socket.on("room:list", () => room.list(socket))
}
