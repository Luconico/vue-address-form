

export const selectOptions = (state) => (term = '') => {
    if (term.length === 0) return null
    const selectOption = state.selectOptions.find((value) => {
        if (value.select === term) return value
    })
    return selectOption ? selectOption : null
}

export const form = (state) => {
    return state.companyForm
}

export const isDisabled = (state) => {
    return (state.companyForm.saving || state.companyForm.submited || state.fetching)
}

export const isFetching = (state) => {
    return (state.companyForm.saving || state.fetching)
}

export const formValues = (state) => {
    return state.formValues
}