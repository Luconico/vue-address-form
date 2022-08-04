import { computed, onBeforeMount } from 'vue';
import companyFormModule from '../store';
import { useStore } from 'vuex'

const useCompanyForm = () => {

  const store = useStore()
  const companyForm = computed(() => store.getters['companyForm/form'])

  onBeforeMount(() => {
    store.registerModule("companyForm", companyFormModule);
  })

  return {
    companyForm,
    onValidated: ({isValid, field}) => { store.dispatch('companyForm/setIsValid', { isValid, field }) },
    isDisabled: computed(() => store.getters['formBuilder/isDisabled']),
  };

}

export default useCompanyForm