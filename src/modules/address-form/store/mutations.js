

export const setSelectOptions = ( state, { newSelect }) => {
   const exist = state.selectOptions.find((select, index) => {
        if (select.select === newSelect.select) {
            state.selectOptions[index] = newSelect
            return true
        }
    })
    if (!exist) state.selectOptions = [...state.selectOptions, newSelect]
}

export const setForm = ( state, { addressForm }) => {
    state.addressForm = addressForm
}

export const setFetching = ( state, { fetching }) => { 
    state.fetching = fetching
}

export const setSaving = ( state, { saving }) => {
    state.addressForm.saving = saving
}

export const setSubmited = ( state ) => {
    state.addressForm.saving = false
    state.addressForm.submited = true
}

export const checkErrors = ( state ) => {
    state.addressForm.messages = []
    const { fields, messages } = state.addressForm
    Object.keys(fields).forEach(key => {
        fields[key].error = false
        if (fields[key].require && fields[key].needed && fields[key].value === '') {
            fields[key].error = true
            messages.push({ msgType: "error", value: `msg.${key}Required` })
        }
    })
}