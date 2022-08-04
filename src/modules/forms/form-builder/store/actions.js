

export const isSubmitting = ({ commit }, isSubmitting) => {
    commit('setIsSubmitting', { isSubmitting })
}

export const isValid = ({ commit }, isValid) => {
    commit('setIsValid', { isValid })
}

export const isSubmited = ({ commit }, submited) => {
    commit('setSubmited', { submited })
}

export const pressentModule = ({ commit }, pressentModule) => {
    commit('setPressentModules', { pressentModule })
}