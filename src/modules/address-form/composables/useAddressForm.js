import { computed, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex'

const useAddressForm = () => {

  const store = useStore()
  const country = ref('')
  const addressForm = computed(() => store.getters['addressForm/form'])

  onMounted(() => {
    store.dispatch('addressForm/getCountrySelect', window.location.pathname.split('/')[1])
  })

  watch(country, (currentValue) => {
    store.dispatch('addressForm/getAddressForm', currentValue)
    store.dispatch('addressForm/getProvinceSelect', currentValue)
  });

  const isValidForm = () => {
    addressForm.value.messages = []
    if (country.value === '') addressForm.value.messages.push({ msgType: "error", value: `msg.countryRequired` })
    Object.keys(addressForm.value.fields).forEach(key => {
      if (addressForm.value.fields[key].require && addressForm.value.fields[key].needed && addressForm.value.fields[key].value === '')
        addressForm.value.messages.push({ msgType: "error", value: `msg.${key}Required` })
    })
    return addressForm.value.messages.length === 0
  }

  return {
    country,
    addressForm,
    onSubmit: () => {
      if (!isValidForm()) return
      addressForm.value.messages = [{ msgType: "success", value: "msg.addressSaved" }]
      addressForm.value.submited = true;
    },
    selectOptions: {
      country: computed(() => store.getters['addressForm/selectOptions']('country')),
      province: computed(() => store.getters['addressForm/selectOptions']('province'))
    },
  };

}

export default useAddressForm