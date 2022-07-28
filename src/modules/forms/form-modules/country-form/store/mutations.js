import { getCleanFormValues } from '@/helpers/forms/form-utils'


export const setSelectOptions = (state, { newSelect }) => {
    const exist = state.selectOptions.find((select, index) => {
        if (select.select === newSelect.select) {
            state.selectOptions[index] = newSelect
            return true
        }
    })
    if (!exist) state.selectOptions = [...state.selectOptions, newSelect]
}

export const setForm = (state, { countryForm }) => {
    state.countryForm = countryForm
}

export const setFetching = (state, { fetching }) => {
    state.fetching = fetching
}

export const setSaving = (state, { saving }) => {
    state.countryForm.saving = saving
}

export const setSubmited = (state) => {
    state.countryForm.saving = false
    state.countryForm.submited = true
}

export const setFormValues = (state) => {
    state.formValues = {
        fields: {
            ...getCleanFormValues(state.countryForm.fields)
        },
        messages: [...state.countryForm.messages]
    }
}

export const checkErrors = (state) => {
    state.countryForm.messages = []
    const { fields, messages } = state.countryForm
    Object.keys(fields).forEach(key => {
        fields[key].error = false
        if (fields[key].required && fields[key].active && fields[key].value === '') {
            fields[key].error = true
            messages.push({ msgType: "error", value: `msg.${key}Required` })
        }
    })
}