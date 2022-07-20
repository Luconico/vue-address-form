<template>
  <AlertMessages v-if="messages.length > 0" :messages="messages" />
  <form :id="customId" :class="customClass" @submit.prevent="null">
    <slot name="inputs" />
  </form>
</template>

<script>
import AlertMessages from "@/shared/alert-message/AlertMessage.vue";
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
  }
};
</script>

<style>
</style>