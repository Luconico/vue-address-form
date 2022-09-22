<template>
  <AlertMessages v-if="messages.length > 0" :messages="messages" />
  <form :id="customId" :class="customClass" @submit.prevent="onSumbit">
    <slot />
  </form>
</template>

<script>
import { ref } from "vue";
import AlertMessages from "@/shared/alert-message/AlertMessages.vue";
import {  onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "FormBuilder",
  components: {
    AlertMessages,
  },
  emits: ["onSubmit"],
  props: {
    customId: {
      type: String,
      default: "form",
    },
    customClass: {
      type: Object,
      default: () => ({}),
    },
    messages: {
      type: Array,
      default: () => ([]),
    },
  },
  setup(props, { slots, emit }) {
    const store = useStore();
    const formValues = ref({});

    onMounted(() => {
      registerFormModules();
    });

    const registerFormModules = () => {
      slots.default().map((slot) => {
        if (slot.type.name.includes("Form"))
          store.dispatch("formBuilder/pressentModule", slot.type.name.toLowerCase().replace("form", ""));
      });
    };

    return {
      onSumbit: () => {
        formValues.value = {};
  
        store.getters['formBuilder/pressentModules'].map((module) => {
          store.dispatch(`${module}Form/submit`);
          const { fields } = store.getters[`${module}Form/formValues`];
          formValues.value = { ...formValues.value, ...fields };
        });

        emit("onSubmit", formValues.value);
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

.masked-container {
  position: relative;
}
.masked-value {
  position: absolute;
  pointer-events: none;
  top: 2px;
  left: 2px;
  width: 95%;
  background-color: #fff;
  overflow: hidden;
  z-index: 1;
  padding-left: 2px;
  padding-bottom: 1px;
}
input:disabled,
select:disabled,
textarea:disabled,
.masked-disabled {
  cursor: not-allowed;
}
.masked-disabled {
  background-color: #F8F8F8;
  pointer-events: auto;
}
</style>