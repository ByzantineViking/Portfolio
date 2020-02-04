import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

import { toggleDrawer } from '../reducers/navigationReducers'

import { connect } from 'react-redux'
const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
})

const Drawer = (props) => {
    const classes = useStyles()
    const handleToggle = (command) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }
        props.toggleDrawer(command)
    }

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={handleToggle(false)}
            onKeyDown={handleToggle(false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return (
        <div>
            <SwipeableDrawer
                open={props.open}
                onClose={handleToggle(false)}
                onOpen={handleToggle(true)}
            >
                {sideList('left')}
            </SwipeableDrawer>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        open: state.open
    }
}
export default connect(mapStateToProps, { toggleDrawer })(Drawer)