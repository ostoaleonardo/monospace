import english from './en.json';
import spanish from './es.json';

const LANGUAGES = {
    en: english,
    es: spanish
}

export const getI18N = (currentLocale = 'en') => {
    return LANGUAGES[currentLocale];
}
