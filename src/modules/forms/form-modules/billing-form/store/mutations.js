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

export const setForm = (state, { billingForm }) => {
    state.billingForm = billingForm
}


export const setFormValues = (state) => {
    state.formValues = {
        fields: {
            ...getCleanFormValues(state.billingForm.fields)
        }
    }
}

export const setIsValid = (state, { isValid, field }) => {
    Object.entries(state.billingForm.fields).forEach(([key,value]) => {
        if (key === field) value.valid = isValid
        if (value.validations.length === 0 || !value.active) value.valid = true
    })
    const allFieldsValid = Object.values(state.billingForm.fields).every((field) => field.valid)
    state.isValid = allFieldsValid
}