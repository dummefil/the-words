import {combineReducers, configureStore} from "@reduxjs/toolkit";

import playerReducer from "./slice.player.ts";
import roomReducer from "./slice.room.ts";
import systemReducer from "./slice.system.ts";
import authReducer from "./slice.auth.ts";
import {socketMiddleware} from "./socketMiddleware.tsx";

const rootReducer = combineReducers(
    {
        player: playerReducer,
        auth: authReducer,
        room: roomReducer,
        system: systemReducer,
    }
)

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .prepend(
                socketMiddleware,
            )
            .concat()
    ,
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store;
