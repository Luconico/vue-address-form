

export const selectOptions = (state) => (term = '') => {
    if (term.length === 0) return null
    const selectOption = state.selectOptions.find((value) => {
        if (value.select === term)  return value
    })
    return selectOption ? selectOption : null
}

export const form = (state) => {
    return state.addressForm
}

