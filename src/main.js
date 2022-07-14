import { createApp } from 'vue'
import App1 from './App1.vue'
import App2 from './App2.vue'
import i18nAddressForm from '@/modules/address-form/locales/i18n'
import i18nAddressList from '@/modules/address-list/locales/i18n'
import { store1, store2 } from './store'


createApp(App1)
    .use(store1)
    .use(i18nAddressForm)
    .mount('#app1')


createApp(App2)
    .use(store2)
    .use(i18nAddressList)
    .mount('#app2')
