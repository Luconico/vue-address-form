import AddressForm from '@/modules/forms/form-modules/address-form/AddressForm.vue';
import { shallowMount } from '@vue/test-utils';
import store from '@/store';
import i18n from '@/shared/locales/i18n';

describe('AddressForm', () => {

  it('should rednder the component', () => {
    const wrapper = shallowMount(AddressForm, {
        global: {
            plugins: [store, i18n]
        }
    });
    expect(wrapper.exists()).toBe(true);
  });
  
});