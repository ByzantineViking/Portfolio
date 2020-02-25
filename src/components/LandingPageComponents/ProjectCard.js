import React from 'react'
import { Box, Card, Typography, Button, CardContent, CardActions } from '@material-ui/core'
import { useStyles } from './CardStyles'

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
                        Explore!
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}


export default ProjectCard