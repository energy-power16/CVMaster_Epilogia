import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, State } from './types';

const initialState: AppState = {
    state: 'idle',
};

const appStateSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        changeAppState: (state, action: PayloadAction<State>) => {
            state.state = action.payload;
        },
    },
});

export const { changeAppState } = appStateSlice.actions;
export default appStateSlice.reducer;
