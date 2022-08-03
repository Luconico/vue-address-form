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

export const setForm = (state, { companyForm }) => {
    state.companyForm = companyForm
}

export const setFetching = (state, { fetching }) => {
    state.fetching = fetching
}

export const setSaving = (state, { saving }) => {
    state.companyForm.saving = saving
}

export const setSubmited = (state) => {
    state.companyForm.saving = false
    state.companyForm.submited = true
}

export const setFormValues = (state) => {
    state.formValues = {
        fields: {
            ...getCleanFormValues(state.companyForm.fields)
        }
    }
}

export const checkErrors = (state) => {
    const { fields } = state.companyForm
    console.log(fields)
    // Object.keys(fields).forEach(key => {

    // })
}