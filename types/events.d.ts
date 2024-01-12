export {};

export enum SOCKET_SERVER {
    LOAD = 'servers/load',
    CONNECT = 'server/connect',
}

export enum SOCKET_ROOM {
    STATE = 'room/state',
    ANSWER = 'room/answer',
    CONFIRM = 'room/confirm',
}

export enum SOCKET {
    CONNECTION = 'connection',
    DISCONNECT = 'disconnect',
    CONNECT_ERROR = 'connect_error',
}
