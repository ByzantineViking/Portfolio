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
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import {
    AccountCircle,
    Menu as MenuIcon,
    KeyboardArrowUp,
    Add,
    ExpandLess,
    Edit,

} from '@material-ui/icons';

import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const sections = [
    { title: 'Home', url: '/' },
    { title: 'Projects', url: '/projects' },
    { title: 'Photography', url: '/photography' },
    { title: 'About', url: '/about' },

];

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
}))

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}


const Menu = (props) => {
    const classes = useStyles()
    const theme = useTheme()

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
        {
            color: 'primary',
            className: classes.fab,
            icon: <Add />,
            label: 'Add',
        },
        {
            color: 'secondary',
            className: classes.fab,
            icon: <Edit />,
            label: 'Edit',
        },
        {
            color: 'inherit',
            className: clsx(classes.fab, classes.fabGreen),
            icon: <ExpandLess />,
            label: 'Expand',
        },
    ];



const ProjectsPage = (props) => {
    
    return(
        <div>
            <SwipeableViews
                axis={theme.direction === 'rt1' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                 </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>

            </SwipeableViews>
        </div>
    )
}


export default ProjectsPage