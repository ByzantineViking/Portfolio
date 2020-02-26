import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ThreeD from './components/ThreeD'
import App from './App'
import LandingPage from './components/LandingPage'
import About from './components/About'

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#b22222',
        },
        secondary: {
            main: '#b22222',
        },
        text: {
            primary: '#6d6875',
            secondary: '#fffafa',
        }
    }
})

const render = () => {
    ReactDOM.render(
        // The <Provider/> supplies the entire component tree with the global state tree
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={theme}>
                    <Route path="/" component={App} />
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/threeD" component={ThreeD} />
                    <Route exact path="/about" component={About} />
                </ThemeProvider>
            </Router>
        </Provider>
        , document.getElementById('root')
    )
}

render()
store.subscribe(render)
