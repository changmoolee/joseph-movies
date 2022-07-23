import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SkeletonUI, Button } from "joseph-ui-kit";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import SkeletonContents from "../components/SkeletonContents";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

const Result = () => {
  const { value } = useParams();

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const morePage = () => {
    setPageNum((pageNum) => pageNum + 1);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=${pageNum}&query=${value}`
      )
      .then((res) => setSearch((search) => search.concat(res.data.results)))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setPageNum(1);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1&query=${value}`
      )
      .then((res) => setSearch(res.data.results))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [value]);

  return (
    <>
      <Header />
      <SearchBox />
      {loading ? (
        <ResultText>
          <SkeletonUI>
            <div style={{ width: "100px", height: "16px" }} />
          </SkeletonUI>
          <SkeletonUI>
            <div style={{ width: "100px", height: "16px" }} />
          </SkeletonUI>
        </ResultText>
      ) : (
        <ResultText>
          <span style={{ fontStyle: "italic" }}>"{value}"</span> 검색 결과
          {search.length}건의 영화
        </ResultText>
      )}
      {loading ? <SkeletonContents /> : <Contents data={search} />}
      {search.length >= 20 * pageNum ? (
        <ButtonContainer>
          <Button name="더보기" padding="10px 70px" onClick={morePage} />
        </ButtonContainer>
      ) : null}
      <Footer />
    </>
  );
};

export default Result;

const ResultText = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
