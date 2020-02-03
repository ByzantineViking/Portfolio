import React from 'react'

import { Container, Typography, Box, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { flexbox } from '@material-ui/system'








const Menu = ({page}) => {
    
    return(
        <Container
        maxWidth="lg">
            <Box 
            display="flex" 
            flexDirection="row" 
            flexWrap="nowrap"
            justifyContent="center"
            //justifyContent="flex-start"
            alignItems="center"
            alignContent="flex-start"
            >

                <Box order={0}>
                    <Typography>
                        Home
                    </Typography>
                </Box>
                <Box
                flexGrow={3}>
                    <Typography>
                        Code
                    </Typography>
                </Box>
                
                
            </Box>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}
export default connect(mapStateToProps)(Menu)