<template>
      <button
      class="btn btn-secondary"
      :disabled="country.length < 1 || isDisabled"
    >
      <LoaderSpinner v-if="isFetching" color="gray" size="1rem" />{{
        $t(`buttons.${buttonText}`)
      }}
    </button>
</template>

<script>
export default {

}
</script>

<style>

</style>