

import React from 'react'
import {
    Card,
    CardContent,
    Typography
} from '@material-ui/core'
import '../stylesheets/ThreeD.css'
import DiagonalDivider from './DiagonalDivider'
const ThreeD = (props) => {
    
    return(
        <div className="threeD-page">
            <Card className="header">
                <CardContent>
                    <Typography
                        variant="h2"
                        color="secondary"
                    >
                        threeD
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        The project is a from-scratch 3D engine running on Scala FX, written in Scala. Scala FX is mostly a re-skin for Java FX and the two are both functional inside the app. I have taken some functionality from Java FX, regarding the parts in which Scala FX documentation was sparse. The engine is fully scalable with different 3D objects, as long as the data is convertible to the format of three 3d points on a CSV row, each consisting of (x,z,y)- coordinates forming a triangle in a clock-wise order.
                    </Typography>
                </CardContent>
            </Card>
            <DiagonalDivider>

            </DiagonalDivider>
        </div>
    )
}


export default ThreeD