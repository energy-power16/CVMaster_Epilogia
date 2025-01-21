import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

import enJSON from './locales/en.json';
import ruJSON from './locales/ru.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { ...enJSON },
        ru: { ...ruJSON },
    },
    lng: 'en',
});
