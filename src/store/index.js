import formBuilderModule from '@/modules/forms/form-builder/store'
import { createStore } from 'vuex'

const store = createStore({
    modules: {
        formBuilder: formBuilderModule
    }
})

export default store