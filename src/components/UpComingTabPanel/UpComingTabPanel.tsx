import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Button } from "joseph-ui-kit";
import MovieContents from "../MovieContents/MovieContents";
import SkeletonContents from "../SkeletonContents/SkeletonContents";
import SortAccordion from "../SortAccordion/SortAccordion";
import * as Styled from "./UpComingTabPanel.styles";
import { add } from "date-fns";

const UpComingTopPanel = () => {
  const [loading, setLoading] = useState(true);
  const [upComing, setUpComing] = useState([]);
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
    axios({
      method: "get",
      baseURL: "https://api.themoviedb.org/3",
      url: "movie/upcoming",
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: "ko",
        page: page,
      },
    })
      .then((res) =>
        setUpComing((upComing) => upComing.concat(res.data.results))
      )
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [page]);
  useEffect(() => {
    if (didMount.current) {
      setLoading(true);
      setSortedMovies([]);
      setSortedPage(1);
      axios({
        method: "get",
        baseURL: "https://api.themoviedb.org/3",
        url: "discover/movie",
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: "ko",
          page: 1,
          sort_by: selected.id,
          "air_date.lte": add(new Date(), { months: 6 }),
          certification_country: "KR",
          ott_region: "KR",
          "release_date.gte": add(new Date(), { days: 4 }),
          "release_date.lte": add(new Date(), { weeks: 3 }),
          show_me: 0,
          "vote_average.gte": 0,
          "vote_average.lte": 10,
          with_release_type: 3,
          "with_runtime.gte": 0,
          "with_runtime.lte": 400,
        },
      })
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
      axios({
        method: "get",
        baseURL: "https://api.themoviedb.org/3",
        url: "discover/movie",
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: "ko",
          page: sortedPage,
          sort_by: selected.id,
          "air_date.lte": add(new Date(), { months: 6 }),
          certification_country: "KR",
          ott_region: "KR",
          "release_date.gte": add(new Date(), { days: 4 }),
          "release_date.lte": add(new Date(), { weeks: 3 }),
          show_me: 0,
          "vote_average.gte": 0,
          "vote_average.lte": 10,
          with_release_type: 3,
          "with_runtime.gte": 0,
          "with_runtime.lte": 400,
        },
      })
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
      <MovieContents data={upComing} />
      {upComing.length >= 20 * page ? (
        <Styled.ButtonContainer>
          <Button name="더보기" padding="10px 70px" onClick={morePage} />
        </Styled.ButtonContainer>
      ) : null}
    </>
  ) : (
    <>
      <SortAccordion setSelected={setSelected} />
      <MovieContents data={sortedMovies} />
      {sortedMovies.length >= 20 * sortedPage ? (
        <Styled.ButtonContainer>
          <Button name="더보기" padding="10px 70px" onClick={moreSortedPage} />
        </Styled.ButtonContainer>
      ) : null}
    </>
  );
};

export default UpComingTopPanel;
