import React from 'react'
import { connect } from 'react-redux'
import LandingPage from './components/LandingPage'
import { Typography, Link, Fab, Zoom, useScrollTrigger } from '@material-ui/core'
import Menu from './components/Menu'

import {
    KeyboardArrowUp
} from '@material-ui/icons'




function App() {
    return (
        <div>
            <Menu/>
        </div>
    )
}

export default App
