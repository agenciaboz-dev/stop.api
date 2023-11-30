import { Socket } from "socket.io"

declare interface Client {
    socket: Socket
    user: UserForm
}

declare interface ClientBag {
    get: (socket: Socket) => Client | undefined
    find: (id: number) => Client | undefined
    getUser: (client: Client) => UserForm
    list: () => UserForm[]
    add: (client: Client) => void
    remove: (client: Client | undefined) => void
    update: (client: Client, user: UserForm) => Client[]
}
