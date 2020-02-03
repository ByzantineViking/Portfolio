
const initialState = {
    menu: 0,
}


// Functions to ous the decision of reducer out of other components
export const setPage = (menu) => {
    return {
        type: 'CHANGE_PAGE',
        data: {
            menu
        }
    }
}
export const menuReducer = (state = initialState.menu, action) => {
    switch(action.type) {
        case 'CHANGE_PAGE':
            return action.data.menu
        default:
            return state
    }
}