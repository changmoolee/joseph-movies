import React from "react";
import * as Styled from "./MovieContents.styles";

const MovieContents = ({ data }: any) => {
  return (
    <Styled.Container>
      <Styled.GridMovieImages>
        {data.map((movie: any, index: number) => (
          <a
            key={movie.id}
            href={`${process.env.REACT_APP_URL}/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Styled.MovieImageContainer>
              {movie.poster_path === null ? (
                <Styled.NullImage />
              ) : (
                <Styled.MovieImage
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt="popular movie"
                />
              )}
              <Styled.MovieTitle>{movie.title}</Styled.MovieTitle>
            </Styled.MovieImageContainer>
          </a>
        ))}
      </Styled.GridMovieImages>
    </Styled.Container>
  );
};

export default MovieContents;
