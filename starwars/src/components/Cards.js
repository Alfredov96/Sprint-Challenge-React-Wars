import React from 'react'
import styled from 'styled-components'

const CardStyle=  styled.div`
margin: 0 auto;
margin-top:2%;
display:flex;
flex-direction:column;
justify-content:center;
border: 1px solid gray;
border-radius: 12px;
color:white;
width: 430px;
height: 540px;
margin-bottom: 40px
font-size: 0.9rem;
background: darkGrey;
`;
const HeaderStyle = styled.div`
color: white;
`
const Cards = props => {
    return (
        
        <CardStyle>
        <HeaderStyle>
            <h1>{props.name}</h1>  
        </HeaderStyle>
            <h2>mass:{props.mass}</h2>
            <h2>eye color:{props.eye_color}</h2>
            <h2>hair color: {props.hair_color}</h2>
            <h2>height:{props.height}</h2>
        </CardStyle>
    )
}

export default Cards;