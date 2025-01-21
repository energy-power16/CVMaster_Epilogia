import { Link, Outlet } from 'react-router';
import { useTranslation } from 'react-i18next';

import styles from './Layout.module.scss';

export const Layout = () => {
    const { t } = useTranslation();

    return (
        <>
            <header className={styles.container}>
                <h2 className={styles.logo}>CVMaster</h2>
                <div className={styles.buttonGroup}>
                    <Link to="/">{t('savedResumes')}</Link>
                    <Link to="/">{t('savedResumes')}</Link>
                    <Link to="/">{t('login')}</Link>
                </div>
            </header>
            <Outlet />
        </>
    );
};
