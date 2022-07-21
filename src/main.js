import { createApp } from 'vue'
import App from './App2.vue'
import i18n from '@/modules/address-form/locales/i18n'
import store from './store'


createApp(App)
    .use(store)
    .use(i18n)
    .mount('#app')
