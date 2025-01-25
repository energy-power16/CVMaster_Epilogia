import { Card } from 'features/chat/types/types';
import { FC } from 'react';

export type CardProps = {
    card: Card;
};

import styles from './ActionCard.module.scss';

export const ActionCard: FC<CardProps> = ({ card }) => {
    return (
        <div className={styles.card} onClick={card.handleClick}>
            <div className={styles.cardHeaderIconWrapper}>
                <h3 className={styles.cardHeader}>{card.heading}</h3>
                <span className={styles.cardIcon}>{card.icon}</span>
            </div>
            <p className={styles.cardParagraph}>{card.secondaryParagraph}</p>
        </div>
    );
};
