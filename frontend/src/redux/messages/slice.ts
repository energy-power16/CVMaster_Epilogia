import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    CVMasterQuery,
    InitialMessagesResponse,
    MessageState,
    Msg,
    ResponseMessage,
} from './types';
import { fetchFirstMessages, fetchMessage } from './thunk';

const initialState: MessageState = {
    messages: [],
    progress: 0,
    isThinking: false,
    currentChatId: null,
};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        resetMessages: (state) => {
            state.currentChatId = initialState.currentChatId;
            state.isThinking = initialState.isThinking;
            state.messages = initialState.messages;
            state.progress = initialState.progress;
        },
        askCVMaster: (state, action: PayloadAction<CVMasterQuery>) => {
            const newMessage: Msg = {
                messageEn: action.payload.message,
                messageRu: action.payload.message,
                from: 'user',
            };

            state.messages.push(newMessage);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMessage.pending, (state) => {
            state.isThinking = true;
        });
        builder.addCase(
            fetchMessage.fulfilled,
            (state, action: PayloadAction<ResponseMessage>) => {
                const newMessages: Msg[] = [];

                for (let i = 0; i < action.payload.messagesEn.length; i++) {
                    const newMessage: Msg = {
                        messageEn: action.payload.messagesEn[i],
                        messageRu: action.payload.messagesRu[i],
                        from: 'cvmaster',
                    };

                    newMessages.push(newMessage);
                }

                state.messages = [...state.messages, ...newMessages];
                state.isThinking = false;
                state.progress = action.payload.progress;
            },
        );

        builder.addCase(fetchFirstMessages.pending, (state) => {
            state.isThinking = true;
        });
        builder.addCase(
            fetchFirstMessages.fulfilled,
            (state, action: PayloadAction<InitialMessagesResponse>) => {
                const newMessages: Msg[] = [];

                for (let i = 0; i < action.payload.messagesEn.length; i++) {
                    const newMessage: Msg = {
                        messageEn: action.payload.messagesEn[i],
                        messageRu: action.payload.messagesRu[i],
                        from: 'cvmaster',
                    };

                    newMessages.push(newMessage);
                }

                state.messages = [...state.messages, ...newMessages];
                state.isThinking = false;
                state.progress = 0;
                state.currentChatId = action.payload.chatId;
            },
        );
    },
});

export const { askCVMaster, resetMessages } = messageSlice.actions;
export default messageSlice.reducer;
