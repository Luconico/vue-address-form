<template>
  <div class="alert-container" v-bind:class="alertClass">
    <div class="alert__icon" v-bind:class="inconClass"></div>
    <span class="alert__message">{{ $t(message.value) }}</span>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "alert-message",
  props: {
    message: {
      value: {
        type: String,
        required: true,
      },
      msgType: {
        type: String,
        default: "success", // success, error
      },
    },
  },
  setup(props) {
    return {
      alertClass: computed(() =>
        props.message.msgType === "warning" ? "alert--warning" : 
        props.message.msgType === "error" ? "alert--error" : 
        "alert--success"
      ),
      inconClass: computed(() =>
        props.message.msgType === "warning" ? "fa fa-lg fa-exclamation" : 
        props.message.msgType === "error" ? "fa fa-lg fa-ban" : 
        "fa fa-lg fa-check"
      ),
    };
  },
};
</script>

<style>
.alert-container {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border-radius: 0.4rem;
  margin-bottom: 20px;
}

.alert__icon {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 20px;
}

.alert--success {
  background-color: #c8f8c9;
  color: #008a00;
}
.alert--error {
  background-color: #f8d0c8;
  color: #900;
}
</style>
