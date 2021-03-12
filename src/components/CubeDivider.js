
import React from 'react'


const CubeDivider = (props) => {
    return (
        <svg className="divider" viewBox="130 50 300 230" width="100%" height="800px" id={props.id}>
            <defs>
                <g id="cube" className="cube-unit">
                    <rect width="21" height="24" fill="var(--mainColor)" stroke="var(--strokeColor)" transform="skewY(30)" />
                    <rect width="21" height="24" fill="var(--mainColor)" stroke="var(--strokeColor)" transform="skewY(-30) translate(21 24.3)" />
                    <rect width="21" height="21" fill="var(--mainColor)" stroke="var(--strokeColor)" transform="scale(1.41,.81) rotate(45) translate(0 -21)" />
                </g>
            </defs>

            <g id="l-cube" className="red-cube">
                <use href="#cube" x="121" y="112" />
                <use href="#cube" x="100" y="124" />
                <use href="#cube" x="142" y="124" />
                <use href="#cube" x="121" y="136" />
                <use href="#cube" x="79" y="136" />
                <use href="#cube" x="163" y="136" />
                <use href="#cube" x="142" y="148" />
                <use href="#cube" x="100" y="148" />
                <use href="#cube" x="121" y="160" />
                <use href="#cube" x="121" y="88" />
                <use href="#cube" x="100" y="100" />
                <use href="#cube" x="142" y="100" />
                <use href="#cube" x="121" y="112" />
                <use href="#cube" x="79" y="112" />
                <use href="#cube" x="163" y="112" className="m-right" />
                <use href="#cube" x="142" y="124" className="m-right" />
                <use href="#cube" x="100" y="124" />
                <use href="#cube" x="121" y="136" />
                <use href="#cube" x="121" y="64" />
                <use href="#cube" x="100" y="76" />
                <use href="#cube" x="142" y="76" />
                <use href="#cube" x="121" y="88" />
                <use href="#cube" x="79" y="88" />
                <use href="#cube" x="163" y="88" />
                <use href="#cube" x="142" y="100" />
                <use href="#cube" x="100" y="100" />
            </g>
            <use href="#cube" x="254" y="148" className="m-left red-cube" />
            <use href="#cube" x="340" y="95" className="m-down red-cube" />
        </svg>
    )
}


export default CubeDivider