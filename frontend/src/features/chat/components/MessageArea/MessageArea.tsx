import { Message } from './Message/Message';
import { useAppSelector } from 'shared/hooks';
import { useTranslation } from 'react-i18next';
import { useSendUserMessage } from 'features/chat/hooks/useSendUserMessage';
import { useEffect, useRef } from 'react';
import { LoadingAnimation } from 'components/LoadingAnimation/LoadingAnimation';

import styles from './MessageArea.module.scss';

export const MessageArea = () => {
    const { isThinking, messages, currentChatId } = useAppSelector(
        (state) => state.message,
    );
    const { i18n } = useTranslation();
    const { getFirstMessages } = useSendUserMessage();

    const messageAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!currentChatId) {
            getFirstMessages();
        }
    }, [currentChatId, getFirstMessages]);

    useEffect(() => {
        if (messageAreaRef.current) {
            window.scrollTo(0, messageAreaRef.current.scrollHeight);
        }
    }, [messages]);

    return (
        <div className={styles.messageAreaWrapper} ref={messageAreaRef}>
            {messages.map((message, index) => (
                <Message
                    content={
                        i18n.language === 'en'
                            ? message.messageEn
                            : message.messageRu
                    }
                    key={index}
                    sender={message.from}
                />
            ))}
            {isThinking && (
                <Message content={<LoadingAnimation />} sender="cvmaster" />
            )}
        </div>
    );
};
