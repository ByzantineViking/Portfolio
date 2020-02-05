
const initialState = {
    menu: '/',
    drawer: false,
    tab: 0,
}


// Functions to oust the decision of reducer out of other components
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
export const setProjectTab = (tab) => {
    return {
        type: 'CHANGE_TAB',
        data: {
            tab
        }
    }
}
export const projectTabReducer = (state = initialState.tab, action) => {
    switch (action.type) {
    case 'CHANGE_TAB':
        return action.data.tab
    default:
        return state
    }
}

export const toggleDrawer = (open) => {
    return {
        type: 'TOGGLE_DRAWER',
        data: {
            open
        }
    }
}
export const drawerReducer = (state = initialState.drawer, action) => {
    switch(action.type) {
    case 'TOGGLE_DRAWER':
        return action.data.open
    default:
        return state
    }

}