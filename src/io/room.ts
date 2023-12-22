import { Socket } from "socket.io"
import { Room, rooms } from "../class/Room"
import { Player } from "../class/Player"

const create = async (socket: Socket, roomForm: RoomForm, playerForm: Player) => {
    console.log("creating new room")
    // const host = new Player(playerForm.name, playerForm.icon)
    console.log(playerForm)
    const room = new Room(playerForm, roomForm.name, roomForm.password)
    console.log("CONSOLE.LOG:", { room })

    socket.emit("room:new:success", { room })
    socket.broadcast.emit("room:new", room)
}

const join = async (socket: Socket, room_id: string, playerForm: Player) => {
    const room = rooms.find((item) => item.id == room_id)
    console.log("Entrando na sala", room)

    if (room) {
        const player = new Player(playerForm.name, playerForm.icon)
        room.addPlayer(player)

        socket.emit("room:join:success", { room, player })
        socket.broadcast.emit("room:join", { room, player })
    }
}
const leave = async (socket: Socket, roomId: string, playerId: string) => {
    const room = rooms.find((item) => item.id == roomId)

    if (room) {
      
        room.removePlayer(playerId)

        socket.emit("room:leave:success", room.players)

        socket.broadcast.to(roomId).emit("room:leave:left", room.players)
        console.log("Os de fé: ", room.players)
    }
}

const list = async (socket: Socket) => {
    socket.emit("room:list:success", rooms)
    console.log(rooms)
}
const listPlayers = async (socket: Socket, roomId: string) => {
    const room = rooms.find((item) => item.id == roomId)
    socket.emit("room:players:success", room)
    console.log("Jogadores da sala:", { room })
}

export default { create, join, leave, list, listPlayers }
