import { computed, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex'

const useAddressForm = (emit) => {

  const store = useStore()
  const country = ref('')
  const addressForm = computed(() => store.getters['addressForm/form'])

  // TODO: GET EXISTING ADDRESS TO EDIT (IF ANY) AND SET IT
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
    isFetching: computed(() => store.getters['addressForm/isFetching']),
    selectOptions: {
      country: computed(() => store.getters['addressForm/selectOptions']('country')),
      province: computed(() => store.getters['addressForm/selectOptions']('province'))
    },
    onSubmit: () => {
      store.dispatch('addressForm/submit')
      emit('onSubmit', addressForm.value)
    },
  };

}

export default useAddressForm