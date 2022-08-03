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

export const setFetching = (state, { fetching }) => {
    state.fetching = fetching
}

export const setSaving = (state, { saving }) => {
    state.addressForm.saving = saving
}

export const setCountry = (state, { country }) => {
    state.country = country
}

export const setSubmited = (state) => {
    state.addressForm.saving = false
    state.addressForm.submited = true
}

export const setFormValues = (state) => {
    state.formValues = {
        fields: {
            country: state.country,
            ...getCleanFormValues(state.addressForm.fields)
        }
    }
}

export const checkErrors = (state) => {
    const { fields } = state.addressForm
    console.log(fields)
    // Object.keys(fields).forEach(key => {

    // })
}