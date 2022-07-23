<template>
  <AlertMessages v-if="messages.length > 0" :messages="messages" />
  <form :id="customId" :class="customClass" @submit.prevent="null">
    <slot />
  </form>
</template>

<script>
import AlertMessages from "@/shared/alert-message/AlertMessages.vue";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "form-builder",
  components: {
    AlertMessages,
  },
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
    customId: {
      type: String,
      default: "form",
    },
    customClass: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, {slots}) {

    onMounted(() => {
      console.log({ slots: slots.default() });
    });
  },
};
</script>

<style>
</style>