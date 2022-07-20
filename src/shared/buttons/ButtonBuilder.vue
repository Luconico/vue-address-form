<template>
      <button
        :type="type"
        :class="customClass"
        :disabled="disabled"
    >
      <LoaderSpinner v-if="isFetching" color="gray" size="1rem" />{{  buttonText  }}
    </button>
</template>

<script>
import LoaderSpinner from "@/shared/loader-spinner/LoaderSpinner.vue";
export default {
    name: "button-builder",
    components: {
        LoaderSpinner
    },
    props: {
        type: {
            type: String,
            default: "button"
        },
        buttonText: {
            type: String,
            default: "submit"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        isFetching: {
            type: Boolean,
            default: false
        },
        customClass: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style>

</style>