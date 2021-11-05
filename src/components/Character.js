import React from "react";
import styled from 'styled-components'


const StyledChar = styled.div`
border: 3px solid #14213d;
background: rgba(19, 32, 24, 0.7);
border-radius: 1%;
margin: auto 20%;
padding: 3%;
display: flex;
justify-content: center;
`

const StyledPer = styled.div`
color: #ffffff;
border: 5px dotted #14213d;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
margin-bottom: 10%;
padding: 5% 10%;
font-size: 3em;
`
const StyledYear = styled.h2`
color:white;
font-size: 1.5rem;
`

const Character = (props) => {
    const {character} = props;
    
    return (
    <StyledChar>
        <div> 
        {character.map((res) => {
            return (
                <div>
                <StyledPer>
                {res.name}<br />
                <StyledYear>Birth Year: {res.birth_year}</StyledYear>                
                </StyledPer>
                </div>
            )
        })}
        </div>
    </StyledChar>
  )
}

export default Character;
