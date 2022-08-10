import { computed, onBeforeMount, onMounted, ref, watch } from 'vue';
import addressFormModule from '../store';
import { useStore } from 'vuex'

const useAddressForm = (props) => {

  const store = useStore()
  const country = ref('')
  const addressForm = computed(() => store.getters['addressForm/form'])

  onBeforeMount(() => {
    store.registerModule("addressForm", addressFormModule);
  })

  // TODO: GET EXISTING ADDRESS TO EDIT (IF ANY) AND SET IT
  onMounted(() => {
    country.value = props.location.toUpperCase()
    store.dispatch('addressForm/getCountrySelect', props.location)
  })

  watch(country, (currentValue) => {
    store.dispatch('addressForm/setCountry', currentValue)
    store.dispatch('addressForm/getAddressForm', currentValue)
    store.dispatch('addressForm/getProvinceSelect', currentValue)
  });

  return {
    country,
    addressForm,
    onValidated: ({isValid, field}) => { store.dispatch('addressForm/setIsValid', { isValid, field }) },
    isFetching: computed(() => store.getters['addressForm/isFetching']),
    isDisabled: computed(() => store.getters['formBuilder/isDisabled']),
    selectOptions: {
      country: computed(() => store.getters['addressForm/selectOptions']('country')),
      province: computed(() => store.getters['addressForm/selectOptions']('province'))
    },
  };

}

export default useAddressForm