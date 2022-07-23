<template>
  <FormBuilder :customClass="{ 'custom-form': true }" :messages="messages">
    <AddressForm />
    <ButtonBuilder
      v-on:click="submit"
      :isFetching="isFetching"
      :customClass="{ 'btn btn-secondary': true }"
    />
  </FormBuilder>
</template>

<script>
import { computed, ref } from "vue";
import FormBuilder from "@/shared/forms/form-builder/FormBuilder.vue";
import ButtonBuilder from "@/shared/buttons/ButtonBuilder.vue";
import { useStore } from "vuex";
import AddressForm from "@/modules/address-form/AddressForm.vue";

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

    const isFetching = ref(false);

    return {
      messages,
      isFetching,
      submit: () => {
        store.dispatch("addressForm/submit");

        messages.value = [...addressForm.value.messages];
        if (messages.value.length > 0) return;

        formValues.value = {
          ...addressForm.value.fields,
        };

        // TODO: submit form to server
        isFetching.value = true;
        setTimeout(() => {
          isFetching.value = false;
          messages.value = [
            {
              msgType: "success",
              value: "Form submitted",
            },
          ];
          console.log(formValues.value);
        }, 1000);
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

