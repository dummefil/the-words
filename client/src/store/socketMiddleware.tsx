import {io, Socket} from "socket.io-client";
import {setError, updateAuth, updateLoading} from "./slice.main.ts";
import {RootState} from "./index.ts";
import {Middleware} from "@reduxjs/toolkit";

interface ClientToServerEvents {
    open: () => void;
    message: (data: never) => void;
    close: (error: Error) => void;
}

interface ServerToClientEvents {
    'get/servers': () => void;
    basicEmit: (a: number, b: string, c: Blob) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

// interface InterServerEvents {
//     ping: () => void;
// }
//
// interface SocketData {
//     name: string;
//     age: number;
// }

let socket: Socket<ClientToServerEvents, ServerToClientEvents> | undefined;


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const buildToken = (getState) => {
    const {player} = getState();
    const { username, password } = player.user;
    return btoa(username + ':' + password);
}

export const socketMiddleware: Middleware<
    NonNullable<unknown>, // Most middleware do not modify the dispatch return value
    RootState
> =  (storeApi) => (next) => (action) => {
    const { dispatch, getState } = storeApi

    const { type } = action

    switch (type) {
        case 'socket/connect':
            dispatch(updateLoading(true))
            socket = io('127.0.0.1:3000', {
                reconnection: true,
                reconnectionDelay: 10000, // defaults to 1000
                reconnectionDelayMax: 10000, // defaults to 5000
                auth: {
                    token: buildToken(getState)
                }
            });
            socket.on("connect", () => {
                console.log(socket?.id); // x8WIv7-mJelg7on_ALbx
                console.info('connected to socket')
                socket?.emit('get/servers')
                dispatch(updateAuth({ auth: true }))
                dispatch(updateLoading(false))
            });

            // socket.on('message', () => {})
            // socket.on('close', (error) => {
            //     console.error(error)
            // })


            socket.on("connect_error", (error) => {
                console.error(error)
                dispatch(setError(error))
                dispatch(updateLoading(false))
            });
            break

        case 'socket/disconnect':
            socket?.disconnect()
            break

        default:
            break
    }

    return next(action)
}
