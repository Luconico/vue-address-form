


export const getCountrySelect = async ({ commit }, country) => {

    const countries = {
        ES: {
            select: 'country',
            translate: true,
            options: [
                { value: 'ES' },
                { value: 'DE' },
                { value: 'AD' },
            ]
        },
        EN: {
            select: 'country',
            translate: true,
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
            translate: true,
            options: [
                { value: 'madrid' },
                { value: 'barcelona' },
                { value: 'malaga' },
                { value: 'valencia' },
                { value: 'sevilla' },
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
    commit('setFetching', { isFetching: true })
    const form = {
        ES: {
            fields: {
                address: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                },
                postalCode: {
                    value: '',
                    validations: ['required', 'minLength:5', 'maxLength:5'],
                    active: true,
                    valid: false,
                    type: 'text'
                },
                city: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text'
                },
                province: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'select'
                },
                moreInfo: {
                    value: '',
                    validations: [],
                    active: true,
                    valid: false,
                    type: 'textarea'
                },
            }
        },
        DE: {
            fields: {
                address: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                },
                postalCode: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text'
                },
                city: {
                    value: '',
                    validations: ['required'],
                    active: false,
                    valid: false,
                    type: 'text'
                },
                province: {
                    value: '',
                    validations: [],
                    active: false,
                    valid: false,
                    type: 'select'
                },
                moreInfo: {
                    value: '',
                    validations: [],
                    active: true,
                    valid: false,
                    type: 'textarea'
                },
            }
        },
        AD: {
            fields: {
                address: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                },
                postalCode: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text'
                },
                city: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text'
                },
                province: {
                    value: '',
                    validations: ['required'],
                    active: false,
                    valid: false,
                    type: 'select'
                },
                moreInfo: {
                    value: '',
                    validations: [],
                    active: true,
                    valid: false,
                    type: 'textarea'
                },
            }
        }
    }// TODO: REQUEST FOR FORM
    const addressForm = form[country]
    if (!addressForm) return
    setTimeout(() => {
        commit('setForm', { addressForm })
        commit('setFetching', { isFetching: false })
    }, 500)

}


export const submit = async ({ commit }) => {
    commit('setFormValues')
}

export const setCountry = async ({ commit }, country) => {
    commit('setCountry', {country})
}


export const setIsValid = async ({ commit }, {isValid, field}) => {
    commit('setIsValid', {isValid, field})
}