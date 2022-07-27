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
    isDisabled: computed(() => store.getters['companyForm/isDisabled']),
    isFetching: computed(() => store.getters['companyForm/isFetching']),
  };

}

export default useCompanyForm