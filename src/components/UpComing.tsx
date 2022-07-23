import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "joseph-ui-kit";
import Contents from "./Contents";
import SkeletonContents from "./SkeletonContents";
import SortAccordion from "./SortAccordion";

const UpComing = () => {
  const [loading, setLoading] = useState(true);
  const [upComing, setUpComing] = useState([]);
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
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=${pageNum}`
      )
      .then((res) =>
        setUpComing((upComing) => upComing.concat(res.data.results))
      )
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [pageNum]);

  return loading ? (
    <>
      <SortAccordion />
      <SkeletonContents />
    </>
  ) : (
    <>
      <SortAccordion setSelected={setSelected} />
      <Contents data={upComing} />
      {upComing.length >= 20 * pageNum ? (
        <ButtonContainer>
          <Button name="더보기" padding="10px 70px" onClick={morePage} />
        </ButtonContainer>
      ) : null}
    </>
  );
};

export default UpComing;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
