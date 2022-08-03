

export const isSubmitting = ({ commit }, isSubmitting) => {
    commit('setIsSubmitting', { isSubmitting })
}

export const reset = ({ commit }) => {
    commit('setFields', { fields: {} })
    commit('setMessages', { messages: [] })
    commit('setIsValid', { isValid: true })
}

export const fields = ({ commit, state }, fields) => {
    commit('setFields', { fields: { ...state.fields, fields } })
}

export const messages = ({ commit, state }, messages) => {
    commit('setMessages', { messages: [...state.messages, ...messages] })
}

export const isValid = ({ commit }, isValid) => {
    commit('setIsValid', { isValid })
}

export const isSubmited = ({ commit }, submited) => {
    commit('setSubmited', { submited })
}