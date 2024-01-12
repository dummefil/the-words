import {UUID} from "crypto";

export class PlayerStats {
    rating: 0
}

export class PlayerType  {
    username: string
    room: UUID | null
    socketId: string
    id: UUID
    stats: PlayerStats
    onRoomJoin(roomId: UUID): void
    onRoomLeave(): void
    onConnect(): void
    onDisconnect():void
}


export {};
