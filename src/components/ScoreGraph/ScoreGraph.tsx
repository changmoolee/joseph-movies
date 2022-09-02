import React from "react";
import * as Styled from "./ScoreGraph.styles";

const ScoreGraph = ({ vote_average }: any) => {
  const votePercent = Math.round(vote_average * 10);

  return (
    <Styled.Container>
      <Styled.OuterCircle votePercent={votePercent}>
        <Styled.InnerCircle>
          {votePercent}
          <span>%</span>
        </Styled.InnerCircle>
      </Styled.OuterCircle>
      <Styled.Text>회원 점수</Styled.Text>
    </Styled.Container>
  );
};

export default ScoreGraph;
