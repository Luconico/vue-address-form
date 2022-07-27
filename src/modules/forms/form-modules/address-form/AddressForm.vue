<template>
  <InputBuilder
    type="select"
    :label="$t('country')"
    :required="true"
    v-model="country"
    :disabled="isDisabled"
    :name="'country'"
    :options="selectOptions['country'] ? selectOptions['country'].value : null"
    :customClass="{ 'custom-form-group': true }"
  />
  <template v-for="(field, index) in addressForm.fields" :key="index">
    <InputBuilder
      v-if="field.active"
      :type="field.type"
      :disabled="isDisabled"
      :label="$t(index)"
      :required="field.required"
      v-model="field.value"
      :name="index"
      :options="selectOptions[index] ? selectOptions[index].value : null"
      :customClass="{ 'custom-form-group': true, '--error': field.error }"
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
  setup() {

    const {
      country,
      addressForm,
      isDisabled,
      isFetching,
      selectOptions,
    } = useAddressForm();

    return {
      country,
      isDisabled,
      isFetching,
      addressForm,
      selectOptions,
    };
  },
};
</script>

<style>

</style>
