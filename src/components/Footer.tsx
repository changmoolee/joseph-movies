import React from "react";
import styled from "styled-components";
import GithubLogo from "../assets/icons/GithubLogo";

const Footer = () => {
  return (
    <Container>
      <GitHubAnchor href="https://github.com/changmoolee?tab=repositories">
        <LogoBox>
          <GithubLogo />
          changmoolee
        </LogoBox>
      </GitHubAnchor>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #376188;
`;

const LogoBox = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
`;

const GitHubAnchor = styled.a`
  text-decoration: none;
  color: white;
`;
