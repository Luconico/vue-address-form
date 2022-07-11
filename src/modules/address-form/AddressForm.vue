<template>
  <h2>Hi {{ $t("address") }}</h2>

  <AlertMessage
    v-for="(message, key) in addressForm.messages"
    :key="key"
    :message="message"
  />

  <form id="address-form" @submit.prevent="onSubmit">
    <InputBuilder
      type="select"
      :label="$t('country')"
      :required="true"
      v-model="country"
      :options="selectOptions['country'] ? selectOptions['country'].value : null"
      :customClass="{ 'custom-form-group': true }"
    />
    <template v-for="(field, index) in addressForm.fields" :key="index">
      <InputBuilder
        v-if="field.needed"
        :type="field.type"
        :disabled="country.length < 1"
        :label="$t(index)"
        :required="field.require"
        v-model="field.value"
        :options="selectOptions[index] ? selectOptions[index].value : null"
        :customClass="{ 'custom-form-group': true, '--error': field.error }"
      />
    </template>
    <button
      class="btn btn-secondary"
      :disabled="addressForm.submited || addressForm.saving || country.length < 1"
    >
      {{ $t("buttons.save") }}
    </button>
  </form>
</template>

<script>
import AlertMessage from "@/shared/alert-message/AlertMessage.vue";
import InputBuilder from "@/shared/input-builder/InputBuilder.vue";
import useAddressForm from "./composables/useAddressForm";

export default {
  name: "address-form",
  components: {
    AlertMessage,
    InputBuilder,
  },
  setup() {
    const { country, addressForm, onSubmit, selectOptions } = useAddressForm();
    return {
      country,
      addressForm,
      onSubmit,
      selectOptions,
    };
  },
};
</script>

<style>
.custom-form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.custom-form-group.--error > input,
.custom-form-group.--error > select,
.custom-form-group.--error > textarea {
  border: 1px solid red;
  box-shadow: 0px 0px 5px 0px rgb(255 0 0);
}
</style>
