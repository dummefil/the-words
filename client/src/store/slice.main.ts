import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const name = 'main';

export type PlayerType = {
    name: string | undefined,
    rating?: number,
    password?: string,
}

export type MainInitialState = {
    auth: boolean,
    loading: boolean,
    player: PlayerType
    error?: Error | null
}

export const mainInitialState: MainInitialState = {
    auth: true,
    loading: false,
    player: {
        name: undefined,
        rating: 0
    }
}

// const sleep = (time: number) => {
//     return new Promise(resolve => {
//         setTimeout(resolve, time)
//     })
// }

export const authorize = createAsyncThunk(
    `${name}/authorize`,
    async (_, { rejectWithValue, getState }) => {
    try {
        const { name, password } = (getState() as MainInitialState).player;

        if (!name) {
            throw new Error('NAME_EMPTY')
        }

        if (!password) {
            throw new Error('PASSWORD_EMPTY')
        }

        if (!password && !name) {
            throw new Error('PLAYER_NOT_VALID')
        }

        // await sleep(3000);

        return { name, password, points: 0 };
    } catch (error) {
        return rejectWithValue(error);
    }

    })

const slice = createSlice({
    name,
    initialState: mainInitialState,
    reducers: {
        updatePlayer(state, { payload }: { payload: PlayerType }) {
            state.player = { ...state.player, ...payload }
        },
        updateAuth(state, { payload }) {
            state.auth = payload.auth;
            state.player = mainInitialState.player
        }
    },
    extraReducers(builder) {
        builder.addCase(authorize.pending,
            (state) => {
                state.loading = true;
                state.error = null;
            })
        builder.addCase(authorize.fulfilled,
            (state, {payload}) => {
                state.loading  = false;
                state.player  = payload;
                state.error = null;
                state.auth = true;
            })
        builder.addCase(authorize.rejected, (state, { error }) => {
            state.loading  = false;
            state.error = error as Error;
        })
    }
})

export const { updatePlayer, updateAuth } = slice.actions
export default slice.reducer
