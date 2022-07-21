import React from "react";
import styled from "styled-components";
import { Button, SkeletonUI } from "joseph-ui-kit";
import SortAccordion from "./SortAccordion";

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
`;

const MovieImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  box-sizing: border-box;
`;

const MovieImage = styled.img`
  width: 150px;
  height: 225px;
  border-radius: 10px;
  object-fit: contain;
`;

const MovieTitle = styled.div`
  width: 140px;
  height: 16px;
  margin-top: 10px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkeletonContents = () => {
  const dummydata = Array(6).fill("");

  return (
    <Container>
      <SkeletonUI>
        <SortAccordion />
      </SkeletonUI>
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
      <ButtonContainer>
        <SkeletonUI>
          <Button name="" padding="10px 70px" />
        </SkeletonUI>
      </ButtonContainer>
    </Container>
  );
};

export default SkeletonContents;
