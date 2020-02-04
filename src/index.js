import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import ProjectsPage from './components/ProjectsPage'
import LandingPage from './components/LandingPage'


const render = () => {
    ReactDOM.render(
        // The <Provider/> supplies the entire component tree with the global state tree
        <Provider store={store}>
            <Router>
                <Route path="/" component={App}/>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/projects" component={ProjectsPage}/>
            </Router>
        </Provider>
        , document.getElementById('root')
    )
}

render()
store.subscribe(render)
