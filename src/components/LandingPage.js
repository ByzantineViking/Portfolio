import React from 'react'

import { connect } from 'react-redux'
/* CssBaseline:
 * Removes margin in all brosers
 * Default Material Design background color is applied
 * box-sizing is set globally on the <html> element to border-box, every element is declared to inherit this property
 * font antialiasing is enabled for the Roboto font.
 */
import { CssBaseline, Container, Typography, Button, Paper, Box } from '@material-ui/core'

const LandingPage = (props) => {
    
    return(
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Paper>
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
                </Paper>
                <Box my={2}>
                    {[...new Array(50)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
        </React.Fragment>
    )
}


export default connect()(LandingPage)