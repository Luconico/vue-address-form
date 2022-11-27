import { computed, onBeforeMount } from 'vue';
import shippingFormModule from '../store';
import { useStore } from 'vuex'

const useShippingForm = () => {

  const store = useStore()
  const shippingForm = computed(() => store.getters['shippingForm/form'])

  onBeforeMount(() => {
    store.registerModule("shippingForm", shippingFormModule);
  })

  return {
    shippingForm,
    onValidated: ({isValid, field}) => { store.dispatch('shippingForm/setIsValid', { isValid, field }) },
    isDisabled: computed(() => store.getters['formBuilder/isDisabled']),
  };

}

export default useShippingForm