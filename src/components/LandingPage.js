import React, { useEffect } from 'react'
import '../stylesheets/LandingPage.css'
import { connect } from 'react-redux'
import ScrollMagic from 'scrollmagic'

/* CssBaseline:
 * Removes margin in all brosers
 * Default Material Design background color is applied
 * box-sizing is set globally on the <html> element to border-box, every element is declared to inherit this property
 * font antialiasing is enabled for the Roboto font.
 */
import { CssBaseline, Container, Typography, Button, Paper, Box } from '@material-ui/core'
import Me from './LandingPageComponents/Me'
import ProjectCard from './LandingPageComponents/ProjectCard'


const LandingPage = (props) => {
    const controller = new ScrollMagic.Controller()
    const revealElement = document.getElementsByClassName('test-item')
    const callback = (event) => {
        console.log('Event fired!', event.type)
        
    }
    useEffect(() => {
        new ScrollMagic.Scene({
            triggerElement: '#pin1',
            triggerHook: 0.9,
        })
            .setClassToggle(revealElement[0], 'visible')
            .addTo(controller) // assign the scene to the controller
            .on('change progress start end enter leave', callback)
    })
    return(
        <React.Fragment>
            <CssBaseline />
            <Container>
                <div className="landing-grid">
                    <Me/>
                    <div className="test-item">DEBUG</div>
                    <div id="pin1">pin1</div>
                    <ProjectCard
                        className="threeD-project-card"
                        title="threeD"
                        body="A from-scratch 3D engine"
                    />
                </div>

            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        welcomeCardVisibility: state.welcomeCardVisibility,
        threeDCardVisibility: state.threeDCardVisibility,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setWelcomeVisibility: () => dispatch({ type: 'SET_WELCOME_VISIBILITY' }),
        setthreeDVisibility: () => dispatch({ type: 'SET_THREED_VISIBILITY' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)