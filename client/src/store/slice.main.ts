import { createSlice } from "@reduxjs/toolkit";


const name = 'main';

export type UserType = {
    username: string | undefined
    rating?: number
    password?: string
}

export type MainInitialState = {
    auth: boolean
    loading: boolean
    user: UserType
    error?: Error | null
}

export const mainInitialState: MainInitialState = {
    auth: false,
    loading: false,
    user: {
        username: undefined,
        rating: 0
    }
}


const slice = createSlice({
    name,
    initialState: mainInitialState,
    reducers: {
        updatePlayer(state, { payload }: { payload: UserType }) {
            state.user = { ...state.user, ...payload }
        },
        updateAuth(state, { payload }) {
            state.auth = payload.auth;
            state.user = mainInitialState.user
        },
        updateLoading(state, {payload} ) {
          state.loading = payload;
        },
        setError(state, { payload }) {
            state.error = payload;
        }
    },
})

export const { updatePlayer, updateAuth, updateLoading, setError } = slice.actions

export default slice.reducer
