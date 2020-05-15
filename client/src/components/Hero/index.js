import React from 'react';
import styled from 'styled-components';



const StyledHero = styled.section`
  background-image:url("/Images/hero.jpg");
  height: 1000px;
  background-size: cover;
  background-position: 25% 20%;
`;

export default function Hero() {
  return (
    <StyledHero>
    </StyledHero>
  );
}