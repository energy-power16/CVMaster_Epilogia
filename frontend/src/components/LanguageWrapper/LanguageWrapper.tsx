import { FC, ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LANG_LOCAL_STORAGE_KEY } from 'shared/hooks/useAppLanguage';

export type LanguageWrapperProps = {
    children: ReactNode;
};

export const LanguageWrapper: FC<LanguageWrapperProps> = ({ children }) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const lang = localStorage.getItem(LANG_LOCAL_STORAGE_KEY);

        if (lang) {
            i18n.changeLanguage(lang);
        } else {
            i18n.changeLanguage(
                navigator.language.startsWith('ru') ? 'ru' : 'en',
            );
        }
    }, [i18n]);

    return <>{children}</>;
};
