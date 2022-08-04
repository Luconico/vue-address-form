<template>
  <template v-for="(field, index) in companyForm.fields" :key="index">
    <InputBuilder
      v-if="field.active"
      :type="field.type"
      :disabled="isDisabled"
      :label="$t(index)"
      :required="field.validations.includes('required')"
      v-model="field.value"
      :name="index"
      :validations="field.validations"
      :customClass="[customClass, {'--error': field.error}]"
      @onValidated="onValidated"
    />
  </template>
</template>

<script>
import InputBuilder from "@/modules/forms/input-builder/InputBuilder.vue";
import useCompanyForm from "./composables/useCompanyForm";

export default {
  name: "CompanyForm",
  components: {
    InputBuilder,
  },
   props: {
    customClass: {
      type: String,
      default: "",
    },
  },
  setup() {
    const { companyForm, isDisabled, onValidated } = useCompanyForm();
    return {
      isDisabled,
      companyForm,
      onValidated
    };
  },
};
</script>

<style>
</style>
