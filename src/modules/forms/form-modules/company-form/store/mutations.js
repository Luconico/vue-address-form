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


export const setFormValues = (state) => {
    state.formValues = {
        fields: {
            ...getCleanFormValues(state.companyForm.fields)
        }
    }
}

export const setIsValid = (state, { isValid, field }) => {
    Object.entries(state.companyForm.fields).forEach(([key,value]) => {
         if (value.validations.length === 0 || !value.active) value.valid = true
         if (key === field) value.valid = isValid
    })
    const allFieldsValid = Object.values(state.companyForm.fields).every((field) => field.valid)
    state.isValid = allFieldsValid
}