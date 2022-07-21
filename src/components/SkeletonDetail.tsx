import React from "react";
import styled from "styled-components";
import { SkeletonUI } from "joseph-ui-kit";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const PosterImage = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  object-fit: contain;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.div`
  width: 280px;
  height: 40px;
`;

const Paragraph = styled.p`
  width: 280px;
  height: 140px;
  margin-top: 10px;
`;

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
