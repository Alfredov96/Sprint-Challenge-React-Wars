import React from 'react'
import styled from 'styled-components'

const CardStyle = styled.div`
margin: 0 auto;
margin-top: 2%
border: solid black 2px
`;

const Cards = props => {
    return (
        <CardStyle>
        <h2>Eye color:{props.eye_color}</h2>
        <h2>hair color: {props.hair_color}</h2>
        <h2>height:{props.height}</h2>
        </CardStyle>
    )
}

export default Cards;