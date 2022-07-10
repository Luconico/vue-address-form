


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

    const form = {
        ES: {
            saving: false,
            submited: false,
            fields: {
                address: {
                    value: '',
                    require: true,
                    needed: true,
                    type: 'text',
                },
                postalCode: {
                    value: '',
                    require: true,
                    needed: true,
                    type: 'text'
                },
                city: {
                    value: '',
                    require: false,
                    needed: true,
                    type: 'text'
                },
                province: {
                    value: '',
                    require: true,
                    needed: true,
                    type: 'select'
                },
                moreInfo: {
                    value: '',
                    require: false,
                    needed: true,
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
                    type: 'text',
                },
                postalCode: {
                    value: '',
                    require: true,
                    needed: true,
                    type: 'text'
                },
                city: {
                    value: '',
                    require: false,
                    needed: false,
                    type: 'text'
                },
                province: {
                    value: '',
                    require: false,
                    needed: false,
                    type: 'select'
                },
                moreInfo: {
                    value: '',
                    require: false,
                    needed: true,
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
                    type: 'text',
                },
                postalCode: {
                    value: '',
                    require: true,
                    needed: true,
                    type: 'text'
                },
                city: {
                    value: '',
                    require: true,
                    needed: true,
                    type: 'text'
                },
                province: {
                    value: '',
                    require: false,
                    needed: false,
                    type: 'select'
                },
                moreInfo: {
                    value: '',
                    require: false,
                    needed: true,
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
    }, 10)

}
