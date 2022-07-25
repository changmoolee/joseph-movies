import React from "react";
import styled from "styled-components";
import { SkeletonUI } from "joseph-ui-kit";

const SkeletonDetail = () => {
  return (
    <Container>
      <SkeletonUI>
        <PosterImage />
      </SkeletonUI>
      <Description>
        <SkeletonUI>
          <Title></Title>
        </SkeletonUI>
        <SkeletonUI>
          <Paragraph></Paragraph>
        </SkeletonUI>
      </Description>
    </Container>
  );
};

export default SkeletonDetail;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const PosterImage = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  object-fit: contain;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media screen and (min-width: 800px) {
    margin-left: 50px;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 40px;
`;

const Paragraph = styled.p`
  width: 100%;
  height: 140px;
  margin-top: 10px;
`;
