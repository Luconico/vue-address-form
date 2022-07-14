import { computed } from 'vue';
import { useStore } from 'vuex'

const useAddressList = () => {
  const store = useStore()

  return {
    list: computed(() => store.getters['addressList/list']),
  };

}

export default useAddressList