

export const setIsSubmitting = (state, { isSubmitting }) => {
    state.isSubmitting = isSubmitting
}

export const setFields = (state, { fields }) => {
    state.fields = { ...fields }
}

export const setMessages = (state, { messages }) => {
    state.messages = [...messages]
}

export const setIsValid = (state, { isValid }) => {
    state.isValid = isValid
}

export const setSubmited = (state, { submited }) => {
    state.submited = submited
}