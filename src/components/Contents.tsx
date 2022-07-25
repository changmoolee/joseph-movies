import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Contents = ({ data }: any) => {
  const navigate = useNavigate();

  const goToMovie = (movie_id: number) => {
    navigate(`/movie/${movie_id}`);
  };

  return (
    <Container>
      <GridMovieImages>
        {data.map((movie: any, index: number) => (
          <MovieImageContainer
            key={movie.id + index}
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
    </Container>
  );
};

export default Contents;

const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

const GridMovieImages = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  box-sizing: border-box;
  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1100px) and (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
  @media screen and (max-width: 320px) {
    width: 120px;
    height: 180px;
  }
`;

const NullImage = styled.div`
  width: 150px;
  height: 225px;
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

const MovieTitle = styled.div`
  width: 140px;
  margin-top: 10px;
  text-align: center;
  @media screen and (max-width: 320px) {
    width: 100px;
  }
`;
