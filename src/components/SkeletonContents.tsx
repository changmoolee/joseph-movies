import React from "react";
import styled from "styled-components";
import { SkeletonUI } from "joseph-ui-kit";

const SkeletonContents = () => {
  const dummydata = Array(20).fill("");

  return (
    <Container>
      <GridMovieImages>
        {dummydata.map((_, index) => (
          <MovieImageContainer key={index}>
            <SkeletonUI>
              <MovieImage />
            </SkeletonUI>
            <SkeletonUI>
              <MovieTitle />
            </SkeletonUI>
          </MovieImageContainer>
        ))}
      </GridMovieImages>
    </Container>
  );
};

export default SkeletonContents;

const Container = styled.div`
  height: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const GridMovieImages = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;

  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1100px) and (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 800px) {
    column-gap: 20px;
    row-gap: 20px;
  }
`;

const MovieImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovieImage = styled.div`
  width: 150px;
  height: 225px;
  @media screen and (max-width: 320px) {
    width: 120px;
    height: 180px;
  }
`;

const MovieTitle = styled.div`
  width: 140px;
  height: 16px;
  margin-top: 10px;
  @media screen and (max-width: 320px) {
    width: 100px;
  }
`;
