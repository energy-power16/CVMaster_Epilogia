import { ReactNode } from 'react';

export type MsgSender = 'user' | 'cvmaster';

export type Msg = {
    messageEn: ReactNode;
    messageRu: ReactNode;
    from: MsgSender;
};

export interface MessageState {
    messages: Msg[];
    isThinking: boolean;
    progress: number;
    currentChatId: string | null;
}

export type ChatLanguage = 'ru' | 'en';

export type CVMasterQuery = {
    message: string;
    language: ChatLanguage;
    chatId: string | null;
};

export type InitialMessagesResponse = {
    messagesEn: string[];
    messagesRu: string[];
    chatId: string;
};

export type ResponseMessage = {
    messagesEn: string[];
    messagesRu: string[];
    progress: number;
    isEndOfConversation: boolean;
    pdfFile: '' | null;
};
