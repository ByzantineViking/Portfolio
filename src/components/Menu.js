import React from 'react'
import Drawer from './Drawer'
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
    // Empty div at the same height at of the top menu
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
                        <IconButton onClick={() => props.toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            ByzantineViking/portfolio
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <div className={classes.offset} />  
            <Drawer/>
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