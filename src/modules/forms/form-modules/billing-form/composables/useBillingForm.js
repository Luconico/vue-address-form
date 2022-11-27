import { computed, onBeforeMount } from 'vue';
import billingFormModule from '../store';
import { useStore } from 'vuex'

const useBillingForm = () => {

  const store = useStore()
  const billingForm = computed(() => store.getters['billingForm/form'])

  onBeforeMount(() => {
    store.registerModule("billingForm", billingFormModule);
  })

  return {
    billingForm,
    onValidated: ({isValid, field}) => { store.dispatch('billingForm/setIsValid', { isValid, field }) },
    isDisabled: computed(() => store.getters['formBuilder/isDisabled']),
  };

}

export default useBillingForm