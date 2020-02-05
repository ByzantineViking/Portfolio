import React from 'react'

import { Typography, Button } from '@material-ui/core'

const Welcome = (props) => {

    return(
        <div className="welcome-item">
            <Typography variant='h3' paragraph>
                Welcome!
            </Typography>
            <Typography variant='body1' paragraph>
                Click below to view the source code
            </Typography>
            <Button
                href="https://www.github.com/ByzantineViking/portfolio-frontend"
                target="_blank"
                variant="outlined"
                rel="noopener noreferrer"
                color="primary"
                size="small"
            >
                Code&lt;&gt;
            </Button>
        </div>
    )
}


export default Welcome