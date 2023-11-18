import {configureStore} from "@reduxjs/toolkit";

import mainReducer from "./slice.main";

const store = configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // eslint-disable-next-line no-undef,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    devTools: process.env.NODE_ENV !== 'production'
})
export default store;
