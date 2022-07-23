<template>
  <FormBuilder :customClass="{ 'custom-form': true }">
    <CompanyForm />
    <AddressForm />
    <ButtonBuilder
      :type="'submit'"
      :customClass="{ 'btn btn-secondary': true }"
    />
  </FormBuilder>
</template>

<script>
import FormBuilder from "@/shared/forms/form-builder/FormBuilder.vue";
import ButtonBuilder from "@/shared/buttons/ButtonBuilder.vue";
import AddressForm from "@/modules/address-form/AddressForm.vue";
import CompanyForm from '@/modules/company-form/CompanyForm.vue';

export default {
  name: "address-form",
  components: {
    FormBuilder,
    AddressForm,
    CompanyForm,
    ButtonBuilder,
  }
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
</style>

