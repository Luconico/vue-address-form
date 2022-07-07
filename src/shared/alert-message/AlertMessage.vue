<template>
  <div class="alert-container" v-bind:class="alertClass">
    <div class="alert__icon" v-bind:class="inconClass"></div>
    <span class="alert__message">{{ $t(message.value) }}</span>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";
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
    const isSuccess = ref(true);

    onMounted(() => {
      if (props.message.msgType === "error") isSuccess.value = false;
    });

    watch(
      () => props.message.msgType,
      (newValue) =>
        newValue === "error"
          ? (isSuccess.value = false)
          : (isSuccess.value = true)
    );

    return {
      alertClass: computed(() =>
        isSuccess.value ? "alert--success" : "alert--error"
      ),
      inconClass: computed(() =>
        isSuccess.value ? "fa fa-lg fa-check" : "fa fa-lg fa-ban"
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
