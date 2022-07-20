


export const getCountrySelect = async ({ commit }, country) => {

    const countries = {
        ES: {
            select: 'country',
            options: [
                { value: 'ES' },
                { value: 'DE' },
                { value: 'AD' },
            ]
        },
        EN: {
            select: 'country',
            options: [
                { value: 'UK' },
                { value: 'DE' },
                { value: 'AD' },
            ]
        }
    } // TODO: REQUEST FOR COUNTRIES
    const newSelect = countries[country.toUpperCase()]
    if (!newSelect) return
    setTimeout(() => {
        commit('setSelectOptions', { newSelect })
    }, 1000)

}

export const getProvinceSelect = async ({ commit }, country) => {
    const provinces = {
        ES: {
            select: 'province',
            options: [
                { value: 'madrid' },
                { value: 'barcelona' },
                { value: 'malaga' },
            ]
        }
    } // TODO: REQUEST FOR PROVINCES
    const newSelect = provinces[country]
    if (!newSelect) return
    setTimeout(() => {
        commit('setSelectOptions', { newSelect })
    }, 1000)
}

export const getAddressForm = async ({ commit }, country) => {
    commit('setFetching', { fetching: true })
    const form = {
        ES: {
            saving: false,
            submited: false,
            fields: {
                address: {
                    value: '',
                    require: true,
                    needed: true,
                    error: false,
                    type: 'text',
                },
                postalCode: {
                    value: '',
                    require: true,
                    needed: true,
                    error: false,
                    type: 'text'
                },
                city: {
                    value: '',
                    require: false,
                    needed: true,
                    error: false,
                    type: 'text'
                },
                province: {
                    value: '',
                    require: true,
                    needed: true,
                    error: false,
                    type: 'select'
                },
                moreInfo: {
                    value: '',
                    require: false,
                    needed: true,
                    error: false,
                    type: 'textarea'
                },
            },
            messages: []
        },
        DE: {
            saving: false,
            submited: false,
            fields: {
                address: {
                    value: '',
                    require: true,
                    needed: true,
                    error: false,
                    type: 'text',
                },
                postalCode: {
                    value: '',
                    require: true,
                    needed: true,
                    error: false,
                    type: 'text'
                },
                city: {
                    value: '',
                    require: false,
                    needed: false,
                    error: false,
                    type: 'text'
                },
                province: {
                    value: '',
                    require: false,
                    needed: false,
                    error: false,
                    type: 'select'
                },
                moreInfo: {
                    value: '',
                    require: false,
                    needed: true,
                    error: false,
                    type: 'textarea'
                },
            },
            messages: []
        },
        AD: {
            saving: false,
            submited: false,
            fields: {
                address: {
                    value: '',
                    require: true,
                    needed: true,
                    error: false,
                    type: 'text',
                },
                postalCode: {
                    value: '',
                    require: true,
                    needed: true,
                    error: false,
                    type: 'text'
                },
                city: {
                    value: '',
                    require: true,
                    needed: true,
                    error: false,
                    type: 'text'
                },
                province: {
                    value: '',
                    require: false,
                    needed: false,
                    error: false,
                    type: 'select'
                },
                moreInfo: {
                    value: '',
                    require: false,
                    needed: true,
                    error: false,
                    type: 'textarea'
                },
            },
            messages: []
        }
    }// TODO: REQUEST FOR FORM
    const addressForm = form[country]
    if (!addressForm) return
    setTimeout(() => {
        commit('setForm', { addressForm })
        commit('setFetching', { fetching: false })
    }, 500)

}


export const submit = async ({ commit, state }) => {
    commit('checkErrors')
    commit('setFormValues')
    if (state.addressForm.messages.length > 0) return
    commit('setSaving', { saving: true })
    commit('setSubmited')
}

export const setCountry = async ({ commit }, country) => {
    commit('setCountry', {country})
}