import { getCleanFormValues } from '@/modules/forms/helpers/form-utils'

export const setSelectOptions = (state, { newSelect }) => {
    const exist = state.selectOptions.find((select, index) => {
        if (select.select === newSelect.select) {
            state.selectOptions[index] = newSelect
            return true
        }
    })
    if (!exist) state.selectOptions = [...state.selectOptions, newSelect]
}

export const setForm = (state, { shippingForm }) => {
    state.shippingForm = shippingForm
}


export const setFormValues = (state) => {
    state.formValues = {
        fields: {
            ...getCleanFormValues(state.shippingForm.fields)
        }
    }
}

export const setIsValid = (state, { isValid, field }) => {
    Object.entries(state.shippingForm.fields).forEach(([key,value]) => {
        if (key === field) value.valid = isValid
        if (value.validations.length === 0 || !value.active) value.valid = true
    })
    const allFieldsValid = Object.values(state.shippingForm.fields).every((field) => field.valid)
    state.isValid = allFieldsValid
}