import { useTranslation } from 'react-i18next';

export type Language = 'en' | 'ru';
export const LANG_LOCAL_STORAGE_KEY = 'lang';

export const useAppLanguage = () => {
    const { t, i18n } = useTranslation();

    const changeLanguagePersistently = (newLanguage: Language) => {
        localStorage.setItem(LANG_LOCAL_STORAGE_KEY, newLanguage);
        i18n.changeLanguage(newLanguage);
    };

    return { t, i18n, changeLanguagePersistently };
};
