import { Message } from '../MessageArea/Message/Message';
import { useTranslation } from 'react-i18next';
import { DownloadMessageContent } from '../MessageArea/DownloadMessageContent/DownloadMessageContent';
import { useStartNewChat } from 'features/chat/hooks/useStartNewChat';
import { useAppSelector } from 'shared/hooks';
import { useEffect, useRef, useState } from 'react';

import styles from './MessagesIfProgressFull.module.scss';
import classNames from 'classnames';

export const MessagesIfProgressFull = () => {
    const { t } = useTranslation();
    const { handleStartNewChat } = useStartNewChat();
    const progress = useAppSelector((state) => state.message.progress);

    const messageRef = useRef<HTMLButtonElement>(null);
    const [hideMessage, setHideMessage] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (messageRef.current) {
                const bottom =
                    messageRef.current.getBoundingClientRect().bottom;
                const difference = window.innerHeight - bottom;
                setHideMessage(difference < 140);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {progress === 100 && (
                <>
                    <Message
                        content={t('hereIsYourResume')}
                        sender="cvmaster"
                    />
                    <Message
                        content={<DownloadMessageContent />}
                        sender="cvmaster"
                    />
                    <div className={styles.newChatWrapper}>
                        <button
                            className={classNames(styles.newChatButton, {
                                [styles.hide]: hideMessage,
                            })}
                            onClick={handleStartNewChat}
                            ref={messageRef}
                        >
                            {t('startNewChat')}
                        </button>
                    </div>
                </>
            )}
        </>
    );
};
