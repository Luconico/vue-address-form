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

    const initialValues = {
      id: "126399",
      uid: "38886",
      name: "Nombre",
      phone: "555888777",
      status: "1",
      isDefault: false,
      address: {
        country: "DE",
        area: "C",
        locality: "madrid",
        zip: "28024",
        thoroughfare: "direccion",
        info: "dir addic",
      },
      taxIdNumber: "50552730",
      collegiateNumber: "1234",
    };
    const baseURL = "http://192.168.1.100:3000";
    const path = `api/address/billing`;
    const targetId = "126399"; // En caso de que sea un update

    const url = `${baseURL}/${path}${targetId ? `/${targetId}` : ""}?context[country]=${location.value.toUpperCase()}`;

    const body = {
      // uid: "38886", // En caso de hacer un POST
      isDefault: true,
    };
    const headers = {
      csrftoken: "n2LjCxExXQIT3vvtCllzxsXSxccQ8ZlVTD26CYY0hCw",
    };

    return {
      location,
      initialValues,
      url,
      body,
      headers,
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
