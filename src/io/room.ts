import { Socket } from "socket.io"
import { Room, rooms } from "../class/Room"
import { Player } from "../class/Player"

const create = async (socket: Socket, roomForm: RoomForm, playerForm: Player) => {
    console.log("creating new room")
    // const host = new Player(playerForm.name, playerForm.icon)
    console.log(playerForm)
    const room = new Room(playerForm, roomForm.name, roomForm.password)
    console.log(room)

    socket.emit("room:new:success", { room })
    socket.broadcast.emit("room:new", room)
}

const join = async (socket: Socket, room_id: string, playerForm: PlayerForm) => {
    const room = rooms.find((item) => item.id == room_id)

    if (room) {
        const player = new Player(playerForm.name, playerForm.icon)
        room.addPlayer(player)

        socket.emit("room:join:success", { room, player })
        socket.broadcast.emit("room:join", { room, player })
    }
}

const list = async (socket: Socket) => {
    socket.emit("room:list", rooms)
}

export default { create, join, list }
