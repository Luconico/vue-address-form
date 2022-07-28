import { computed, onBeforeMount } from 'vue';
import countryFormModule from '../store';
import { useStore } from 'vuex'

const useCountryForm = () => {

    const store = useStore()
    const countryForm = computed(() => store.getters['countryForm/form'])

    onBeforeMount(() => {
        store.registerModule("countryForm", countryFormModule);
    })

    return {
        countryForm,
        isDisabled: computed(() => store.getters['countryForm/isDisabled']),
        isFetching: computed(() => store.getters['countryForm/isFetching']),
        selectOptions: {
            country: computed(() => store.getters['countryForm/selectOptions']('country'))
        },
    };

}

export default useCountryForm