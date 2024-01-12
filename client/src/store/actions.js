"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverConnect = exports.socketDisconnect = exports.socketConnection = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.socketConnection = (0, toolkit_1.createAction)(SOCKET.CONNECTION);
exports.socketDisconnect = (0, toolkit_1.createAction)(SOCKET.DISCONNECT);
exports.serverConnect = (0, toolkit_1.createAction)(SOCKET_SERVER.CONNECT);
