import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';
import { useAppSelector } from 'shared/hooks';
import { selectCurrentAppState } from '@redux/appState/selectors';
import classNames from 'classnames';

export const Header = () => {
    const { t } = useTranslation();

    const state = useAppSelector(selectCurrentAppState);

    return (
        <div
            className={classNames(styles.wrapper, {
                [styles.disappear]: state !== 'idle',
            })}
        >
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
