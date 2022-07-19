<template>
  <AlertMessages :messages="messages"  />

  <form id="address-form" class="custom-form" @submit.prevent="onSubmit">

  </form>
</template>

<script>
import AlertMessages from "@/shared/alert-message/AlertMessage.vue";
export default {
  name: "form-builder",
  components: {
    AlertMessages
  },
};
</script>

<style>
</style>