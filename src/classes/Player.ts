import { uid } from "uid"

export class Player {
    id: string
    name: string
    score: number
    count: number[] = []
    icon: string

    constructor(name: string, icon: string) {
        this.id = uid()
        this.name = name
        this.icon = icon
        this.score = 0
    }

    addScore = (score: number) => {
        this.count.push(score)
        this.score = this.count.reduce((cnt, curr) => cnt + curr, 0)
    }

    totalyPoints = () => {
        const points = this.count.reduce((total, current) => {
            const sum = total + current
            return sum
        }, 0)
        return points
    }
}
