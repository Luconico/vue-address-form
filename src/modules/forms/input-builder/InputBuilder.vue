<template>
  <template v-if="type === 'text'">
    <div :class="customClass">
      <span
        >{{ label }}
        <span :title="$t('msg.required')" v-if="required">*</span></span
      >
      <input
        :name="name"
        :type="type"
        :value="modelValue"
        @input="updateValue"
        :disabled="disabled"
      />
      <div class="suggestions-container">
        <div
          class="suggestions-list"
          v-if="modelValue.length > 0 && filteredValues.length > 0"
        >
          <span
            v-for="value in filteredValues"
            :key="value"
            v-html="value"
            @click="setFromSuggest(value)"
          ></span>
        </div>
      </div>
      
    </div>
  </template>

  <template v-else-if="type === 'select'">
    <div :class="customClass">
      <span
        >{{ label }} <span :title="$t('msg.required')" v-if="required">*</span
        ><LoaderSpinner v-if="!options" color="gray" size="1rem"
      /></span>
      <select
        :name="name"
        :value="modelValue"
        @input="updateValue"
        :disabled="disabled"
      >
        <option v-if="!options"></option>
        <template v-if="options">
          <option
            v-for="{ value } in options.options"
            :key="value"
            :value="value"
          >
            {{ options.translate ? $t(`selectOptions.${options.select}.${value}`) : value }}
          </option>
        </template>
      </select>
    </div>
  </template>

  <template v-else-if="type === 'textarea'">
    <div :class="customClass">
      <span
        >{{ label }}
        <span :title="$t('msg.required')" v-if="required">*</span></span
      >
      <textarea
        :name="name"
        :type="type"
        :value="modelValue"
        @input="updateValue"
        :disabled="disabled"
      />
    </div>
  </template>
</template>

<script>
import LoaderSpinner from "@/shared/loader-spinner/LoaderSpinner.vue";
import { ref, watch } from '@vue/runtime-core';
import { useI18n } from 'vue-i18n'

export default {
  components: { LoaderSpinner },
  name: "InputBuilder",
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: Object,
      default: () => ({}),
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, context) {
    const { t } = useI18n()
    const filteredValues = ref([]);

    watch(() => props.modelValue, (newValue) => {
      handleSuggestions(newValue);
      hadleValidations(newValue);
    });

    const handleSuggestions = (newValue) => {
      if (props.type !== 'text' || !props.options) return
      
      filteredValues.value = props.options.options.map(({value}) => value)
      .filter((word) => word.toLowerCase().includes(newValue.toLowerCase()))

      const isSameWord = (filteredValues.value.join("").toString().toLowerCase() === newValue.toLowerCase())
      if (isSameWord) return filteredValues.value = []
  
      filteredValues.value = filteredValues.value
      .map((word) => props.options.translate ? t(`selectOptions.${props.options.select}.${word}`) : word)
      .map((word) => word.replace(RegExp(newValue, "gi"), (str) => "<b>" + str + "</b>"))
      .slice(0, 3).sort();
    }

    const hadleValidations = (newValue) => {
      console.log(newValue)
      return true
    }

    return {
      filteredValues,
      setFromSuggest: (value) => {
        const suggested = value.replace(RegExp("<b>", "g"), "").replace(RegExp("</b>", "g"), "");
        context.emit("update:modelValue", suggested);
      },
      updateValue: (event) => {
        context.emit("update:modelValue", event.target.value);
      },
    };
  },
};
</script>

<style>
</style>