<template>
  <AlertMessages v-if="messages.length > 0" :messages="messages" />
  <form :id="customId" :class="customClass" @submit.prevent="onSumbit">
    <slot />
  </form>
</template>

<script>
import { ref } from "vue";
import AlertMessages from "@/shared/alert-message/AlertMessages.vue";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
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
  setup(props, { slots }) {
    const store = useStore();
    const messages = ref([]);
    const formValues = ref({});

    const presentModules = ref([]);

    const registerFormModules = () => {
      slots.default().map((slot) => {
        if (slot.type.name.includes("Form"))
          presentModules.value.push(
            slot.type.name.toLowerCase().replace("form", "")
          );
      });
    };

    onMounted(() => {
      registerFormModules();
    });

    return {
      messages,
      onSumbit: () => {
        messages.value = [];
        formValues.value = {};

        presentModules.value.map((module) => {
          store.dispatch(`${module}Form/submit`);
          const moduleValues = store.getters[`${module}Form/formValues`];
          console.log(moduleValues);
          messages.value = [...messages.value, ...moduleValues.messages];
          formValues.value = { ...formValues.value, ...moduleValues.fields };
        });

        if (messages.value.length > 0) return;

        
      },
    };
  },
};
</script>

<style>
</style>