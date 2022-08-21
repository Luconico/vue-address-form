

export const setIsSubmitting = (state, { isSubmitting }) => {
    state.isSubmitting = isSubmitting
}

export const setIsValid = (state, { isValid }) => {
    state.isValid = isValid
}

export const setSubmited = (state, { submited }) => {
    state.submited = submited
}

export const setPressentModules = (state, { pressentModule }) => {
    state.pressentModules = [...state.pressentModules, pressentModule]
}

export const setInitialValues = (state, { initialValues }) => {
    state.initialValues = initialValues
}