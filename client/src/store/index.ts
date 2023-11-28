import {combineReducers, configureStore} from "@reduxjs/toolkit";

import playerReducer from "./slice.player.ts";
import serverReducer from "./slice.server.ts";
import systemReducer from "./slice.system.ts";
import {socketMiddleware} from "./socketMiddleware.tsx";
const rootReducer = combineReducers(
    {
        player: playerReducer,
        server: serverReducer,
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
    // eslint-disable-next-line no-undef,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
