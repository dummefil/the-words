import {UUID} from "crypto";
import {Player} from "./player";

export class Room {
    id: UUID
    players: (keyof typeof Player)[]

    constructor(id: UUID) {
        this.id = id
        this.players = []
    }

    join(playerId: UUID) {
        this.players.push(playerId);
    }

    leave(playerId: UUID) {
        const playerIndex = this.players.indexOf(playerId);


    }
}
