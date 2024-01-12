import {UUID} from "crypto";

export enum ROOM_STATE {
    VALIDATION,
    ANSWER,
}

export enum ROOM_LANGUAGES {
    RU
}

export class RoomType {
    id: UUID
    name: string
    players: UUID[]
    state: ROOM_STATE
    lang: ROOM_LANGUAGES
    answer: null | string
    moveIndex: number //todo think about better name
    history: string[]
    join(playerId: UUID): void
    leave(playerId: UUID): void
}

export {};
