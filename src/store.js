import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
    menuReducer,
    drawerReducer,
    projectTabReducer,
} from './reducers/navigationReducers'


const collectiveReducer = combineReducers({
    page: menuReducer,
    open: drawerReducer,
    projectTab: projectTabReducer,
})

// The store is defined here at the starting point
const store = createStore(collectiveReducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))

export default store
