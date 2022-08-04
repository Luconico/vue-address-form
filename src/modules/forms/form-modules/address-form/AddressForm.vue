<template>
  <InputBuilder
    type="select"
    :label="$t('country')"
    :required="true"
    v-model="country"
    :disabled="isDisabled"
    :name="'country'"
    :options="selectOptions['country'] ? selectOptions['country'].value : null"
    :customClass="[customClass]"
  />
  <template v-for="(field, index) in addressForm.fields" :key="index">
    <InputBuilder
      v-if="field.active"
      :type="field.type"
      :disabled="isDisabled || isFetching"
      :label="$t(index)"
      :required="field.validations.includes('required')"
      v-model="field.value"
      :name="index"
      :options="selectOptions[index] ? selectOptions[index].value : null"
      :validations="field.validations"
      :customClass="[customClass]"
      @onValidated="onValidated"
    />
  </template>
</template>

<script>
import InputBuilder from "@/modules/forms/input-builder/InputBuilder.vue";
import useAddressForm from "./composables/useAddressForm";

export default {
  name: "AddressForm",
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
    const {
      country,
      addressForm,
      onValidated,
      isDisabled,
      isFetching,
      selectOptions,
    } = useAddressForm();

    return {
      country,
      isDisabled,
      isFetching,
      addressForm,
      onValidated,
      selectOptions,
    };
  },
};
</script>

<style>
</style>
