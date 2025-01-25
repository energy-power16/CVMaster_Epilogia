export type State = 'idle' | 'createFromScratch' | 'createFromExisting';

export interface AppState {
    state: State;
}
