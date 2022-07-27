

export const submit = async ({ commit, state }) => {
    commit('checkErrors')
    commit('setFormValues')
    if (state.companyForm.messages.length > 0) return
    commit('setSaving', { saving: true })
    commit('setSubmited')
}

