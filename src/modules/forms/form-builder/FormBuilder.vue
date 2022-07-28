<template>
  <AlertMessages v-if="messages.length > 0" :messages="messages" />
  <form :id="customId" :class="customClass" @submit.prevent="onSumbit">
    <slot />
  </form>
</template>

<script>
import AlertMessages from "@/shared/alert-message/AlertMessages.vue";
import { computed, onBeforeMount } from "vue";
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
    successMsg: {
      type: String,
      default: "Form submited ",
    },
  },
  setup(props) {
    const store = useStore();

    onBeforeMount(() => store.registerModule("formBuilder", formBuilderModule));

    return {
      messages: computed(() => store.getters["formBuilder/messages"]),
      onSumbit: () => {
        store.dispatch("formBuilder/reset");
        store.dispatch("formBuilder/isSubmitting", true);
        console.log(store.getters["formBuilder/isValid"])
        if (!store.getters["formBuilder/isValid"]) return
        // REQUEST
        setTimeout(() => {
          store.dispatch("formBuilder/isSubmitting", false);
          store.dispatch("formBuilder/isSubmited", true);
          store.dispatch("formBuilder/messages", [{
            msgType: "success",
            value: props.successMsg,
          }]);
        }, 2000);
      },
    };
  },
};
</script>

<style>
</style>