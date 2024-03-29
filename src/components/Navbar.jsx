import React from "react";
import styled from "styled-components";
const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Logo = styled.img`
  height: 200px;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
const ListItem = styled.li`
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
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
          <Icon src="./img/search.svg" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};
export default Navbar;
