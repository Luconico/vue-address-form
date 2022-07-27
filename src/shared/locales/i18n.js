import { createI18n } from 'vue-i18n';
import datetimeFormats from './datetimeFormats';
import numberFormats from './numberFormats';
import * as es from './es.json';
import * as en from './en.json';
import * as it from './it.json';
import * as pt from './pt.json';
import * as fr from './fr.json';

const i18n = createI18n({
  datetimeFormats,
  numberFormats,
  locale: window.location.pathname.split('/')[1],
  messages: {
    es: { ...es },
    en: { ...en },
    it: { ...it },
    pt: { ...pt },
    fr: { ...fr },
  },
});

export default i18n;
