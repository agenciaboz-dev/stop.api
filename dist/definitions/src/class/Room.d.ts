import { Player } from "./Player";
export declare const rooms: Room[];
export declare class Room {
    host: Player;
    id: string;
    name: string;
    password?: string;
    players: Player[];
    constructor(host: Player, room_name: string, password?: string);
    addPlayer: (player: Player) => void;
    removePlayer: (playerId: string) => void;
}
