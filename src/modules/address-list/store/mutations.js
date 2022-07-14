

export const setListItem = ( state, { item }) => { 
    state.addressList = [item, ...state.addressList]
}