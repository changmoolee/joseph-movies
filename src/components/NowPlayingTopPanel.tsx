import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "joseph-ui-kit";
import Contents from "./Contents";
import SkeletonContents from "./SkeletonContents";
import SortAccordion from "./SortAccordion";

const NowPlayingTopPanel = () => {
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [page, setPage] = useState(1);

  const [sortedMovies, setSortedMovies] = useState([]);
  const [sortedPage, setSortedPage] = useState(1);

  const [selected, setSelected] = useState<{
    id: number | string;
    value: number | string;
  }>({ id: "popularity.desc", value: "인기도 내림차순" });

  const didMount = useRef(false);

  const morePage = () => {
    setPage((page) => page + 1);
  };

  const moreSortedPage = () => {
    setSortedPage((page) => page + 1);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=${page}`
      )
      .then((res) =>
        setNowPlaying((nowPlaying) => nowPlaying.concat(res.data.results))
      )
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [page]);

  useEffect(() => {
    if (didMount.current) {
      setLoading(true);
      setSortedMovies([]);
      setSortedPage(1);
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1&sort_by=${selected.id}`
        )
        .then((res) => {
          setSortedMovies((popular) => popular.concat(res.data.results));
        })
        .then(() => {
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      didMount.current = true;
    }
  }, [selected]);

  useEffect(() => {
    if (sortedPage > 1) {
      setLoading(true);
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=${sortedPage}&sort_by=${selected.id}`
        )
        .then((res) => {
          setSortedMovies((popular) => popular.concat(res.data.results));
        })
        .then(() => {
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [sortedPage]);

  return loading ? (
    <>
      <SortAccordion />
      <SkeletonContents />
    </>
  ) : sortedMovies.length === 0 ? (
    <>
      <SortAccordion setSelected={setSelected} />
      <Contents data={nowPlaying} />
      {nowPlaying.length >= 20 * page ? (
        <ButtonContainer>
          <Button name="더보기" padding="10px 70px" onClick={morePage} />
        </ButtonContainer>
      ) : null}
    </>
  ) : (
    <>
      <SortAccordion setSelected={setSelected} />
      <Contents data={sortedMovies} />
      {sortedMovies.length >= 20 * sortedPage ? (
        <ButtonContainer>
          <Button name="더보기" padding="10px 70px" onClick={moreSortedPage} />
        </ButtonContainer>
      ) : null}
    </>
  );
};

export default NowPlayingTopPanel;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
