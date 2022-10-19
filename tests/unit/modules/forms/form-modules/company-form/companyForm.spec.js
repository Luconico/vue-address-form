import CompanyForm from '@/modules/forms/form-modules/company-form/CompanyForm.vue';
import { shallowMount } from '@vue/test-utils';
import store from '@/store';
import i18n from '@/shared/locales/i18n';

describe('CompanyForm', () => {

  it('should rednder the component', () => {
    const wrapper = shallowMount(CompanyForm, {
        global: {
            plugins: [store, i18n]
        }
    });
    expect(wrapper.exists()).toBe(true);
  });
  
});