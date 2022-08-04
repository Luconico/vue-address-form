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

export const setForm = (state, { addressForm }) => {
    state.addressForm = addressForm
}

export const setFetching = (state, { isFetching }) => {
    state.isFetching = isFetching
}


export const setCountry = (state, { country }) => {
    state.country = country
}


export const setFormValues = (state) => {
    state.formValues = {
        fields: {
            country: state.country,
            ...getCleanFormValues(state.addressForm.fields)
        }
    }
}


export const setIsValid = (state, { isValid, field }) => {
    Object.entries(state.addressForm.fields).forEach(([key,value]) => {
         if (value.validations.length === 0 || !value.active) value.valid = true
         if (key === field) value.valid = isValid
    })
    const allFieldsValid = Object.values(state.addressForm.fields).every((field) => field.valid)
    state.isValid = allFieldsValid
}
