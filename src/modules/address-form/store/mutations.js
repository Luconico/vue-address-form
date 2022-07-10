

export const setSelectOptions = ( state, { newSelect }) => {
   const exist = state.selectOptions.find((select, index) => {
        if (select.select === newSelect.select) {
            state.selectOptions[index] = newSelect
            return true
        }
    })
    if (!exist) state.selectOptions = [...state.selectOptions, newSelect]
}

export const setForm = ( state, { addressForm }) => {
    state.addressForm = addressForm
}
