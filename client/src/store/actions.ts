import {createAction} from "@reduxjs/toolkit";
import {SERVERS_CONNECT} from "../../../events.ts";
import {ServerType} from "./slice.server.ts";

export const socketConnect = createAction('socket/connect');
export const socketDisconnect = createAction('socket/disconnect');
export const serverConnect = createAction<ServerType>(SERVERS_CONNECT)
