"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketMiddleware = void 0;
var socket_io_client_1 = require("socket.io-client");
var slice_system_1 = require("./slice.system");
var slice_room_1 = require("./slice.room");
var actions_1 = require("./actions");
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
var socket;
var buildToken = function (getState) {
    var auth = getState().auth;
    var username = auth.username, password = auth.password;
    return btoa(username + ':' + password);
};
var socketMiddleware = function (storeApi) { return function (next) { return function (action) {
    var dispatch = storeApi.dispatch, getState = storeApi.getState;
    var type = action.type, payload = action.payload;
    switch (type) {
        case actions_1.socketConnection.type:
            dispatch((0, slice_system_1.updateLoading)(true));
            socket = (0, socket_io_client_1.io)('127.0.0.1:3000', {
                reconnection: true,
                reconnectionDelay: 10000,
                reconnectionDelayMax: 10000,
                auth: {
                    token: buildToken(getState)
                }
            });
            socket.on(SOCKET.CONNECTION, function (room) {
                // console.log(socket?.id); // x8WIv7-mJelg7on_ALbx
                console.log(room);
                console.info('connected to socket');
            });
            socket.on(SOCKET_SERVER.LOAD, function (rooms) {
                dispatch((0, slice_room_1.updateRooms)(rooms));
                dispatch((0, slice_system_1.updateAuth)({ auth: true }));
                dispatch((0, slice_system_1.updateLoading)(false));
            });
            socket.on(SOCKET.CONNECT_ERROR, function (error) {
                console.error(error);
                dispatch((0, slice_system_1.setError)(error));
                dispatch((0, slice_system_1.updateLoading)(false));
                socket === null || socket === void 0 ? void 0 : socket.disconnect();
            });
            break;
        case actions_1.serverConnect.type:
            socket === null || socket === void 0 ? void 0 : socket.emit(SOCKET_SERVER.CONNECT, payload.id, function (serverData) {
                dispatch((0, slice_room_1.updateCurrentRoom)(serverData));
            });
            break;
        case actions_1.socketDisconnect.type:
            socket === null || socket === void 0 ? void 0 : socket.disconnect();
            break;
        default:
            break;
    }
    return next(action);
}; }; };
exports.socketMiddleware = socketMiddleware;
