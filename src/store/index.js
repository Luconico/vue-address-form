import { createStore } from 'vuex'

import addressForm from '@/modules/address-form/store'

const store = createStore({
    modules: {
        addressForm
    }
})


export default store