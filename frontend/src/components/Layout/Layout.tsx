import { Link, Outlet } from 'react-router';
import { useTranslation } from 'react-i18next';
import { LanguageButton } from 'components/LanguageButton/LanguageButton';

import styles from './Layout.module.scss';

export const Layout = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.globalWrapper}>
            <header className={styles.container}>
                <h2 className={styles.logo}>CVMaster</h2>
                <div className={styles.buttonGroup}>
                    <Link to="/">{t('savedResumes')}</Link>
                    <Link to="/">{t('startNewChat')}</Link>
                    <Link to="/">{t('login')}</Link>
                    <LanguageButton />
                </div>
            </header>
            <Outlet />
        </div>
    );
};
