import React from "react";
import GithubLogo from "../../assets/icons/GithubLogo";
import * as Styled from "./Footer.styles";

const Footer = () => {
  return (
    <Styled.Container>
      <Styled.GitHubAnchor href="https://github.com/changmoolee?tab=repositories">
        <Styled.LogoBox>
          <GithubLogo />
          changmoolee
        </Styled.LogoBox>
      </Styled.GitHubAnchor>
    </Styled.Container>
  );
};

export default Footer;
