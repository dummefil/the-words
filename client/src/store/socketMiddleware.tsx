import {io, Socket} from "socket.io-client";
import {setError, updateAuth, updateLoading} from "./slice.system";
import {RootState} from "./";
import {Middleware} from "@reduxjs/toolkit";
import {updateCurrentRoom, updateRooms} from "./slice.room";
import {serverConnect, socketConnection, socketDisconnect} from "./actions";

// interface ClientToServerEvents {
//     open: () => void;
//     message: (data: never) => void;
//     close: (error: Error) => void;
// }
//
// interface ServerToClientEvents {
//     'get/servers': () => void;
//     basicEmit: (a: number, b: string, c: Blob) => void;
//     withAck: (d: string, callback: (e: number) => void) => void;
// }

// interface InterServerEvents {
//     ping: () => void;
// }
//
// interface SocketData {
//     name: string;
//     age: number;
// }

let socket: Socket;

const buildToken = (getState: () => RootState) => {
    const {auth} = getState();
    const { username, password } = auth;
    return btoa(username + ':' + password);
}

export const socketMiddleware: Middleware<
    NonNullable<unknown>, // Most middleware do not modify the dispatch return value
    RootState
> =  (storeApi) => (next) => (action) => {
    const { dispatch, getState } = storeApi

    const { type, payload } = action

    switch (type) {
        case socketConnection.type:
            dispatch(updateLoading(true))
            socket = io('127.0.0.1:3000', {
                reconnection: true,
                reconnectionDelay: 10000,
                reconnectionDelayMax: 10000,
                auth: {
                    token: buildToken(getState)
                }
            });
            socket.on(SOCKET.CONNECTION, (room) => {
                // console.log(socket?.id); // x8WIv7-mJelg7on_ALbx
                console.log(room);
                console.info('connected to socket');
            });

            socket.on(SOCKET_SERVER.LOAD, (rooms) => {
                dispatch(updateRooms(rooms));
                dispatch(updateAuth({ auth: true }))
                dispatch(updateLoading(false))
            })

            socket.on(SOCKET.CONNECT_ERROR, (error) => {
                console.error(error)
                dispatch(setError(error))
                dispatch(updateLoading(false))
                socket?.disconnect()
            });
            break

        case serverConnect.type:
            socket?.emit(SOCKET_SERVER.CONNECT, payload.id, (serverData: never) => {
                dispatch(updateCurrentRoom(serverData))
            })
            break

        case socketDisconnect.type:
            socket?.disconnect()
            break

        default:
            break
    }

    return next(action)
}
