import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Contents from "../components/Contents";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SkeletonContents from "../components/SkeletonContents";
import { SkeletonUI } from "joseph-ui-kit";

const ResultText = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

const Result = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState<any>({});

  const { value } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1&query=${value}`
      )
      .then((res) => {
        setSearch(res.data);
        setLoading(false);
      });
  }, [value]);

  console.log(search);

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
          <span style={{ fontStyle: "italic" }}>"{value}"</span> 검색 결과{" "}
          {search.results.length}건의 영화
        </ResultText>
      )}
      {loading ? <SkeletonContents /> : <Contents data={search} />}
      <Footer />
    </>
  );
};

export default Result;
