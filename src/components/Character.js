import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 3px solid #14213d;
  box-shadow: 1px 1px 5px red;
  background: rgba(19, 32, 24, 0.7);
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
  font-size: 3em;
`;
const StyledYear = styled.p`
  color: white;
  font-size: 1.5rem;
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
                <br />
                <StyledYear>Birth Year: {res.birth_year}</StyledYear>
              </StyledPer>
            </div>
          );
        })}
      </div>
    </StyledCard>
  );
};

export default Character;
