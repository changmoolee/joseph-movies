import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const Logo = styled.div`
  width: 100px;
  height: 50px;
  background-color: white;
`;

const Header = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };

  return (
    <Container>
      <Logo onClick={goToMain}>Logo</Logo>
    </Container>
  );
};

export default Header;
