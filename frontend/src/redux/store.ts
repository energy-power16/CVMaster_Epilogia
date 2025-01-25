import { configureStore } from '@reduxjs/toolkit';
import appStateReducer from './appState/slice';
import messageReducer from './messages/slice';

export const store = configureStore({
    reducer: {
        appState: appStateReducer,
        message: messageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
