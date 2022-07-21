import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import SkeletonDetail from "./SkeletonDetail";

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
  }
`;

const PosterImage = styled.img`
  width: 200px;
  border-radius: 10px;
  object-fit: contain;
`;

const Description = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const Title = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  padding: 5px 10px;
  box-sizing: border-box;
`;

const GenreContainer = styled.div`
  text-align: center;
`;

const Tagline = styled.div`
  text-align: center;
  color: gray;
  font-style: italic;
  padding: 5px 10px;
  box-sizing: border-box;
`;
const Overview = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 5px 10px;
  box-sizing: border-box;
`;

const Paragraph = styled.p`
  padding: 5px 10px;
  box-sizing: border-box;
  line-height: 120%;
`;

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

  console.log(detail);

  return loading ? (
    <SkeletonDetail />
  ) : (
    <Container>
      <PosterImage
        src={`https://image.tmdb.org/t/p/w200/${detail?.poster_path}`}
        alt="movie poster image"
      />
      <Description>
        <Title>
          {detail.original_title + ` (${detail.release_date.slice(0, 4)})`}
        </Title>
        <GenreContainer>
          <div>
            {detail.release_date}
            {detail.production_countries.map(
              (country: any) => " (" + country.iso_3166_1 + ") "
            )}
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
