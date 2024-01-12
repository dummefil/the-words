export type StateType = {
    auth: boolean;
    loading: boolean;
    error: Error | null;
};
export declare const initialState: StateType;
export declare const updateAuth: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "system/updateAuth">, updateLoading: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "system/updateLoading">, setError: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "system/setError">;
declare const _default: import("redux").Reducer<StateType>;
export default _default;
