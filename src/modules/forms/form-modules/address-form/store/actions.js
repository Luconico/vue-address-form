


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
                { value: 'EN' },
                { value: 'DE' },
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
            translate: false,
            options: [
                { value: 'Madrid' },
                { value: 'Barcelona' },
                { value: 'Málaga' },
                { value: 'Valencia' },
                { value: 'Sevilla' },
                { value: 'Córdoba' },
                { value: 'Alicante' },
                { value: 'Granada' },
                { value: 'Huelva' },
                { value: 'Almería' },
                { value: 'Cádiz' },
                { value: 'Jaén' },
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
                    validationFunction: null,
                    mask: null,
                },
                zipCode: {
                    value: '',
                    validations: ['required', 'minLength:5', 'maxLength:5'],
                    active: true,
                    valid: false,
                    type: 'text',
                    validationFunction: null,
                    mask: null,
                },
                city: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                    validationFunction: null,
                    mask: null,
                },
                province: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                    validationFunction: null,
                    mask: null,
                },
                moreInfo: {
                    value: '',
                    validations: [],
                    active: true,
                    valid: false,
                    type: 'textarea',
                    validationFunction: null,
                    mask: null,
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
                    validationFunction: null,
                    mask: null,
                },
                zipCode: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                    validationFunction: null,
                    mask: null,
                },
                city: {
                    value: '',
                    validations: ['required'],
                    active: false,
                    valid: false,
                    type: 'text',
                    validationFunction: null,
                    mask: null,
                },
                province: {
                    value: '',
                    validations: [],
                    active: false,
                    valid: false,
                    type: 'select',
                    validationFunction: null,
                    mask: null,
                },
                moreInfo: {
                    value: '',
                    validations: [],
                    active: true,
                    valid: false,
                    type: 'textarea',
                    validationFunction: null,
                    mask: null,
                },
            }
        },
        EN: {
            fields: {
                address: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                    validationFunction: null,
                    mask: null,
                },
                zipCode: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                    validationFunction: null,
                    mask: null,
                },
                city: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                    validationFunction: null,
                    mask: null,
                },
                province: {
                    value: '',
                    validations: ['required'],
                    active: false,
                    valid: false,
                    type: 'select',
                    validationFunction: null,
                    mask: null,
                },
                moreInfo: {
                    value: '',
                    validations: [],
                    active: true,
                    valid: false,
                    type: 'textarea',
                    validationFunction: null,
                    mask: null,
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
    commit('setCountry', { country })
}


export const setIsValid = async ({ commit, dispatch }, { isValid, field }) => {
    commit('setIsValid', { isValid, field })
    dispatch('formBuilder/isValid', {}, { root: true })
}