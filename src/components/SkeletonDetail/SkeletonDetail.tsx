import React from "react";
import { SkeletonUI } from "joseph-ui-kit";
import * as Styled from "./SkeletonDetail.styles";

const SkeletonDetail = () => {
  return (
    <Styled.Container>
      <SkeletonUI>
        <Styled.PosterImage />
      </SkeletonUI>
      <Styled.Description>
        <SkeletonUI>
          <Styled.Title />
        </SkeletonUI>
        <SkeletonUI>
          <Styled.Paragraph />
        </SkeletonUI>
      </Styled.Description>
    </Styled.Container>
  );
};

export default SkeletonDetail;
