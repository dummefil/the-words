"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var slice_player_ts_1 = require("./slice.player.ts");
var slice_room_ts_1 = require("./slice.room.ts");
var slice_system_ts_1 = require("./slice.system.ts");
var slice_auth_ts_1 = require("./slice.auth.ts");
var socketMiddleware_tsx_1 = require("./socketMiddleware.tsx");
var rootReducer = (0, toolkit_1.combineReducers)({
    player: slice_player_ts_1.default,
    auth: slice_auth_ts_1.default,
    room: slice_room_ts_1.default,
    system: slice_system_ts_1.default,
});
var store = (0, toolkit_1.configureStore)({
    reducer: rootReducer,
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware()
            .prepend(socketMiddleware_tsx_1.socketMiddleware)
            .concat();
    },
    devTools: process.env.NODE_ENV !== 'production'
});
exports.default = store;
