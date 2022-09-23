import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/shared/locales/i18n'
import store from './store'
import Maska from 'maska'

createApp(App)
    .use(store)
    .use(i18n)
    .use(Maska)
    .mount('#app')
