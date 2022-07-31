import styled from "styled-components";

export const Outer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Inner = styled.div`
  @media screen and (min-width: 1400px) {
    width: 1300px;
  }
  @media screen and (min-width: 1100px) and (max-width: 1400px) {
    width: 1000px;
  }
  @media screen and (min-width: 800px) and (max-width: 1100px) {
    width: 700px;
  }
  @media screen and (max-width: 800px) {
    width: 500px;
  }
`;
