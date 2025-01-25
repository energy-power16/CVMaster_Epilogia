import { Link, Outlet } from 'react-router';
import { useTranslation } from 'react-i18next';
import { LanguageButton } from 'components/LanguageButton/LanguageButton';
import { useAppDispatch } from 'shared/hooks';
import { changeAppState } from '@redux/appState/slice';

import styles from './Layout.module.scss';

export const Layout = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const toggleIdleAppState = () => {
        dispatch(changeAppState('idle'));
    };

    return (
        <div className={styles.globalWrapper}>
            <header className={styles.container}>
                <h2 className={styles.logo} onClick={toggleIdleAppState}>
                    CVMaster
                </h2>
                <div className={styles.buttonGroup}>
                    {/* <Link to="/">{t('savedResumes')}</Link> */}
                    <Link onClick={toggleIdleAppState} to="">
                        {t('startNewChat')}
                    </Link>
                    {/* <Link to="/">{t('login')}</Link> */}
                    <LanguageButton />
                </div>
            </header>
            <Outlet />
        </div>
    );
};
