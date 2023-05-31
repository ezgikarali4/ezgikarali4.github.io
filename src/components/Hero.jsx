import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;  width: 1400px;

`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  width: 1400px;
`;
const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`;
const Title = styled.h1`
font-size: 74px;`;
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
const Button = styled.button`
background-color: #da4ea2;
color: white;
font-weight: 500;
width: 150px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
`;
const Line = styled.img`


`;
const Subtitle = styled.h2`
color: #da4ea2`;
const Desc = styled.p`
font-size: 24px;
color: lightgray;`;
const Right = styled.div`
position: relative;
// background-color: #f8f8f8;
flex: 3;`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to{
      transform: translateY(30px);
    }
  }
`;
export const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>
            We enjoy creating delightful, human-centered digital experiences
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Img src="./img/icon.png"></Img>
        </Right>
      </Container>
    </Section>
  );
};
export default Hero;
