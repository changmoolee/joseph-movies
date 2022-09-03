import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SkeletonUI, Button, FixedHeadingStyles } from "joseph-ui-kit";
import Header from "../components/Header/Header";
import SearchBox from "../components/SearchBox/SearchBox";
import SkeletonContents from "../components/SkeletonContents/SkeletonContents";
import MovieContents from "../components/MovieContents/MovieContents";
import Footer from "../components/Footer/Footer";

const SearchResult = () => {
  const { keyword } = useParams();

  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);

  const morePage = () => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=ko&page=${page + 1}&query=${keyword}`
      )
      .then((res) =>
        setSearchResult((searchResult) => searchResult.concat(res.data.results))
      )
      .then(() => {
        setPage((page) => page + 1);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    setPage(1);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1&query=${keyword}`
      )
      .then((res) => setSearchResult(res.data.results))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [keyword]);

  return (
    <>
      <Header />
      <SearchBox />
      {loading ? (
        <>
          <ResultText>
            <SkeletonUI>
              <div style={{ width: "100px", height: "16px" }} />
            </SkeletonUI>
            <SkeletonUI>
              <div style={{ width: "100px", height: "16px" }} />
            </SkeletonUI>
          </ResultText>
          <SkeletonContents />
        </>
      ) : (
        <>
          <ResultText>
            <span style={{ fontStyle: "italic" }}>"{keyword}"</span> 검색 결과
            &nbsp;{searchResult.length}건의 영화
          </ResultText>
          <MovieContents data={searchResult} />
        </>
      )}
      {searchResult.length >= 20 * page ? (
        <ButtonContainer>
          <Button name="더보기" padding="10px 70px" onClick={morePage} />
        </ButtonContainer>
      ) : null}
      <Footer />
    </>
  );
};

export default SearchResult;

const ResultText = styled.div`
  ${FixedHeadingStyles.heading01}
  margin: 20px;
  @media screen and (min-width: 800px) {
    ${FixedHeadingStyles.heading03}
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
