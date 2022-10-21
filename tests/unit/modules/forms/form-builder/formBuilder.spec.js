import FormBuilder from '@/modules/forms/form-builder/FormBuilder.vue'
import { mount } from '@vue/test-utils'
import store from '@/store'
import i18n from '@/shared/locales/i18n'
import CompanyForm from '@/modules/forms/form-modules/company-form/CompanyForm.vue';
const maska = jest.fn()

describe('FormBuilder.vue', () => {

    const propsData = {
        initialValues: {
            companyName: 'test',
            cif: 'test'
        },
        customId: 'testId',
        customClass: {'custom-form': true},
        url: 'test',
        successMessage: 'test',
        errorMessage: 'test'
    }

    const wrapper = mount(FormBuilder, {
        propsData,
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

    it('should match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should render the component with the correct props', () => {
        expect(wrapper.props()).toEqual(propsData)
    })

    it('should render the component with the correct slots', () => {
        expect(wrapper.findComponent(CompanyForm).exists()).toBe(true)
    })
    

})