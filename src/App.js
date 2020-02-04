import React from 'react'
import { connect } from 'react-redux'
import LandingPage from './components/LandingPage'
import { Typography, Link, Fab, Zoom, useScrollTrigger } from '@material-ui/core'
import Menu from './components/Menu'

import {
    KeyboardArrowUp
} from '@material-ui/icons'

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright ©'}
            <Link color="inherit" href="https://github.com/ByzantineViking">
        ByzantineViking
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}


function App() {
    return (
        <div>
            <Menu/>
            <Copyright />
        </div>
    )
}

export default App
