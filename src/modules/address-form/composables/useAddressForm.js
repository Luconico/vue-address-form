import { computed, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex'

const useAddressForm = () => {

  const store = useStore()
  const country = ref('')
  const addressForm = computed(() => store.getters['addressForm/form'])

  onMounted(() => {
    store.dispatch('addressForm/getCountrySelect', window.location.pathname.split('/')[1])
  })

  watch(country, (currentValue) => {
    store.dispatch('addressForm/getAddressForm', currentValue)
    store.dispatch('addressForm/getProvinceSelect', currentValue)
  });

  return {
    country,
    addressForm,
    isDisabled: computed(() => store.getters['addressForm/isDisabled']),
    buttonText: computed(() => store.getters['addressForm/buttonText']),
    onSubmit: () => { store.dispatch('addressForm/saveAddressForm') },
    selectOptions: {
      country: computed(() => store.getters['addressForm/selectOptions']('country')),
      province: computed(() => store.getters['addressForm/selectOptions']('province'))
    }
  };

}

export default useAddressForm