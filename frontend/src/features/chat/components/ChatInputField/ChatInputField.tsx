import { useTranslation } from 'react-i18next';
import { PinIcon } from 'shared/icons/PinIcon';
import { SearchArrowIcon } from 'shared/icons/SearchArrowIcon';
import { AIFileIcon, FeatherPenIcon } from 'shared/icons';

import styles from './ChatInputField.module.scss';

export const ChatInputField = () => {
    const { t } = useTranslation();

    const cards = [
        {
            heading: t('createFromScratchHeading'),
            icon: <AIFileIcon />,
            secondaryParagraph: t('createFromScratchParagraph'),
        },
        {
            heading: t('makeFromExistingHeader'),
            icon: <FeatherPenIcon />,
            secondaryParagraph: t('makeFromExistingParagraph'),
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.cards}>
                {cards.map((card) => (
                    <div className={styles.card}>
                        <div className={styles.cardHeaderIconWrapper}>
                            <h3 className={styles.cardHeader}>
                                {card.heading}
                            </h3>
                            <span className={styles.cardIcon}>{card.icon}</span>
                        </div>
                        <p className={styles.cardParagraph}>
                            {card.secondaryParagraph}
                        </p>
                    </div>
                ))}
            </div>
            <div className={styles.inputWrapper}>
                <div className={styles.leftPartWrapper}>
                    <button className={styles.iconWrapper}>
                        <PinIcon className={styles.pinIcon} />
                    </button>
                    <input
                        className={styles.inputField}
                        type="text"
                        placeholder={t('enterYouAnswer')}
                    />
                </div>
                <button className={styles.sendButtonWrapper}>
                    <span className={styles.buttonText}>{t('send')}</span>
                    <SearchArrowIcon className={styles.sendIcon} />
                </button>
            </div>
            <div className={styles.underInputWrapper}>
                {t('answerToMakeResume')}
            </div>
        </div>
    );
};
