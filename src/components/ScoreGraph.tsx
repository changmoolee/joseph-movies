import React from "react";
import styled from "styled-components";

const ScoreGraph = ({ vote_average }: any) => {
  const votePercent = Math.round(vote_average * 10);

  return (
    <Container>
      <OuterCircle votePercent={votePercent}>
        <InnerCircle>
          {votePercent}
          <span>%</span>
        </InnerCircle>
      </OuterCircle>
      <Text>회원 점수</Text>
    </Container>
  );
};

export default ScoreGraph;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const OuterCircle = styled.div<{ votePercent: number }>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50%;
  background: ${({ votePercent }) => `conic-gradient(
    ${
      votePercent > 70
        ? "#0e62fe"
        : votePercent <= 70 && votePercent > 40
        ? "#ffd954"
        : "#e81e25"
    }  ${votePercent * 3.6}deg,
    black ${votePercent * 3.6}deg,
    black 360deg
  )`};
`;

const InnerCircle = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50%;
  background-color: white;
  span {
    font-size: 12px;
  }
`;

const Text = styled.span`
  margin: 5px;
`;
