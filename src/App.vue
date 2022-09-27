<template>
  <FormBuilder
    :customClass="{ 'custom-form': true }"
    @onSubmit="onSubmit"
    :initialValues="initialValues"
    :url="url"
  >
    <CompanyForm :customClass="inputClass" />
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
import CompanyForm from "@/modules/forms/form-modules/company-form/CompanyForm.vue";

import { ref } from "@vue/reactivity";
import { LOCATION } from "./global";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import AddressForm from "@/modules/forms/form-modules/address-form/AddressForm.vue";

export default {
  name: "address-form",
  components: {
    FormBuilder,
    CompanyForm,
    AddressForm,
    ButtonBuilder,
  },
  setup() {
    const store = useStore();
    const location = ref(LOCATION);

    const initialValues = {
      country: "ES",
      address: "prueba",
    };

    return {
      location,
      initialValues,
      url: "/address",
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

