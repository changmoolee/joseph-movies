import styled from "styled-components";
import { FixedHeadingStyles } from "joseph-ui-kit";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: 100%;
  background-position: center;
  background-image: url("https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/03/nope-poster-2.png?w=1075&ssl=1");
  background-repeat: no-repeat;
`;

export const Introduction = styled.div`
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  @media screen and (min-width: 800px) {
    text-align: center;
    padding: 30px 50px;
  }
`;

export const FirstHeading = styled.div`
  ${FixedHeadingStyles.external.heading03}
  color: white;
  @media screen and (min-width: 800px) {
    ${FixedHeadingStyles.external.heading05}
  }
`;
export const SecondHeading = styled.div`
  ${FixedHeadingStyles.external.heading03}
  color: white;
  @media screen and (min-width: 800px) {
    ${FixedHeadingStyles.external.heading04}
  }
`;

export const SearchWithButton = styled.div`
  display: flex;
  div {
    flex-grow: 1;
  }
`;
