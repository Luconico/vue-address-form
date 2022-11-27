<template>
  <FormBuilder
    :customClass="{ 'custom-form': true }"
    @onSubmit="onSubmit"
    :initialValues="initialValues"
    :url="url"
    :body="body"
    :headers="headers"
  >
    <ShippingForm :customClass="inputClass" />
    <BillingForm :customClass="inputClass" />
    <AddressForm :customClass="inputClass" :location="location" />
    <ButtonBuilder
      :type="'submit'"
      :isSubmitting="isSubmitting"
      :disabled="isSubmitting || !isValid"
      :customClass="{ 'btn btn-secondary': true }"
    />
  </FormBuilder>
</template>

<script>
import FormBuilder from "@/modules/forms/form-builder/FormBuilder.vue";
import ButtonBuilder from "@/shared/buttons/ButtonBuilder.vue";

import { ref } from "@vue/reactivity";
import { LOCATION } from "./global";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import ShippingForm from "@/modules/forms/form-modules/shipping-form/ShippingForm.vue";
import AddressForm from "@/modules/forms/form-modules/address-form/AddressForm.vue";
import BillingForm from "@/modules/forms/form-modules/billing-form/BillingForm.vue";

export default {
  name: "address-form",
  components: {
    FormBuilder,
    ShippingForm,
    AddressForm,
    BillingForm,
    ButtonBuilder,
  },
  setup() {
    const store = useStore();
    const location = ref(LOCATION);

    const initialValues = null;
    document.cookie = "SESS322b04e17d937aa49b2811a468603011=LcY6B5BRshMktFRHajYhxM_plauXfeptKYPq6gmE9fw; Path=/; Expires=Sun, 26 Nov 2023 17:20:02 GMT;";
    return {
      location,
      initialValues,
      url: `http://192.168.1.100:3000/api/address/billing?context[country]=${location.value.toUpperCase()}`,
      body: {
        uid: "38886"
      },
      headers: {
        csrftoken: "n2LjCxExXQIT3vvtCllzxsXSxccQ8ZlVTD26CYY0hCw",
      },
      isValid: computed(() => store.getters["formBuilder/isValid"]),
      isSubmitting: computed(() => store.getters["formBuilder/isSubmitting"]),
      inputClass: "custom-form-group mb-4",
      onSubmit: (formValues) => {
        console.log(formValues);
      },
    };
  },
};
</script>

<style>
.custom-form .custom-form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.custom-form .custom-form-group.--error > input,
.custom-form .custom-form-group.--error > select,
.custom-form .custom-form-group.--error > textarea {
  border: 1px solid red;
  box-shadow: 0px 0px 5px 0px rgb(255 0 0);
}

.custom-form .custom-form-group.--warning > input,
.custom-form .custom-form-group.--warning > select,
.custom-form .custom-form-group.--warning > textarea {
  border: 1px solid #ffc107;
  box-shadow: 0px 0px 5px 0px #ffc107;
}
</style>

