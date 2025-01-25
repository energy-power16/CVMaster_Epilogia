import classNames from 'classnames';
import { t } from 'i18next';
import { FormEvent, ChangeEvent, useState, useEffect } from 'react';
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
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (progress !== 100 && !isIdle) {
            setCurrentInputText(event.target.value);
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
                <input
                    className={styles.inputField}
                    type="text"
                    placeholder={t('enterYouAnswer')}
                    disabled={isIdle || progress === 100}
                    value={currentInputText}
                    onChange={handleChange}
                />
            </div>
            <button className={styles.sendButtonWrapper} type="submit">
                <span className={styles.buttonText}>{t('send')}</span>
                <SearchArrowIcon className={styles.sendIcon} />
            </button>
        </form>
    );
};
