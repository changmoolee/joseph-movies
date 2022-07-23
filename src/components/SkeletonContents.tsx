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
  overflow-y: auto;
  overflow-x: hidden;
`;

const GridMovieImages = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  box-sizing: border-box;
  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1100px) and (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MovieImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  box-sizing: border-box;
`;

const MovieImage = styled.div`
  width: 150px;
  height: 225px;
  border-radius: 10px;
  object-fit: contain;
  @media screen and (max-width: 320px) {
    width: 120px;
    height: 180px;
  }
`;

const MovieTitle = styled.div`
  width: 140px;
  height: 16px;
  margin-top: 10px;
  text-align: center;
  @media screen and (max-width: 320px) {
    width: 100px;
  }
`;
