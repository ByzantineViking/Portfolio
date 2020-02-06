
const initialState = {
    menu: '/',
    drawer: false,
    tab: 0,
    visibility: {
        welcomeCardVisibility: true,
        threeDCardVisibility: false,
    }
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


// Testing card visibility as direct dispatchs
export const welcomeVisibilityReducer = (state = initialState.visibility.welcomeCardVisibility, action) => {
    switch (action.type) {
        case 'SET_WELCOME_VISIBILITY':
            return !state.welcomeCardVisibility
        default:
            return state
    }
}
export const threeDVisibilityReducer = (state = initialState.visibility.threeDCardVisibility, action) => {
    switch(action.type) {
        case 'SET_THREED_VISIBILITY':
            return !state.threeDCardVisibility
        default:
            return state
    }
}
