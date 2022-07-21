import { computed } from 'vue';
import { useStore } from 'vuex'

const useCompanyForm = () => {

  const store = useStore()
  const companyForm = computed(() => store.getters['companyForm/form'])

  return {
    companyForm,
    isDisabled: computed(() => store.getters['companyForm/isDisabled']),
    isFetching: computed(() => store.getters['companyForm/isFetching']),
  };

}

export default useCompanyForm