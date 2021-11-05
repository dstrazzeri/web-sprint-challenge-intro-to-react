import React from "react";
import styled from "styled-components";


const StyledCard = styled.div`
  border: 3px solid #14213d;
  box-shadow: 1px 1px 5px red;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,0.6886905274805235) 0%, rgba(121,15,9,0.5850490708978904) 35%, rgba(0,17,255,0.5794468300015319) 100%);
  border-radius: 1%;
  margin: 0 20% 10% 20%;
  padding: 3%;
  display: flex;
  justify-content: center;
`;

const StyledPer = styled.h1`
  color: #ffffff;
  border: 3px solid #14213d;
  box-shadow: 2px 2px 5px red;
  margin-bottom: 10%;
  padding: 5% 10%;
  font-size: 2em;
  font-family: 'Press Start 2P', cursive;
`;
const StyledYear = styled.p`
  color: white;
  font-size: 1.3rem;
  font-family: Courier New, monospace;	
`;

const Character = (props) => {
  const { character } = props;

  return (
    <StyledCard>
      <div>
        {character.map((res) => {
          return (
            <div>
              <StyledPer>
                {res.name}
                <StyledYear>
                <ul>
                <li>Birth Year: {res.birth_year}</li>
                <li>Height: {res.height}</li>
                <li>Mass: {res.mass}</li>
                <li>Hair Color: {res.hair_color}</li>
                <li>Eye Color: {res.eye_color}</li>
                <li>Gender: {res.gender}</li>
                </ul>
                </StyledYear>
              </StyledPer>
            </div>
          );
        })}
      </div>
    </StyledCard>
  );
};

export default Character;
