import {UUID} from "crypto";

export class Player {
    username: string
    room: UUID | null
    socketId: string

    constructor(username: string, socketId: string) {
        this.username = username;
        this.room = null
        this.socketId = socketId
    }

    onRoomJoin(roomId: UUID) {
        this.room = roomId
    }

    onRoomLeave() {
        this.room = null;
    }

    onConnect(){}
    onDisconnect(){

    }

}
