<template>
  <template v-if="type === 'text'">
    <div :class="customClass">
      <span
        >{{ label }}
        <span :title="$t('msg.required')" v-if="required">*</span></span
      >
      <input :name="name" :type="type" :value="modelValue" @input="updateValue" :disabled="disabled" />
    </div>
  </template>

  <template v-else-if="type === 'select'">
    <div :class="customClass">
      <span
        >{{ label }} 
        <span :title="$t('msg.required')" v-if="required">*</span><LoaderSpinner v-if="!options" color="gray" size="1rem" /></span
      >
      <select :name="name" :value="modelValue" @input="updateValue" :disabled="disabled">
        <option v-if="!options" ></option>
        <template v-if="options">
          <option
            v-for="{ value } in options.options"
            :key="value"
            :value="value"
          >
            {{ $t(`selectOptions.${options.select}.${value}`) }}
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
      <textarea :name="name" :type="type" :value="modelValue" @input="updateValue" :disabled="disabled" />
    </div>
  </template>
</template>

<script>
import LoaderSpinner from "@/shared/loader-spinner/LoaderSpinner.vue";
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
    }
  },
  setup(props, context) {
    return {
      updateValue: (event) => {
        context.emit("update:modelValue", event.target.value);
      }
    };
  },
};
</script>

<style>
</style>