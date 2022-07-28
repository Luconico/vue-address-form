
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