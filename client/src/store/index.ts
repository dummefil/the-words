import {configureStore} from "@reduxjs/toolkit";

import mainReducer from "./slice.main.ts";
import {socketMiddleware} from "./socketMiddleware.tsx";
import {Socket} from "../socket/Socket.tsx";

const store = configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) => [socketMiddleware(new Socket()), ...getDefaultMiddleware()],
    // eslint-disable-next-line no-undef,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    devTools: process.env.NODE_ENV !== 'production'
})
export default store;
