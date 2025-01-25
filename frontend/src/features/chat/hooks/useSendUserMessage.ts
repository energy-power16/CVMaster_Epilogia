import { askCVMaster } from '@redux/messages/slice';
import { fetchFirstMessages, fetchMessage } from '@redux/messages/thunk';
import { ChatLanguage, CVMasterQuery } from '@redux/messages/types';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks';

export const useSendUserMessage = () => {
    const dispatch = useAppDispatch();
    const { i18n } = useTranslation();

    const sendMessage = useCallback(
        (message: string, chatId: string) => {
            const messageQuery: CVMasterQuery = {
                chatId: chatId,
                message: message,
                language: i18n.language as ChatLanguage,
            };

            dispatch(askCVMaster(messageQuery));
            dispatch(fetchMessage(messageQuery));
        },
        [dispatch, i18n.language],
    );

    const getFirstMessages = useCallback(() => {
        dispatch(fetchFirstMessages());
    }, [dispatch]);

    return { sendMessage, getFirstMessages };
};
