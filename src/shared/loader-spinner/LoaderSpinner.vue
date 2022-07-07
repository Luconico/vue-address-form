<template>
  <div
    class="loader"
    v-bind:style="{ width: size, height: size, 'border-top-color': color }"
  ></div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "gray",
    },
    size: {
      type: String,
      default: "40px",
    },
  },
};
</script>

<style scoped>
.loader {
  display: inline-block;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>