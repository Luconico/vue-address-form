<template>
  <template v-for="(field, index) in companyForm" :key="index">
    <InputBuilder
      v-if="field.active"
      :type="field.type"
      :disabled="isDisabled"
      :label="$t(index)"
      :required="field.validations.includes('required')"
      v-model="field.value"
      :name="index"
      :customClass="{ 'custom-form-group': true, '--error': field.error }"
    />
  </template>
</template>

<script>
import InputBuilder from "@/modules/forms/input-builder/InputBuilder.vue";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { checkValidations } from "@/helpers/forms/form-utils";

export default {
  name: "CompanyForm",
  components: {
    InputBuilder,
  },
  setup() {
    const store = useStore();
    const isSubmitting = computed(
      () => store.getters["formBuilder/isSubmitting"]
    );
    const companyForm = ref({
      companyName: {
        value: "",
        validations: ["required", "min:3", "max:255"],
        active: true,
        error: false,
        type: "text",
      },
      cif: {
        value: "",
        validations: ["required", "dni"],
        active: true,
        error: false,
        type: "text",
      },
    });

    const dummyMethod = () => {
      console.log('hola')
    };

    watch(isSubmitting, (newValue) => {
      if (newValue) {
        const messages = checkValidations(companyForm.value);
        console.log(messages.length)
        if (messages.length > 0) store.dispatch('formBuilder/isValid', false)
        store.dispatch("formBuilder/messages", messages);
      }
    });

    return {
      companyForm,
      dummyMethod,
      isDisabled: computed(() => store.getters["formBuilder/isDisabled"]),
    };
  },
};
</script>

<style>
</style>
