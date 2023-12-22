import { Server as SocketIoServer } from "socket.io"
import { Server as HttpServer } from "http"
import { Server as HttpsServer } from "https"
import { Socket } from "socket.io"
import room from "./room"
import player from "./player"
import { Player } from "../class/Player"

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

    socket.on("player:new", (data: PlayerForm) => player.create(socket, data))
    socket.on("player:find", (playerId: number) => player.find(socket, playerId))

    socket.on("room:new", (roomForm: RoomForm, player: Player) => room.create(socket, roomForm, player))
    socket.on("room:join", (room_id: string, player: Player) => room.join(socket, room_id, player))
    socket.on("room:leave", (roomId: string, playerId: string) => room.leave(socket, roomId, playerId))
    socket.on("room:list", () => room.list(socket))
    socket.on("room:players", (roomId: string) => room.listPlayers(socket, roomId))
}
