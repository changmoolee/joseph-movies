import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const PosterImage = styled.div`
  width: 200px;
  height: 300px;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media screen and (min-width: 800px) {
    margin-top: 0;
    margin-left: 50px;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 40px;
`;

export const Paragraph = styled.p`
  width: 100%;
  height: 140px;
  margin-top: 10px;
`;
