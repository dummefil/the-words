import { createSlice } from "@reduxjs/toolkit";

const name = 'player';

type StateType = Partial<PlayerType>;

const initialState: StateType = {};

const slice = createSlice({
    name,
    initialState,
    reducers: {
        updatePlayer(_, { payload }: {payload: PlayerType}) {
           return { ...payload };
        }
    },
})

export const { updatePlayer } = slice.actions

export default slice.reducer
