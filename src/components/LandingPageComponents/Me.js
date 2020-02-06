import React from 'react'

import { Typography, Button, Card, CardContent, CardActions, Slide } from '@material-ui/core'
import { useStyles } from './CardStyles'

const Me = (props) => {
    const classes = useStyles()
    return(
        <div className="welcome-item">
            <Slide direction="up" in={true} timeout={1000,500} mountOnEnter unmountOnExit>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant='h3' paragraph>
                            Teemu Saravirta
                        </Typography>
                        <Typography variant='body1' paragraph>
                            Web Developer
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            href="https://www.github.com/ByzantineViking/portfolio-frontend"
                            target="_blank"
                            variant="outlined"
                            rel="noopener noreferrer"
                            color="primary"
                            size="small"
                        >
                            Page Code&lt;&gt;
                        </Button>
                    </CardActions>
                </Card>
            </Slide>
        </div>
    )
}


export default Me