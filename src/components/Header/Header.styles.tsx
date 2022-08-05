import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  @media screen and (min-width: 800px) {
    height: 80px;
  }
`;
