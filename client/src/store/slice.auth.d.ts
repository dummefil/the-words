type AuthState = {
    username: undefined | string;
    password: undefined | string;
};
export declare const initialState: AuthState;
export declare const updateAuth: import("@reduxjs/toolkit").ActionCreatorWithPayload<AuthState, "auth/updateAuth">;
declare const _default: import("redux").Reducer<AuthState>;
export default _default;
