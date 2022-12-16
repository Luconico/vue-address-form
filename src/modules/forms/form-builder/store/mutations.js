
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
    state.initialValues = flatObjectKeys(initialValues)
}

const flatObjectKeys = (obj) => {
    const result = {}

    const flatObject = (obj, key) => {
        if (typeof obj === 'object' && obj !== null) {
            Object.keys(obj).forEach((k) => {
                flatObject(obj[k], `${k}`)
            })
        } else {
            result[key] = obj
        }
    }

    flatObject(obj, '')

    return result
}