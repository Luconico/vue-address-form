<template>
  <h2>Hi list</h2>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="({ address, country, city }, index) in list"
      :key="index"
    >
      <p class="card-text">
        <strong>{{ $t("country") }}:</strong> {{ country }}<br />
        <strong>{{ $t("city") }}:</strong> {{ city }}<br />
        <strong>{{ $t("address") }}:</strong> {{ address }}<br />
      </p>
      <a href="#">Modificar</a>
    </li>
  </ul>
</template>

<script>
import useAddressList from "./composables/useAddressList.js";

export default {
  name: "address-list",
  setup() {
    const { list } = useAddressList();
    return {
      list,
    };
  },
};
</script>

<style>
</style>
