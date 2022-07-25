import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  margin-right: 10px;
`;

const OuterCircle = styled.div<{ votePercent: number }>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50%;

  background: ${({ votePercent }) => `conic-gradient(
   white 0deg,
    ${
      votePercent > 70
        ? "#0e62fe"
        : votePercent <= 70 && votePercent > 40
        ? "yellow"
        : "red"
    }  ${votePercent * 3.6}deg,
    black ${votePercent * 3.6}deg,
    black 360deg
  )`};
`;

const InnerCircle = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50%;
  background-color: white;
`;

const ScoreGraph = ({ vote_average }: any) => {
  const votePercent = Math.round(vote_average * 10);

  return (
    <Container>
      회원 점수
      <OuterCircle votePercent={votePercent}>
        <InnerCircle>{votePercent}%</InnerCircle>
      </OuterCircle>
    </Container>
  );
};

export default ScoreGraph;
