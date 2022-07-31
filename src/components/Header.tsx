import React from "react";
import styled from "styled-components";
import JosephMovieLogo from "../assets/icons/JosephMovieLogo";
import JosephMovieLogo2 from "../assets/icons/JosephMovieLogo2";

const Header = () => {
  return (
    <Container>
      <a
        href={`${process.env.REACT_APP_URL}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <JosephMovieLogo2 />
      </a>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
