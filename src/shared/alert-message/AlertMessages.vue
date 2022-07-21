<template>
    <AlertMessage
    v-for="(message, key) in messages"
    :key="key"
    :message="message"
  />
</template>

<script>
import AlertMessage from "./AlertMessage.vue";
export default {
  name: "alert-messages",
    components: {
    AlertMessage
  },
  props: {
    messages: {
        type: Array,
        default: []
    },
  },
}
</script>

<style>

</style>