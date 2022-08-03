

export const selectOptions = (state) => (term = '') => {
    if (term.length === 0) return null
    const selectOption = state.selectOptions.find((value) => {
        if (value.select === term) return value
    })
    return selectOption ? selectOption : null
}

export const form = (state) => {
    return state.addressForm
}

export const buttonText = (state) => {
    return state.buttonText
}

export const isDisabled = (state) => {
    return (state.addressForm.saving || state.addressForm.submited || state.fetching)
}

export const isFetching = (state) => {
    return (state.isFetching)
}

export const formValues = (state) => {
    return state.formValues
}