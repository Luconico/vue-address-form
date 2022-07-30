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
      :customClass="[customClass, {'--error': field.error}]"
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
