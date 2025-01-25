import { RootState } from '@redux/store';

export const selectCurrentAppState = (state: RootState) => state.appState.state;
