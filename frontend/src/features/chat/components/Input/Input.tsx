import classNames from 'classnames';
import { t } from 'i18next';
import { FormEvent, ChangeEvent, useState, useEffect, useRef } from 'react';
import { PinIcon, SearchArrowIcon } from 'shared/icons';
import { useSendUserMessage } from 'features/chat/hooks/useSendUserMessage';
import { useAppSelector } from 'shared/hooks';
import { selectCurrentAppState } from '@redux/appState/selectors';

import styles from './Input.module.scss';

export const Input = () => {
    const [currentInputText, setCurrentInputText] = useState('');
    const state = useAppSelector(selectCurrentAppState);
    const [isIdle, setIsIdle] = useState(false);
    useEffect(() => {
        setIsIdle(state === 'idle');
    }, [state]);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const { currentChatId, isThinking, progress } = useAppSelector(
        (state) => state.message,
    );
    const { sendMessage } = useSendUserMessage();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (progress == 100 || isIdle) return;

        if (currentInputText !== '' && currentChatId && !isThinking) {
            sendMessage(currentInputText, currentChatId);
            setCurrentInputText('');

            if (textAreaRef.current) {
                textAreaRef.current.style.height = 'auto';
            }
        }
    };

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (progress !== 100 && !isIdle) {
            setCurrentInputText(event.target.value);
        }

        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
    };

    return (
        <form
            className={classNames(styles.inputWrapper, {
                [styles.disabled]: isIdle || progress === 100,
            })}
            onSubmit={handleSubmit}
        >
            <div className={styles.leftPartWrapper}>
                <button className={styles.iconWrapper} type="button">
                    <PinIcon className={styles.pinIcon} />
                </button>
                <textarea
                    className={styles.inputField}
                    placeholder={t('enterYouAnswer')}
                    disabled={isIdle || progress === 100}
                    value={currentInputText}
                    onChange={handleChange}
                    rows={1}
                    ref={textAreaRef}
                />
            </div>
            <button className={styles.sendButtonWrapper} type="submit">
                <span className={styles.buttonText}>{t('send')}</span>
                <SearchArrowIcon className={styles.sendIcon} />
            </button>
        </form>
    );
};
