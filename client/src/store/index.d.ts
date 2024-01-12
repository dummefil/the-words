declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    player: Partial<PlayerType>;
    auth: {
        username: string | undefined;
        password: string | undefined;
    };
    room: {
        list: RoomType[] | null;
        current: RoomType | null;
    };
    system: import("./slice.system.ts").StateType;
}>, import("redux").AnyAction>;
declare const store: import("@reduxjs/toolkit/dist/configureStore.js").ToolkitStore<import("redux").EmptyObject & {
    player: Partial<PlayerType>;
    auth: {
        username: string | undefined;
        password: string | undefined;
    };
    room: {
        list: RoomType[] | null;
        current: RoomType | null;
    };
    system: import("./slice.system.ts").StateType;
}, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("redux").Middleware<{}, import("redux").CombinedState<{
    player: Partial<PlayerType>;
    auth: {
        username: string | undefined;
        password: string | undefined;
    };
    room: {
        list: RoomType[] | null;
        current: RoomType | null;
    };
    system: import("./slice.system.ts").StateType;
}>, import("redux").Dispatch<import("redux").AnyAction>>, import("@reduxjs/toolkit").ThunkMiddleware<import("redux").CombinedState<{
    player: Partial<PlayerType>;
    auth: {
        username: string | undefined;
        password: string | undefined;
    };
    room: {
        list: RoomType[] | null;
        current: RoomType | null;
    };
    system: import("./slice.system.ts").StateType;
}>, import("redux").AnyAction>]>>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
