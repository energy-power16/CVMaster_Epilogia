import { useTranslation } from 'react-i18next';

export type Language = 'en' | 'ru';
const LANG_LOCAL_STORAGE_KEY = 'lang';

export const useAppLanguage = () => {
    const { t, i18n } = useTranslation();

    const changeLanguagePersistently = (newLanguage: Language) => {
        localStorage.setItem(
            LANG_LOCAL_STORAGE_KEY,
            JSON.stringify(newLanguage),
        );
        i18n.changeLanguage(newLanguage);
    };

    return { t, i18n, changeLanguagePersistently };
};
