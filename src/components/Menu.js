import React from 'react'
import { setPage, toggleDrawer } from '../reducers/navigationReducers'
import {
    Container,
    Typography,
    Box,
    Button,
    AppBar,
    Toolbar,
    IconButton,
    useScrollTrigger,
    Zoom,
    // Floating Action Button
    Fab,
    Slide
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import {
    AccountCircle,
    Menu as MenuIcon,
    KeyboardArrowUp,

} from '@material-ui/icons'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        color: 'secondary',
    },
    title: {
        flexGrow: 1,
    },
    // Empty div at the same height at of the top menu
    offset: theme.mixins.toolbar,
}))

const HideOnScroll = ({ children }) => {
    return (
        <Slide appear={false} direction="down" in={!useScrollTrigger()}>
            {children}
        </Slide>
    )
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
}
const Menu = (props) => {
    const classes = useStyles()
    return(
        <div className={classes.root}>

            <HideOnScroll {...props}>
                <AppBar color="secondary">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Teemu Saravirta
                        </Typography>
                        <Button color="inherit">Projects</Button>
                        <Button color="inherit">About Me</Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <div className={classes.offset} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
        open: state.open

    }
}

export default connect(mapStateToProps, { setPage, toggleDrawer })(Menu)