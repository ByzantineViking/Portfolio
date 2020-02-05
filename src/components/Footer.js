
import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = {
    marginTop: '10px',
}

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

const Footer = (props) => {

    return(
        <div style={styles}>
            <Copyright/>
        </div>
    )
}


export default Footer