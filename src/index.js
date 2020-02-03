import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

const render = () => {
    ReactDOM.render(
        // The <Provider/> supplies the entire component tree with the global state tree
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root')
    )
}

render()
store.subscribe(render)
