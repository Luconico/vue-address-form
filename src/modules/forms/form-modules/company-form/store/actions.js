

export const submit = async ({ commit }) => {
    commit('setFormValues')
}

export const setIsValid = async ({ commit }, {isValid, field}) => {
    commit('setIsValid', {isValid, field})
}