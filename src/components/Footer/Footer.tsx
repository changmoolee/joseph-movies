import React from "react";
import GithubLogo from "../../assets/icons/GithubLogo";
import * as Styled from "./Footer.styles";

const Footer = () => {
  return (
    <Styled.Container>
      <Styled.GitHubAnchor href="https://github.com/changmoolee/joseph-movies">
        <Styled.LogoBox>
          <GithubLogo />
          joseph-movies
        </Styled.LogoBox>
      </Styled.GitHubAnchor>
    </Styled.Container>
  );
};

export default Footer;
