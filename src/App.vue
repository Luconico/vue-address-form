<template>
  <FormBuilder :customClass="{ 'custom-form': true }" :messages="messages">
    <template v-slot:inputs>
      <AddressForm />
      <ButtonBuilder
        v-on:click="submit"
        :customClass="{ 'btn btn-secondary': true }"
      />
    </template>
  </FormBuilder>
</template>

<script>
import { computed, ref } from "vue";
import FormBuilder from "@/shared/forms/form-builder/FormBuilder.vue";
import AddressForm from "@/modules/address-form/AddressForm.vue";
import ButtonBuilder from "@/shared/buttons/ButtonBuilder.vue";
import { useStore } from "vuex";

export default {
  name: "address-form",
  components: {
    FormBuilder,
    AddressForm,
    ButtonBuilder,
  },
  setup() {
    const store = useStore();
    const messages = ref([]);
    const formValues = ref({});
    const addressForm = computed(() => store.getters["addressForm/formValues"]);
    return {
      messages,
      submit: () => {
        store.dispatch("addressForm/submit");
        formValues.value = { ...addressForm.value.fields };
        console.log(formValues.value);
        console.log([...addressForm.value.messages]);
      },
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


