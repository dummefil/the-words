import { createSlice } from "@reduxjs/toolkit";
import {PlayerType} from "./slice.player.ts";
import {UUID} from "crypto";

const name = 'server';

export type ServerType = {
    id: UUID
    name: string
    mode: string[]
    players: PlayerType[]
    count: number
    maxCount: number
    lang: string
}

type StateType = {
    list: null | ServerType[],
    current: null,
}

const initialState: StateType = {
    list: null,
    current: null,
};
const slice = createSlice({
    name,
    initialState,
    reducers: {
        updateServers(state, { payload } : { payload: ServerType[] }) {
            state.list = payload;
        },
        updateCurrentServer(state, {payload}) {
            state.current = payload;
        }
    }
});

export const {
    updateServers,
    updateCurrentServer,
} = slice.actions;

export default slice.reducer
