<template>
  <h2>Hi list</h2>
  <ul class="list-group">
    <li class="list-group-item" v-for="(values, index) in list" :key="index">
      <span>
        <strong>{{ $t("country") }}:</strong>
        {{ $t(`selectOptions.country.${values.country}`) }}
        <br />
      </span>
      <span v-if="values.city">
        <strong>{{ $t("city") }}:</strong>
        {{ values.city }}
        <br />
      </span>
      <span v-if="values.address">
        <strong>{{ $t("address") }}:</strong>
        {{ values.address }}
        <br />
      </span>
      <span v-if="values.postalCode">
        <strong>{{ $t("postalCode") }}:</strong>
        {{ values.postalCode }}
        <br />
      </span>
      <span v-if="values.province">
        <strong>{{ $t("province") }}:</strong>
        {{ values.province }}
        <br />
      </span>
      <span v-if="values.moreInfo">
        <strong>{{ $t("moreInfo") }}:</strong>
        {{ values.moreInfo }}
        <br />
      </span>
      <a class="pt-2" href="#">Modificar</a>
    </li>
  </ul>
</template>

<script>
import { onMounted, onUnmounted } from "@vue/runtime-core";
import useAddressList from "./composables/useAddressList.js";

export default {
  name: "address-list",
  setup() {
    const { list, newItem } = useAddressList();

    onMounted(() =>
      window.addEventListener("newAddress", ({ detail }) => newItem(detail))
    );

    onUnmounted(() => window.removeEventListener("newAddress", newItem));

    return {
      list,
    };
  },
};
</script>

<style>
</style>
