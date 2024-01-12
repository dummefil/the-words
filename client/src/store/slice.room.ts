import { createSlice } from "@reduxjs/toolkit";
const name = 'room';

type RoomsType = {
    list: null | RoomType[],
    current: null | RoomType,
}

const initialState: RoomsType = {
    list: null,
    current: null
};

const slice = createSlice({
    name,
    initialState,
    reducers: {
        updateRooms(state, { payload } : { payload: RoomType[] }) {
            state.list = payload;
        },
        updateCurrentRoom(state, {payload}) {
            state.current = payload;
        }
    }
});

export const {
    updateRooms,
    updateCurrentRoom,
} = slice.actions;

export default slice.reducer
