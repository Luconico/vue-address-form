import { createI18n } from 'vue-i18n';
import datetimeFormats from './datetimeFormats';
import numberFormats from './numberFormats';
import * as es from './es.json';
import * as en from './en.json';
import * as it from './it.json';
import * as pt from './pt.json';
import * as fr from './fr.json';
import { LOCATION } from '@/global';

const i18n = createI18n({
  datetimeFormats,
  numberFormats,
  locale: LOCATION,
  messages: {
    es: { ...es },
    en: { ...en },
    it: { ...it },
    pt: { ...pt },
    fr: { ...fr },
  },
});

export default i18n;
