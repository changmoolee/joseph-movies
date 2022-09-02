import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Button } from "joseph-ui-kit";
import MovieContents from "../MovieContents/MovieContents";
import SkeletonContents from "../SkeletonContents/SkeletonContents";
import SortAccordion from "../SortAccordion/SortAccordion";
import * as Styled from "./PanelComponent.styles";

const PanelComponent = ({
  data,
  setData,
  firstRequestConfig,
  sortedRequestConfig,
  moreSortedRequestConfig,
}: WithSubscriptionProps) => {
  const [loading, setLoading] = useState(true);
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
    axios(firstRequestConfig(page))
      .then((res) => {
        setData((data: any) => data.concat(res.data.results));
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [page]);

  // 첫 랜더링은 무시 -> 이후 정렬 DropDown을 통해 값(selected)이 변경되면 실행
  useEffect(() => {
    if (didMount.current) {
      setLoading(true);
      setSortedMovies([]);
      setSortedPage(1);
      axios(sortedRequestConfig(selected))
        .then((res) => {
          setSortedMovies((data) => data.concat(res.data.results));
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
      axios(moreSortedRequestConfig(selected, sortedPage))
        .then((res) => {
          setSortedMovies((data) => data.concat(res.data.results));
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
      <MovieContents data={data} />
      {data.length >= 20 * page ? (
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

export default PanelComponent;

interface WithSubscriptionProps {
  data: any;
  setData: any;
  firstRequestConfig: (page: number) => {
    method: string;
    baseURL: string;
    url: string;
    params: {
      api_key: string | undefined;
      language: string;
      page: number;
    };
  };
  sortedRequestConfig: (selected: {
    id: number | string;
    value: number | string;
  }) => {
    method: string;
    baseURL: string;
    url: string;
    params: {
      api_key: string | undefined;
      language: string;
      page: number;
      sort_by: string | number;
      "air_date.lte": Date;
      certification_country: string;
      ott_region?: string;
      "release_date.gte"?: Date | string;
      "release_date.lte"?: Date | string;
      show_me?: number;
      "vote_average.gte"?: number;
      "vote_average.lte"?: number;
      with_release_type?: number;
      "with_runtime.gte"?: number;
      "with_runtime.lte"?: number;
    };
  };
  moreSortedRequestConfig: (
    selected: {
      id: number | string;
      value: number | string;
    },
    sortedPage: number
  ) => {
    method: string;
    baseURL: string;
    url: string;
    params: {
      api_key: string | undefined;
      language: string;
      page: number;
      sort_by: string | number;
      "air_date.lte": Date;
      certification_country: string;
      ott_region?: string;
      "release_date.gte"?: Date;
      "release_date.lte"?: Date;
      show_me?: number;
      "vote_average.gte"?: number;
      "vote_average.lte"?: number;
      with_release_type?: number;
      "with_runtime.gte"?: number;
      "with_runtime.lte"?: number;
    };
  };
}
