import React from "react";
import styled from "styled-components";
import useResize from "../hooks/useResize";
import JosephMovieLogo from "../assets/icons/JosephMovieLogo";
import JosephMovieLogo2 from "../assets/icons/JosephMovieLogo2";

const Header = () => {
  const { width } = useResize();

  return (
    <Container>
      <a
        href={`${process.env.REACT_APP_URL}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        {width < 800 ? (
          <JosephMovieLogo2 width={80} height={40} />
        ) : (
          <JosephMovieLogo2 width={120} height={60} />
        )}
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
  @media screen and (min-width: 800px) {
    height: 80px;
  }
`;
