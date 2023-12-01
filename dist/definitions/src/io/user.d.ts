import { Socket } from "socket.io";
import { ClientBag } from "../definitions/client";
declare const _default: {
    logout: (socket: Socket<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>, clients: ClientBag) => Promise<void>;
    login: (socket: Socket<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>, data: User) => Promise<void>;
};
export default _default;
