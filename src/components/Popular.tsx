import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "joseph-ui-kit";
import Contents from "./Contents";
import SkeletonContents from "./SkeletonContents";
import SortAccordion from "./SortAccordion";

const Popular = () => {
  const [loading, setLoading] = useState(true);
  const [popular, setPopular] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [selected, setSelected] = useState<{
    id: number | string;
    value: number | string;
  }>({ id: "popularity.desc", value: "인기도 내림차순" });

  const morePage = () => {
    setPageNum((pageNum) => pageNum + 1);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=${pageNum}`
      )
      .then((res) => {
        setPopular((popular) => popular.concat(res.data.results));
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [pageNum]);

  // useEffect(() => {
  //   setLoading(true);
  //   if (didMount.current) {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=${pageNum}&sort_by=${selected.id}`
  //       )
  //       .then((res) => {
  //         setPopular2((popular2) => popular2.concat(res.data.results));
  //       })
  //       .then(() => setLoading(false))
  //       .catch((err) => console.log(err));
  //   } else {
  //     didMount.current = true;
  //     setLoading(false);
  //   }
  // }, [selected, pageNum2]);

  return loading ? (
    <>
      <SortAccordion />
      <SkeletonContents />
    </>
  ) : (
    <>
      <SortAccordion setSelected={setSelected} />
      <Contents data={popular} />
      {popular.length >= 20 * pageNum ? (
        <ButtonContainer>
          <Button name="더보기" padding="10px 70px" onClick={morePage} />
        </ButtonContainer>
      ) : null}
    </>
  );
};

export default Popular;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
