import { useTranslation } from 'react-i18next';
import { AIFileIcon, FeatherPenIcon } from 'shared/icons';
import { Card } from 'features/chat/types/types';
import { ActionCard } from '../ActionCard/ActionCard';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { changeAppState } from '@redux/appState/slice';
import classNames from 'classnames';
import { selectCurrentAppState } from '@redux/appState/selectors';
import { Input } from '../Input/Input';
import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './ChatInputField.module.scss';

export const ChatInputField = () => {
    const { t } = useTranslation();
    const [isIdle, setIsIdle] = useState(false);

    const dispatch = useAppDispatch();
    const state = useAppSelector(selectCurrentAppState);

    useEffect(() => {
        setIsIdle(state === 'idle');
    }, [state]);

    const cards: Card[] = [
        {
            heading: t('createFromScratchHeading'),
            icon: <AIFileIcon />,
            secondaryParagraph: t('createFromScratchParagraph'),
            handleClick: () => {
                dispatch(changeAppState('createFromScratch'));
            },
        },
        {
            heading: t('makeFromExistingHeader'),
            icon: <FeatherPenIcon />,
            secondaryParagraph: t('makeFromExistingParagraph'),
            handleClick: () => {
                dispatch(changeAppState('createFromExisting'));
            },
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div
                className={classNames(styles.cards, {
                    [styles.disappear]: !isIdle,
                })}
            >
                {cards.map((card, index) => (
                    <ActionCard card={card} key={index} />
                ))}
            </div>
            <Input />
            <ProgressBar />
        </div>
    );
};
