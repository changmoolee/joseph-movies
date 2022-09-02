import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const OuterCircle = styled.div<{ votePercent: number }>`
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

export const InnerCircle = styled.div`
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

export const Text = styled.span`
  margin: 5px;
`;
