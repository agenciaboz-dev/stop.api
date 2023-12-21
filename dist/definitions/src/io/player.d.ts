import { Socket } from "socket.io";
declare const _default: {
    create: (socket: Socket<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>, playerForm: PlayerForm) => Promise<void>;
    find: (socket: Socket<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>, playerId: number) => Promise<void>;
};
export default _default;
