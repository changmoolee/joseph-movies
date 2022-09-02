import React from "react";
import useResize from "../../hooks/useResize";
import JosephMovieLogo from "../../assets/icons/JosephMovieLogo";
import * as Styled from "./Header.styles";

const Header = () => {
  const { width } = useResize();

  return (
    <Styled.Container>
      <a
        href={`${process.env.REACT_APP_URL}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        {width < 800 ? (
          <JosephMovieLogo width={80} height={40} />
        ) : (
          <JosephMovieLogo width={120} height={60} />
        )}
      </a>
    </Styled.Container>
  );
};

export default Header;
