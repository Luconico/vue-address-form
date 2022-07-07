<template>
  <h2>Hi {{ $t("msg.postalCodeRequired") }}</h2>

  <AlertMessage
    v-for="(message, key) in addressForm.messages"
    :key="key"
    :message="message"
  />
  <LoaderSpinner size="20px" color="gray" />

  <form id="address-form" @submit.prevent="onSubmit">
      
    <div class="custom-form-group" v-if="addressForm.needed.country">
      <span>{{ $t("country") }}</span>
      <select v-model="addressForm.fields.country">
        <option v-for="{ code } in countries" :key="code">
          {{ $t(`countries.${code}`) }}
        </option>
      </select>
    </div>

    <div class="custom-form-group" v-if="addressForm.needed.address">
      <span>{{ $t("address") }}</span>
      <input type="text" v-model="addressForm.fields.address" />
    </div>

    <div class="custom-form-group" v-if="addressForm.needed.postalCode">
      <span>{{ $t("postalCode") }}</span>
      <input type="text" v-model="addressForm.fields.postalCode" />
    </div>

    <div class="custom-form-group" v-if="addressForm.needed.city">
      <span>{{ $t("city") }}</span>
      <input type="text" v-model="addressForm.fields.city" />
    </div>

    <div class="custom-form-group" v-if="addressForm.needed.province">
      <span>{{ $t("province") }}</span>
      <input type="text" v-model="addressForm.fields.province" />
    </div>

    <div class="custom-form-group" v-if="addressForm.needed.moreInfo">
      <span>{{ $t("moreInfo") }}</span>
      <textarea v-model="addressForm.fields.moreInfo" />
    </div>

    <button :disabled="addressForm.submited">Save</button>
  </form>
</template>

<script>
import AlertMessage from "@/shared/alert-message/AlertMessage.vue";
import LoaderSpinner from "@/shared/loader-spinner/LoaderSpinner.vue";
import useAddressForm from "./composables/useAddressForm";

export default {
  name: "address-form",
  components: {
    AlertMessage,
    LoaderSpinner,
  },
  setup() {
    const { addressForm, onSubmit, countries } = useAddressForm();

    return {
      addressForm,
      onSubmit,
      countries,
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
