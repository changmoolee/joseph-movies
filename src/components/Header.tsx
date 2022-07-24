import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };

  return (
    <Container>
      <Logo
        src={require("../assets/JosephMovie-Logo.png")}
        onClick={goToMain}
      />
    </Container>
  );
};

export default Header;

const Container = styled.div`
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
