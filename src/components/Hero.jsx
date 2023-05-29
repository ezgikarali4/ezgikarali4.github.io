import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
flex: 2;
`;
const Title = styled.h1``;
const WhatWeDo = styled.div``;
const Button = styled.button``;
const Line = styled.img``;
const Subtitle = styled.h2``;
const Desc = styled.p``;
const Right = styled.div`

flex: 3;`;

const Img = styled.img``;
export const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle></Subtitle>
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
