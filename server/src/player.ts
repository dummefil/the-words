import {UUID} from "crypto";
import {randomUUID} from "node:crypto";

export class Player extends PlayerType {
    constructor(username: string, socketId: string) {
        super();
        this.username = username;
        this.room = null;
        this.socketId = socketId;
        this.id = randomUUID();
        this.stats = new PlayerStats();
    }

    onRoomJoin(roomId: UUID) {
        this.room = roomId;
    }

    onRoomLeave() {
        this.room = null;
    }
}
