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
      />
    </template>
    <button class="btn btn-secondary" :disabled="addressForm.submited">
      {{$t('buttons.save')}}
    </button>
  </form>
</template>

<script>
import AlertMessage from "@/shared/alert-message/AlertMessage.vue";
import useAddressForm from "./composables/useAddressForm";
import InputBuilder from "../input-builder/InputBuilder.vue";

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
</style>
