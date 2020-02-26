
import {
    Container,
    Typography,
    Card,
    CardContent,
} from '@material-ui/core'
import React from 'react'
import '../stylesheets/About.css'


const About = () => {
    return(
        <div className='about-flex'>
            <Container
                className="about-page"
                maxWidth="sm">
                <Card>
                    <CardContent>
                        <Typography
                            color="secondary"
                            gutterBottom={true}
                            variant="h2"
                        >
                            Me, shortly.
                    </Typography>
                        <Typography
                            variant="body1">
                            I&apos;m a second year Computer Science Student at Aalto University, curious as hell. Into web development,
                            design, chinese, photography, and my darling - history. My GitHub name ByzantineViking comes from the
                            vikings guarding the emperor in Constantinople. Somehow them making the boat journey all the way over there, just
                            seems absolutely crazy to me. I&apos;d prob wouldn&apos;t make the best bodyguard but I&apos;ll
                            go wherever I can make an impact, following in their steps.
                    </Typography>
                    </CardContent>

                </Card>
            </Container>
        </div>
        
    )
}


export default About