
import * as forms from '../options/forms.json'


export const getCountrySelect = async ({ commit }, country) => {

    const countries = {
        ES: {
            select: 'country',
            translate: true,
            options: [
                { value: 'ES' },
                { value: 'DE' },
                { value: 'AD' },
                { value: 'PT' },
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
            select: 'area',
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
    let addressForm = forms.filter((form) => form.forCountry.includes(country.toUpperCase()))[0]
    if (!addressForm) addressForm = forms.filter((form) => form.forCountry.includes('default'))[0]
    commit('setForm', { addressForm })
}


export const submit = ({ commit }) => {
    commit('setFormValues')
}

export const setCountry = ({ commit }, country) => {
    commit('setCountry', { country })
}


export const setIsValid = ({ commit, dispatch }, { isValid, field }) => {
    commit('setIsValid', { isValid, field })
    dispatch('formBuilder/isValid', {}, { root: true })
}
