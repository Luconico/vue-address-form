

export const isSubmitting = ({ commit }, isSubmitting) => {
    commit('setIsSubmitting', { isSubmitting })
}

export const isValid = ({ commit, state, rootState }) => {
    const isValid = state.pressentModules.every((module) => rootState[`${module}Form`].isValid)
    console.log(isValid)
    commit('setIsValid', { isValid })
}

export const isSubmited = ({ commit }, submited) => {
    commit('setSubmited', { submited })
}

export const pressentModule = ({ commit }, pressentModule) => {
    commit('setPressentModules', { pressentModule })
}

export const initialValues = ({ commit}, initialValues) => {
    commit('setInitialValues', { initialValues })
}