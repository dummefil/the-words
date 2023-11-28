import { createSlice } from "@reduxjs/toolkit";

const name = 'player';

export type PlayerType = {
    username: string | undefined
    rating?: number
    password?: string
}

export const initialState: PlayerType = {
    username: undefined,
    rating: 0
}


const slice = createSlice({
    name,
    initialState,
    reducers: {
        updatePlayer(state, { payload }: { payload: PlayerType }) {
            state.username = payload.username
            state.password = payload.password
        }
    },
})

export const { updatePlayer } = slice.actions

export default slice.reducer
