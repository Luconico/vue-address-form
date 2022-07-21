import { createStore } from 'vuex'

import addressForm from '@/modules/address-form/store'
import companyForm from '@/modules/company-form/store'

const store = createStore({
    modules: {
        addressForm,
        companyForm
    }
})


export default store