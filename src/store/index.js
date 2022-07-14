import { createStore } from 'vuex'

import addressForm from '@/modules/address-form/store'
import addressList from '@/modules/address-list/store'

export const store1 = createStore({
    modules: {
        addressForm
    }
})

export const store2 = createStore({
    modules: {
        addressList
    }
})

