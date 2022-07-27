<template>
  <template v-for="(field, index) in companyForm.fields" :key="index">
    <InputBuilder
      v-if="field.active"
      :type="field.type"
      :disabled="isDisabled"
      :label="$t(index)"
      :required="field.required"
      v-model="field.value"
      :name="index"
      :customClass="{ 'custom-form-group': true, '--error': field.error }"
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
  setup() {
    const { companyForm, isDisabled, isFetching, selectOptions } = useCompanyForm();
    return {
      isDisabled,
      isFetching,
      companyForm,
      selectOptions,
    };
  },
};
</script>

<style>
</style>
