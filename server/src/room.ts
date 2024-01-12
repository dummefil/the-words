import {UUID} from "crypto";

export class Room extends RoomType {
    constructor(id: UUID, name: string) {
        super();
        this.id = id;
        this.name = name;
        this.players = [];
        this.state = ROOM_STATE.ANSWER;
        this.moveIndex = 0;
        this.history = [];
        this.lang = ROOM_LANGUAGES.RU;
    }

    join(playerId: UUID) {
        this.players.push(playerId);
    }

    leave(playerId: UUID) {
        const playerIndex = this.players.indexOf(playerId);
        this.players = this.players.slice(playerIndex, 1);
    }
}
