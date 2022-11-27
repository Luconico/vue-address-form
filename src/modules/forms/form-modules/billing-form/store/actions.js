

export const submit = async ({ commit }) => {
    commit('setFormValues')
}

export const setIsValid = async ({ commit, dispatch }, {isValid, field}) => {
    commit('setIsValid', {isValid, field})
    dispatch('formBuilder/isValid', {}, {root: true})
}