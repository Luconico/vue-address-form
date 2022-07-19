<template>
  <h2>Hi {{ $t("address") }}</h2>

  <AlertMessage
    v-for="(message, key) in addressForm.messages"
    :key="key"
    :message="message"
  />

  <form id="address-form" class="custom-form" @submit.prevent="onSubmit">
    <InputBuilder
      type="select"
      :label="$t('country')"
      :required="true"
      v-model="country"
      :disabled="isDisabled"
      :options="selectOptions['country'] ? selectOptions['country'].value : null"
      :customClass="{ 'custom-form-group': true }"
    />
    <template v-for="(field, index) in addressForm.fields" :key="index">
      <InputBuilder
        v-if="field.needed"
        :type="field.type"
        :disabled="country.length < 1 || isDisabled"
        :label="$t(index)"
        :required="field.require"
        v-model="field.value"
        :options="selectOptions[index] ? selectOptions[index].value : null"
        :customClass="{ 'custom-form-group': true, '--error': field.error }"
      />
    </template>
    <button
      class="btn btn-secondary"
      :disabled="country.length < 1 || isDisabled"
    >
      <LoaderSpinner v-if="isFetching" color="gray" size="1rem" />{{
        $t(`buttons.${buttonText}`)
      }}
    </button>
  </form>
</template>

<script>
import AlertMessage from "@/shared/alert-message/AlertMessage.vue";
import InputBuilder from "@/shared/forms/input-builder/InputBuilder.vue";
import useAddressForm from "./composables/useAddressForm";
import LoaderSpinner from "@/shared/loader-spinner/LoaderSpinner.vue";

export default {
  name: "address-form",
  components: {
    AlertMessage,
    InputBuilder,
    LoaderSpinner,
  },
  setup() {
    const { country, addressForm, isDisabled, isFetching, buttonText, onSubmit, selectOptions, } = useAddressForm();
    return {
      country,
      isDisabled,
      isFetching,
      addressForm,
      buttonText,
      onSubmit,
      selectOptions,
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
</style>
