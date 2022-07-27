import getCleanFormValues from '@/helpers/forms/getCleanFormValues'


export const setSelectOptions = ( state, { newSelect }) => {
   const exist = state.selectOptions.find((select, index) => {
        if (select.select === newSelect.select) {
            state.selectOptions[index] = newSelect
            return true
        }
    })
    if (!exist) state.selectOptions = [...state.selectOptions, newSelect]
}

export const setForm = ( state, { companyForm }) => {
    state.companyForm = companyForm
}

export const setFetching = ( state, { fetching }) => { 
    state.fetching = fetching
}

export const setSaving = ( state, { saving }) => {
    state.companyForm.saving = saving
}

export const setSubmited = ( state ) => {
    state.companyForm.saving = false
    state.companyForm.submited = true
}

export const setFormValues = ( state ) => {
    state.formValues = {
        fields: {
            country: state.country,
            ...getCleanFormValues(state.companyForm.fields)
        },
        messages: [...state.companyForm.messages]
    }
}

export const checkErrors = ( state ) => {
    state.companyForm.messages = []
    const { fields, messages } = state.companyForm
    Object.keys(fields).forEach(key => {
        fields[key].error = false
        if (fields[key].required && fields[key].active && fields[key].value === '') {
            fields[key].error = true
            messages.push({ msgType: "error", value: `msg.${key}Required` })
        }
    })
}