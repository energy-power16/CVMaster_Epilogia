import { Card } from 'features/chat/types/types';
import { FC, MouseEvent } from 'react';
import classNames from 'classnames';

export type CardProps = {
    card: Card;
};

import styles from './ActionCard.module.scss';
import { useTranslation } from 'react-i18next';

export const ActionCard: FC<CardProps> = ({ card }) => {
    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        if (!card.disabled) {
            card.handleClick(event);
        }
    };

    const { t } = useTranslation();

    return (
        <div
            className={classNames(styles.card, {
                [styles.disabled]: card.disabled,
            })}
            onClick={handleClick}
        >
            <div className={styles.cardHeaderIconWrapper}>
                <h3 className={styles.cardHeader}>{card.heading}</h3>
                <span className={styles.cardIcon}>{card.icon}</span>
            </div>
            <p className={styles.cardParagraph}>{card.secondaryParagraph}</p>
            {card.disabled && (
                <div className={styles.disabledBg}>
                    <span className={styles.disabledText}>
                        {t('comingSoon')}
                    </span>
                </div>
            )}
        </div>
    );
};
