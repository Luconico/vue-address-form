<template>
  <div class="address-container">
    <InputBuilder
      type="select"
      :label="$t('country')"
      :required="true"
      v-model="country"
      :disabled="isDisabled"
      :name="'country'"
      :options="
        selectOptions['country'] ? selectOptions['country'].value : null
      "
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
        :customClass="[customClass, index]"
        :mask="field.mask"
        :validationFunction="field.validationFunction"
        @onValidated="onValidated"
      />
    </template>
  </div>
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
    location: {
      type: String,
      default: "",
      required: true,
    },
  },
  setup(props) {
    const {
      country,
      addressForm,
      onValidated,
      isDisabled,
      isFetching,
      selectOptions,
    } = useAddressForm(props);

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
