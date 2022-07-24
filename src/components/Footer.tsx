import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <SubContainer>
        <GitHubLogo
          src={require("../assets/GitHub-Mark-64px.png")}
          alt="GitHub Logo"
        />
        <GitHubAnchor href="https://github.com/changmoolee?tab=repositories">
          changmoolee
        </GitHubAnchor>
      </SubContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #376188;
`;

const SubContainer = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
`;

const GitHubLogo = styled.img`
  width: 20px;
  height: 20px;
`;

const GitHubAnchor = styled.a`
  text-decoration: none;
  color: white;
`;
