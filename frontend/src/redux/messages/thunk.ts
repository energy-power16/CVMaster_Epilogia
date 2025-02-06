import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    CVMasterQuery,
    InitialMessagesResponse,
    ResponseMessage,
} from './types';
import { BASE_URL } from 'shared/constants/constants';

export const fetchMessage = createAsyncThunk(
    'messages/fetchMessage',
    async (query: CVMasterQuery) => {
        const response = await fetch(
            `${BASE_URL}/api/message/${query.chatId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: query.message,
                    lang: query.language,
                }),
            },
        );

        if (!response.ok) {
            throw new Error('message was not received for some reason');
        }

        const json: ResponseMessage = await response.json();

        return json;
    },
);

export const fetchFirstMessages = createAsyncThunk(
    'messages/getFirstMessage',
    async () => {
        const response = await fetch(
            `${BASE_URL}/api/createResume/fromScratch`,
            {
                method: 'POST',
            },
        );

        if (!response.ok) {
            throw new Error('something went wrong with initial messages');
        }

        const json: InitialMessagesResponse = await response.json();

        return json;
    },
);
