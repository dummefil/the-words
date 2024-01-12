import {createAction} from "@reduxjs/toolkit";

export const socketConnection = createAction(SOCKET.CONNECTION);
export const socketDisconnect = createAction(SOCKET.DISCONNECT);
export const serverConnect = createAction<RoomType>(SOCKET_SERVER.CONNECT);
