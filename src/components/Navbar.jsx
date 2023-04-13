import React from "react";
import styled from "styled-components";
const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
`;
const Links = styled.div``;
const Icons = styled.div``;
const Icon = styled.img``;
const Logo = styled.img``;
const List = styled.ul``;
const ListItem = styled.li``;
const Button = styled.button``;
export const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/EK-logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Who</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
            <Icon src=""/>
            <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};
export default Navbar;
