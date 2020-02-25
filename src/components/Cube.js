import React from 'react'



const Cube = (props) => {

    return(
        <svg viewBox="0 0 60 60" width={props.size} height={props.size} style={{ position:'absolute', left:props.location.x, top:props.location.y }} >
            <defs>
                <g id="cube" className="cube-unit">
                    <rect width="21" height="24" fill="var(--mainColor)" stroke="var(--strokeColor)" transform="skewY(30)" />
                    <rect width="21" height="24" fill="var(--mainColor)" stroke="var(--strokeColor)" transform="skewY(-30) translate(21 24.3)" />
                    <rect width="21" height="21" fill="var(--mainColor)" stroke="var(--strokeColor)" transform="scale(1.41,.81) rotate(45) translate(0 -21)" />
                </g>
            </defs>

            <use className="red-cube" href="#cube" x="9" y="17"/>
        </svg>
    )
}


export default Cube