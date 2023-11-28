import {io, Socket} from "socket.io-client";
import {setError, updateAuth, updateLoading} from "./slice.system.ts";
import {RootState} from "./index.ts";
import {Middleware} from "@reduxjs/toolkit";
import {SERVERS_CONNECT, SERVERS_LOAD} from "../../../events.ts";
import {updateCurrentServer, updateServers} from "./slice.server.ts";
import {serverConnect, socketConnect, socketDisconnect} from "./actions.ts";

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
    const { username, password } = player;
    return btoa(username + ':' + password);
}

export const socketMiddleware: Middleware<
    NonNullable<unknown>, // Most middleware do not modify the dispatch return value
    RootState
> =  (storeApi) => (next) => (action) => {
    const { dispatch, getState } = storeApi

    const { type, payload } = action

    switch (type) {
        case socketConnect.type:
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
                // console.log(socket?.id); // x8WIv7-mJelg7on_ALbx
                console.info('connected to socket')
            });

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            socket?.on(SERVERS_LOAD, (list) => {
                dispatch(updateServers(list));
                dispatch(updateAuth({ auth: true }))
                dispatch(updateLoading(false))
            })

            socket.on("connect_error", (error) => {
                console.error(error)
                dispatch(setError(error))
                dispatch(updateLoading(false))
                socket?.disconnect()
            });
            break

        case serverConnect.type:
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // todo be sure serverData is not a number
            socket?.emit(SERVERS_CONNECT, payload.id, (serverData) => {
                dispatch(updateCurrentServer(serverData))
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
