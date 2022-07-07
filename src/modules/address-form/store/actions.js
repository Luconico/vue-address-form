
export const getCountries = async ({ commit }) => {

    const countries = [
        { code: 'ES', name: 'spain' },
        { code: 'DE', name: 'germany' },
        { code: 'AD', name: 'andorra' }
    ] // TODO: POSSIBLE REQUEST FOR COUNTRIES

    if (!countries) return { ok: false, message: 'no countries' }

    commit('setCountries', { countries })
}

