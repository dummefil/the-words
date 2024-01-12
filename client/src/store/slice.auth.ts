import { createSlice } from "@reduxjs/toolkit";

const name = 'auth';

type AuthState = {
    username: undefined | string,
    password: undefined | string,
}

export const initialState: AuthState = {
    username: undefined,
    password: undefined,
}

const slice = createSlice({
    name,
    initialState,
    reducers: {
        updateAuth(state, { payload }: { payload: AuthState }) {
            state.username = payload.username
            state.password = payload.password
        }
    },
})

export const {
    updateAuth
} = slice.actions

export default slice.reducer
