import React from 'react'
import { Card, Typography, Button, CardContent, CardActions } from '@material-ui/core'
import { useStyles } from './CardStyles'
import { Link } from 'react-router-dom'
const ProjectCard = (props) => {
    const classes = useStyles()
    return(
        <div className={props.className}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant='h3' paragraph>
                        {props.title}
                    </Typography>
                    <Typography variant='body1' paragraph>
                        {props.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        href={props.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                        size="small"
                    >
                        Code&lt;&gt;
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        component={Link} to={`/${props.project}`}
                    >
                        Explore!
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}


export default ProjectCard