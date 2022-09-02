import React from "react";
import { SkeletonUI } from "joseph-ui-kit";
import * as Styled from "./SkeletonContents.styles";

const SkeletonContents = () => {
  const dummydata = Array(20).fill("");

  return (
    <Styled.Container>
      <Styled.GridMovieImages>
        {dummydata.map((_, index) => (
          <Styled.MovieImageContainer key={index}>
            <SkeletonUI>
              <Styled.MovieImage />
            </SkeletonUI>
            <SkeletonUI>
              <Styled.MovieTitle />
            </SkeletonUI>
          </Styled.MovieImageContainer>
        ))}
      </Styled.GridMovieImages>
    </Styled.Container>
  );
};

export default SkeletonContents;
