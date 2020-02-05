import React from 'react'
import '../stylesheets/LandingPage.css'
import { connect } from 'react-redux'
/* CssBaseline:
 * Removes margin in all brosers
 * Default Material Design background color is applied
 * box-sizing is set globally on the <html> element to border-box, every element is declared to inherit this property
 * font antialiasing is enabled for the Roboto font.
 */
import { CssBaseline, Container, Typography, Button, Paper, Box } from '@material-ui/core'
import Me from './LandingPageComponents/Me'


const LandingPage = (props) => {

    return(
        <React.Fragment>
            <CssBaseline />
            <Container>
                <div className="landing-grid">
                    <Me className="grid-item"/>
                </div>

            </Container>
        </React.Fragment>
    )
}


export default connect()(LandingPage)