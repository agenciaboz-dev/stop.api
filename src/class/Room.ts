import { Player } from "./Player"

export const rooms: Room[] = []

export class Room {
    host: Player
    id: string
    name: string
    password?: string

    players: Player[] = []

    constructor(host: Player, room_name: string, password?: string) {
        this.host = host
        this.id = host.id
        this.name = room_name
        this.password = password

        this.players.push(host)
        rooms.push(this)
    }

    addPlayer = (player: Player) => {
        this.players.push(player)
    }
    removePlayer = (playerId: string) => {
        console.log(playerId)
        this.players = this.players.filter((player) => player.id !== playerId)
    }
}
