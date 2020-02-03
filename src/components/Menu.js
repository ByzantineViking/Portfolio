import React from 'react'

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

 } from '@material-ui/icons';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const sections = [
    { title: 'Home', url: '/' },
    { title: 'Projects', url: '/projects' },
    { title: 'Photography', url: '/photography' },
    { title: 'About', url: '/about' },

];

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
    },
    offset: theme.mixins.toolbar,
}))

const HideOnScroll = ({children}) => {
    return (
        <Slide appear={false} direction="down" in={!useScrollTrigger()}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
}
const Menu = (props) => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
                 
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <div className={classes.offset} />  
        </div>  
    )
}

const mapStateToProps = (state) => {
    return {
        page: state.page

    }
}
export default connect(mapStateToProps, null)(Menu)