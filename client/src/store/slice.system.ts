import { createSlice } from "@reduxjs/toolkit";

const name = 'system';

export type StateType = {
    auth: boolean
    loading: boolean
    error: Error | null
}

export const initialState: StateType = {
    auth: false,
    loading: false,
    error: null
}

const slice = createSlice({
    name,
    initialState,
    reducers: {
        updateAuth(state, { payload }) {
            state.auth = payload.auth;
        },
        updateLoading(state, {payload} ) {
          state.loading = payload;
        },
        setError(state, { payload }) {
            state.error = payload;
        }
    },
})

export const { updateAuth, updateLoading, setError } = slice.actions

export default slice.reducer
