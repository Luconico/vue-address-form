<template>
  <template v-for="(field, index) in billingForm.fields" :key="index">
    <InputBuilder
      v-if="field.active"
      :type="field.type"
      :disabled="isDisabled"
      :label="$t(index)"
      :required="field.validations.includes('required')"
      v-model="field.value"
      :name="index"
      :validations="field.validations"
      :customClass="[customClass, index]"
      :mask="field.mask"
      :validationFunction="field.validationFunction"
      @onValidated="onValidated"
      :pattern="field.pattern"
    />
  </template>
</template>

<script>
import InputBuilder from "@/modules/forms/input-builder/InputBuilder.vue";
import useBillingForm from "./composables/useBillingForm";

export default {
  name: "BillingForm",
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
    const { billingForm, isDisabled, onValidated } = useBillingForm();
    return {
      isDisabled,
      billingForm,
      onValidated
    };
  },
};
</script>

<style>
</style>
