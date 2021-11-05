import React from "react";
import styled from 'styled-components'


const StyledChar = styled.div`
border: 2px solid red;
background: rgba(19, 32, 24, 0.7);
margin-left: 15%;
margin-right: 15%;
padding: 3%;
`

const StyledPer = styled.div`
color: #ffffff;
border: 5px dotted red;
border-radius: 40%;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
margin-left: 20%;
margin-right: 20%;
margin-bottom: 10%;
padding: 5% 10%;
font-size: 2em;
`

const Character = (props) => {
    const {character} = props;
    
    return (
    <StyledChar>
        <div> 
        {character.map((res) => {
            return (
                <StyledPer>
                {res.name}
                </StyledPer>
            )
        })}
        </div>
    </StyledChar>
  )
}

export default Character;
