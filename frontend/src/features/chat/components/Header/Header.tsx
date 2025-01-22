import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>
                {t('createWithHeader')}{' '}
                <span className={styles.withAiText}>{t('withAiHeader')}</span>
            </h1>
            <span className={styles.secondaryParagraph}>
                {t('textUnderCreateWithHeader')}
            </span>
        </div>
    );
};
