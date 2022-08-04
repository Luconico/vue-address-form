<template>
  <AlertMessages v-if="messages.length > 0" :messages="messages" />
  <form :id="customId" :class="customClass" @submit.prevent="onSumbit">
    <slot />
  </form>
</template>

<script>
import { ref } from "vue";
import AlertMessages from "@/shared/alert-message/AlertMessages.vue";
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import formBuilderModule from "./store";
export default {
  name: "FormBuilder",
  components: {
    AlertMessages,
  },
  props: {
    customId: {
      type: String,
      default: "form",
    },
    customClass: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { slots, emit }) {
    const store = useStore();
    const messages = ref([]);
    const formValues = ref({});

    onBeforeMount(() => store.registerModule("formBuilder", formBuilderModule));

    onMounted(() => {
      registerFormModules();
    });

    const registerFormModules = () => {
      slots.default().map((slot) => {
        if (slot.type.name.includes("Form"))
          store.dispatch("formBuilder/pressentModule", slot.type.name.toLowerCase().replace("form", ""));
      });
    };

    // presentModules.value.every((module) => store.getters[`${module}Form/isValid`])
    return {
      messages,
      onSumbit: () => {
        store.dispatch("formBuilder/isSubmitting", true);
        messages.value = [];
        formValues.value = {};
        
        store.getters['formBuilder/pressentModules'].map((module) => {
          store.dispatch(`${module}Form/submit`);
          const { fields } = store.getters[`${module}Form/formValues`];
          formValues.value = { ...formValues.value, ...fields };
        });

        console.log(formValues.value);
        emit("submit", formValues.value);
        setTimeout(() => {
          store.dispatch("formBuilder/isSubmitting", false);
          store.dispatch("formBuilder/isSubmited", true);
          messages.value = [{ type: "success", value: "Form Submitted" }];
        }, 1000);
      },
    };
  },
};
</script>

<style>
input:focus-visible,
textarea:focus-visible {
  outline: none;
}

.suggestions-container,
.error-message-container {
  width: 100%;
  position: relative;
}

.suggestions-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
  box-shadow: inset 0px -1px 5px 0px #ccc;
  overflow: hidden;
  z-index: 1;
}

.suggestions-list > span {
  padding: 5px;
  cursor: pointer;
  text-align: left;
}

.suggestions-list > span:hover {
  background-color: #ccc;
}

.error-message {
  position: absolute;
  font-size: 0.8rem;
  font-style: italic;
}
</style>