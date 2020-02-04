import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Zoom from '@material-ui/core/Zoom'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import UpIcon from '@material-ui/icons/KeyboardArrowUp'
import { green } from '@material-ui/core/colors'
import Box from '@material-ui/core/Box'

import { setProjectTab } from '../reducers/navigationReducers'

import { connect } from 'react-redux'

const TabPanel = (props) => {
    const { children, value, index, ...other } = props

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
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

const a11yProps = (index) => {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        minHeight: 200,
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

const ProjectsPage = (props) => {
    const classes = useStyles()
    const theme = useTheme()

    const handleChange = (event, newValue) => {
        props.setProjectTab(newValue)
    }

    const handleChangeIndex = index => {
        props.setProjectTab(index)
    }

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    }

    const fabs = [
        {
            color: 'primary',
            className: classes.fab,
            icon: <AddIcon />,
            label: 'Add',
        },
        {
            color: 'secondary',
            className: classes.fab,
            icon: <EditIcon />,
            label: 'Edit',
        },
        {
            color: 'inherit',
            className: clsx(classes.fab, classes.fabGreen),
            icon: <UpIcon />,
            label: 'Expand',
        },
    ]

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={props.tab}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="action tabs example"
                >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={props.tab}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={props.tab} index={0} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={props.tab} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={props.tab} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>
            </SwipeableViews>
            {fabs.map((fab, index) => (
                <Zoom
                    key={fab.color}
                    in={props.tab === index}
                    timeout={transitionDuration}
                    style={{
                        transitionDelay: `${props.tab === index ? transitionDuration.exit : 0}ms`,
                    }}
                    unmountOnExit
                >
                    <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
                        {fab.icon}
                    </Fab>
                </Zoom>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tab: state.projectTab
    }
}

export default connect(mapStateToProps, { setProjectTab })(ProjectsPage)