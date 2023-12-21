import { Socket } from "socket.io"
import { Room, rooms } from "../class/Room"
import { Player } from "../class/Player"

const create = async (socket: Socket, playerForm: PlayerForm) => {
    console.log("Criando novo jogador")
    const playerNew = new Player(playerForm.name, playerForm.icon)
    console.log(playerNew)

    socket.emit("player:new:success", playerNew)
    socket.broadcast.emit("player:new", playerNew)
}

const find = async (socket: Socket, playerId:number) => {
    socket.emit("player:list")
}

export default { create, find }
