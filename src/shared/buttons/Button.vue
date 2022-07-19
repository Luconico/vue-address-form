<template>
      <button
      class="btn btn-secondary"
      :disabled="country.length < 1 || isDisabled"
    >
      <LoaderSpinner v-if="isFetching" color="gray" size="1rem" />{{  buttonText  }}
    </button>
</template>

<script>
import LoaderSpinner from "@/shared/loader-spinner/LoaderSpinner.vue";
export default {
    name: "button",
    components: {
        LoaderSpinner
    },
    props: {
        buttonText: {
            type: String,
            default: "submit"
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
        isFetching: {
            type: Boolean,
            default: false
        }
    },

}
</script>

<style>

</style>