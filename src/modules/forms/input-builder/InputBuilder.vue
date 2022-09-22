<template>
  <template v-if="type === 'text'">
    <div :class="[customClass,{'--error': isError, '--warning': isWarning}]">
      <span
        >{{ label }}
        <span :title="$t('msg.required')" v-if="required">*</span>
        <LoaderSpinner v-if="isValidating" color="gray" size="1rem" />
      </span>
      <div v-if="mask" class="masked-container">
        <div class="masked-value" :class="{'masked-disabled': disabled}">
          {{ maskedValue }}
        </div>
      </div>
      <input
        :name="name"
        :type="type"
        :value="modelValue"
        @input="updateValue"
        @focus="onFocus(true)"
        @blur="onFocus(false)"
        :disabled="disabled"
      />
      <div class="suggestions-container">
        <div
          class="suggestions-list"
          v-if="modelValue.length > 0 && filteredValues.length > 0 && isFocus" 
        >
          <span
            v-for="value in filteredValues"
            :key="value"
            v-html="value"
            @click="updateValueFromSuggest(value)"
          ></span>
        </div>
      </div>
      <div class="error-message-container" v-if="errorMessage">
        <div 
          class="error-message" 
          :class="{
            'text-danger': isError, 
            'text-warning': isWarning
            }
        ">
         * {{ $t(errorMessage.value, errorMessage.options) }}
          </div>
      </div>
    </div>
  </template>

  <template v-else-if="type === 'select'">
    <div :class="customClass">
      <span
        >{{ label }} <span :title="$t('msg.required')" v-if="required">*</span
        ><LoaderSpinner v-if="!options" color="gray" size="1rem" />
      </span>
      <select
        :name="name"
        :value="modelValue"
        @input="updateValue"
        @focus="onFocus(true)"
        @blur="onFocus(false)"
        :disabled="disabled"
      >
        <option v-if="!options"></option>
        <template v-if="options">
          <option
            v-for="{ value } in options.options"
            :key="value"
            :value="value"
          >
            {{
              options.translate
                ? $t(`selectOptions.${options.select}.${value}`)
                : value
            }}
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
        @focus="onFocus(true)"
        @blur="onFocus(false)"
        :disabled="disabled"
      />
    </div>
  </template>
</template>

<script>
import LoaderSpinner from "@/shared/loader-spinner/LoaderSpinner.vue";
import { computed, onMounted, ref, watch } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";
import { checkCommonValidations, checkCustomValidation } from '../helpers/validation-utils';
 import { mask } from 'maska'
import { useStore } from 'vuex';
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
      type: Array,
      default: () => ([]),
    },
    options: {
      type: Object,
      default: () => (null),
    },
    validations: {
      type: Array,
      default: () => [],
    },
    validationFunction: {
      type: String,
      default: null,
    },
    mask: {
      type: String,
      default: null,
    },
  },
  setup(props, context) {
    const { t } = useI18n();
    const filteredValues = ref([]);

    const isValidating = ref(false);
    const errorMessage = ref(null);
    const userHasEntered = ref(false);
    const isFocus = ref(false);

    const store = useStore();

    onMounted(() => {
        checkAndSetInitialValues()
    });

    watch(() => props.modelValue, (newValue) => {
        context.emit("onValidated", { isValid: false, field: props.name,  });
        handleSuggestions(newValue);
        hadleCommonValidations(newValue);
        checkAndSetInitialValues()
    });

    const hadleCommonValidations = (newValue) => {
      if (props.validations.length < 1) return;
      errorMessage.value = checkCommonValidations(newValue, props.validations);
      if (!props.validationFunction) context.emit("onValidated", { isValid: (!errorMessage.value), field: props.name,  });
    };

    const handleCustomValidation = async () => {
      if (!props.validationFunction) return;
      isValidating.value = true;
      errorMessage.value = await checkCustomValidation(props.modelValue, props.validationFunction);
      isValidating.value = false;
      const isValid = (!errorMessage.value || errorMessage.value && errorMessage.value.msgType === 'warning');
      context.emit("onValidated", { isValid, field: props.name,  });
    }


    const handleSuggestions = (newValue) => {
      if (props.type !== "text" || !props.options) return;

      filteredValues.value = props.options.options
        .map(({ value }) => value)
        .filter((word) => word.toLowerCase().includes(newValue.toLowerCase()));

      const isSameWord = (filteredValues.value.join("").toString().toLowerCase() === newValue.toLowerCase());
      if (isSameWord) return (filteredValues.value = []);

      filteredValues.value = filteredValues.value
        .map((word) =>  props.options.translate  ? t(`selectOptions.${props.options.select}.${word}`) : word)
        .map((word) => word.replace(RegExp(newValue, "gi"), (str) => "<b>" + str + "</b>"))
        .slice(0, 3)
        .sort();
    };

    const checkAndSetInitialValues = () => {
      if (userHasEntered.value) return;
      if (!store.getters['formBuilder/initialValues']) return
      if (!store.getters['formBuilder/initialValues'][props.name]) return
      context.emit('update:modelValue', store.getters['formBuilder/initialValues'][props.name])
    }

    return {
      filteredValues,
      isValidating,
      errorMessage,
      isFocus,
      maskedValue: computed(() => mask(props.modelValue, props.mask)),
      onFocus(value) {
        userHasEntered.value = true;
        setTimeout(() => {
          isFocus.value = value;
        }, 100);
        if (!value) handleCustomValidation()
      },
      isError: computed(() => errorMessage.value && errorMessage.value.msgType === "error"),
      isWarning: computed(() => errorMessage.value && errorMessage.value.msgType === "warning"),
      updateValueFromSuggest: (value) => {
        const suggested = value
          .replace(RegExp("<b>", "g"), "")
          .replace(RegExp("</b>", "g"), "");
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