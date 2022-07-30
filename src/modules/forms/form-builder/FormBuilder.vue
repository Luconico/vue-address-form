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
          messages.value = [...messages.value, ...moduleValues.messages];
          formValues.value = { ...formValues.value, ...moduleValues.fields };
        });
        console.log(formValues.value);
        if (messages.value.length > 0) return;
      },
    };
  },
};
</script>

<style>
.autocomplete-container {
  width: 100%;
  position: relative;
}
.autocomplete-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  z-index: 1;
}

.autocomplete-list > span {
  padding: 5px;
  cursor: pointer;
  text-align: left;
}

.autocomplete-list > span:hover {
  background-color: #ccc;
}
</style>