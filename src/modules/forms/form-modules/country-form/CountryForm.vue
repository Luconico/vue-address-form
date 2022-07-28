<template>
    <InputBuilder
    type="select"
    :label="$t('country')"
    :required="true"
    v-model="country"
    :disabled="isDisabled"
    :name="'country'"
    :options="selectOptions['country'] ? selectOptions['country'].value : null"
    :customClass="{ 'custom-form-group': true }"
  />
</template>

<script>
export default {

}
</script>

<style>

</style>