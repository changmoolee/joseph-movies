import React from "react";
import styled from "styled-components";

const Contents = ({ data }: any) => {
  return (
    <Container>
      <GridMovieImages>
        {data.map((movie: any, index: number) => (
          <a
            key={movie.id + index}
            href={`${process.env.REACT_APP_URL}/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <MovieImageContainer>
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
          </a>
        ))}
      </GridMovieImages>
    </Container>
  );
};

export default Contents;

const Container = styled.div`
  margin-top: 20px;
`;

const GridMovieImages = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
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
  box-sizing: border-box;
  cursor: pointer;
`;

const MovieImage = styled.img`
  width: 150px;
  height: 225px;
  object-fit: cover;
  @media screen and (max-width: 320px) {
    width: 120px;
    height: 180px;
  }
`;

const NullImage = styled.div`
  width: 150px;
  height: 225px;
  background-image: url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%;
  background-color: #dbdbdb;
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
