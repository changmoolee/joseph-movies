import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "joseph-ui-kit";
import SortAccordion from "./SortAccordion";

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const GridMovieImages = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  box-sizing: border-box;
`;

const MovieImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  box-sizing: border-box;
`;

const MovieImage = styled.img`
  width: 150px;
  height: 225px;
  border-radius: 10px;
  object-fit: cover;
  cursor: pointer;
`;

const NullImage = styled.img`
  width: 150px;
  height: 225px;
  border-radius: 10px;
  background-color: gray;
  object-fit: contain;
  cursor: pointer;
`;

const MovieTitle = styled.div`
  width: 140px;
  margin-top: 10px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = ({ data }: any) => {
  const movies = data?.results;

  const navigate = useNavigate();

  const goToMovie = (movie_id: number) => {
    navigate(`/movie/${movie_id}`);
  };

  return (
    <Container>
      <SortAccordion />
      <GridMovieImages>
        {movies?.map((movie: any) => (
          <MovieImageContainer
            key={movie.id}
            onClick={() => goToMovie(movie.id)}
          >
            {movie.poster_path === null ? (
              <NullImage />
            ) : (
              <MovieImage
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt="popular movie"
              />
            )}

            <MovieTitle>{movie.title}</MovieTitle>
          </MovieImageContainer>
        ))}
      </GridMovieImages>
      {movies?.results?.length >= 20 ? (
        <ButtonContainer>
          <Button name="더보기" padding="10px 70px" />
        </ButtonContainer>
      ) : null}
    </Container>
  );
};

export default Contents;
