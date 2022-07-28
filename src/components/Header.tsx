import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <a
        href={`${process.env.REACT_APP_URL}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Logo src={require("../assets/JosephMovie-Logo.png")} />
      </a>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Logo = styled.img`
  width: 100px;
  height: 50px;
`;
