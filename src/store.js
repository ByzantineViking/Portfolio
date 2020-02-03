import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
    menuReducer,
} from './reducers/menuReducer'


const collectiveReducer = combineReducers({
    page: menuReducer,
})

// The store is defined here at the starting point
const store = createStore(collectiveReducer, applyMiddleware(thunk))
//store.subscribe(() => console.log(store.getState()))

export default store
