import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { MsgSender } from '@redux/messages/types';
import classNames from 'classnames';

import styles from './Message.module.scss';

export type MessageProps = {
    content: ReactNode;
    sender: MsgSender;
};

export const Message: FC<MessageProps> = ({ content, sender }) => {
    const messageRef = useRef<HTMLDivElement>(null);
    const [hideMessage, setHideMessage] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (messageRef.current) {
                const bottom =
                    messageRef.current.getBoundingClientRect().bottom;
                const difference = window.innerHeight - bottom;
                setHideMessage(difference < 100);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={classNames(styles.messageWrapper, {
                [styles.userMessage]: sender === 'user',
                [styles.cvMasterMessage]: sender === 'cvmaster',
                [styles.hide]: hideMessage,
            })}
            ref={messageRef}
        >
            <div
                className={classNames(styles.message, {
                    [styles.user]: sender === 'user',
                    [styles.cvMaster]: sender === 'cvmaster',
                })}
            >
                <pre>{content}</pre>
            </div>
        </div>
    );
};
