import { computed } from 'vue';
import { useStore } from 'vuex'

const useAddressList = () => {
  const store = useStore()

  return {
    list: computed(() => store.getters['addressList/list']),
    newItem: (item) => store.commit('addressList/setListItem', { item })
  };

}

export default useAddressList