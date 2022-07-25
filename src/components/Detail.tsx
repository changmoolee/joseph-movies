import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import SkeletonDetail from "./SkeletonDetail";

interface DetailProps {
  movie_id: number;
}

const Detail = ({ movie_id }: DetailProps) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState<any>({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1`
      )
      .then((res) => {
        setDetail(res.data);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <SkeletonDetail />
  ) : (
    <Container>
      {detail.poster_path === null ? (
        <NullImage />
      ) : (
        <MovieImage
          src={`https://image.tmdb.org/t/p/w200/${detail?.poster_path}`}
          alt="movie poster image"
        />
      )}
      <Description>
        <Title>
          {detail.original_title +
            (detail.release_date
              ? ` (${detail.release_date.slice(0, 4)})`
              : "")}
        </Title>
        <GenreContainer>
          <div>
            {detail.release_date}
            {detail.production_countries.map(
              (country: any) => " (" + country.iso_3166_1 + ") "
            )}
          </div>
          <div>
            {Math.floor(detail.runtime / 60) > 0
              ? Math.floor(detail.runtime / 60) + "시간 "
              : null}
            {(detail.runtime % 60) + "분"}
          </div>
          <div>
            {detail.genres.map(
              (genre: any, index: number) =>
                genre.name + (index !== detail.genres.length - 1 ? ", " : "")
            )}
          </div>
        </GenreContainer>
        <Tagline>
          <em>{detail.tagline}</em>
        </Tagline>
        <Overview>{detail.overview ? "개요" : null}</Overview>
        <Paragraph>{detail.overview}</Paragraph>
      </Description>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const MovieImage = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

const NullImage = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 10px;
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

const Description = styled.div`
  margin-top: 20px;
  @media screen and (min-width: 800px) {
    margin-left: 50px;
  }
`;

const DefaultStyle = `
  text-align: center;
  padding: 5px 10px;
  box-sizing: border-box;
  @media screen and (min-width: 800px) {
    text-align: left;
  }
`;

const Title = styled.div`
  ${DefaultStyle}
  font-size: 20px;
  font-weight: 700;
`;

const GenreContainer = styled.div`
  ${DefaultStyle}
`;

const Tagline = styled.div`
  ${DefaultStyle}
  color: gray;
  font-style: italic;
`;
const Overview = styled.div`
  ${DefaultStyle}
  text-align: left;
  font-size: 18px;
  font-weight: 700;
`;

const Paragraph = styled.p`
  ${DefaultStyle}
`;
