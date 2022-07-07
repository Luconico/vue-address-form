import { ref } from "@vue/reactivity";
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'

const useAddressForm = () => {

  const store = useStore()
  const addressForm = ref(store.getters['addressForm/form'])

  onMounted(() => {
    store.dispatch('addressForm/getCountries')
  })

  const rules = computed(() => {
    const activeRules = { fields: {} }
    Object.keys(addressForm.value.require).forEach(key => {
      if (addressForm.value.require[key] && addressForm.value.needed[key])
        activeRules.fields[key] = { required }
    })
    return activeRules
  })

  const v$ = useVuelidate(rules, addressForm)

  const isValidForm = () => {
    addressForm.value.messages = []
    Object.keys(rules.value.fields).forEach(key => {
      if (v$.value.fields[key].$invalid)
        addressForm.value.messages.push({ msgType: "error", value: `msg.${key}Required` })
    })
    return addressForm.value.messages.length === 0
  }

  return {
    addressForm,
    countries: computed(() => store.getters['addressForm/countries']),
    onSubmit: async () => {
      if (!isValidForm()) return
      addressForm.value.messages = [{ msgType: "success", value: "msg.addressSaved" }]
      addressForm.value.submited = true;
    },
  };

}

export default useAddressForm