import { Player } from "../class/Player"
import { Room } from "../class/Room"

const player = new Player("Fernando", "")

console.log(player)

const room = new Room(player, "primeira sala", "")

console.log(room)

console.log("aumentou os pontos do fernando")
player.addScore(25)

console.log(room)

console.log("aumentou os pontos do fernando mais uma vez")
player.addScore(10)

console.log(room)

console.log("Pontuação final: ", player.totalyPoints())
