/// <reference types="node" />
/// <reference types="node" />
import { Server as SocketIoServer } from "socket.io";
import { Server as HttpServer } from "http";
import { Server as HttpsServer } from "https";
import { Socket } from "socket.io";
export declare const initializeIoServer: (server: HttpServer | HttpsServer) => void;
export declare const getIoInstance: () => SocketIoServer<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>;
export declare const handleSocket: (socket: Socket) => void;
