import FormBuilder from '@/modules/forms/form-builder/FormBuilder.vue'
import { mount } from '@vue/test-utils'
import store from '@/store'
import i18n from '@/shared/locales/i18n'
import CompanyForm from '@/modules/forms/form-modules/company-form/CompanyForm.vue';
const maska = jest.fn()

describe('FormBuilder.vue', () => {

    const wrapper = mount(FormBuilder, {
        global: {
            plugins: [store, i18n],
            directives: {
                maska
            }
        },
        slots: {
            default: CompanyForm
        },

    })

    it('should render the component', () => {
        expect(wrapper.exists()).toBe(true)
    })

})