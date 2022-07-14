<template>
  <AddressForm />
</template>

<script>
import addressFormState from './modules/address-form/store';
import AddressForm from '@/modules/address-form/AddressForm.vue';
import { onBeforeMount } from '@vue/runtime-core';

export default {
  name: "address-form",
  components: {
    AddressForm
  },
  setup() {
    onBeforeMount(() => {
      window.store.registerModule("addressForm", addressFormState);
    });
  }
};
</script>


