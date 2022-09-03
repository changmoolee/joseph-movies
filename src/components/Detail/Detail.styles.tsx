import styled from "styled-components";
import { FixedHeadingStyles, BodyStyles } from "joseph-ui-kit";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const MovieImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
`;

export const NullImage = styled.div`
  min-width: 200px;
  min-height: 300px;
  background-image: url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%;
  background-color: #dbdbdb;
  object-fit: contain;
  cursor: pointer;
  @media screen and (max-width: 320px) {
    width: 120px;
    height: 180px;
  }
`;

export const Description = styled.div`
  margin: 20px 0px;

  @media screen and (min-width: 800px) {
    margin: 0;
    margin-left: 50px;
  }
`;

export const DefaultStyle = `
  text-align: center;
  margin: 10px;
  @media screen and (min-width: 800px) {
    text-align: left;
  }
`;

export const Title = styled.div`
  ${DefaultStyle}/* ${FixedHeadingStyles.heading04} */
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${DefaultStyle}
  @media screen and (min-width: 800px) {
    justify-content: flex-start;
  }
`;

export const GenreContainer = styled.div`
  ${DefaultStyle}
  ${BodyStyles.bodyCompact02}
`;

export const Tagline = styled.div`
  ${DefaultStyle}
  ${FixedHeadingStyles.heading02}
  color: gray;
  font-style: italic;
`;
export const Overview = styled.div`
  ${DefaultStyle}
  ${FixedHeadingStyles.heading03}
  text-align: left;
`;

export const Paragraph = styled.p`
  ${DefaultStyle}
  ${BodyStyles.body02}
`;
