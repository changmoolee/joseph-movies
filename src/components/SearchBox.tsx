import React, { useRef } from "react";
import styled from "styled-components";
import { Button, Search } from "joseph-ui-kit";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SearchBox = () => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const navigate = useNavigate();

  const goToResult = () => {
    navigate(`/result/${inputRef.current?.value}`);
  };

  const handleClick = () => {
    if (inputRef.current?.value === "") {
      alert("검색어를 입력해 주세요.");
    } else {
      goToResult();
    }
  };

  return (
    <Container>
      <Search width="100%" inputRef={inputRef} placeholder="영화 검색" />
      <Button name="검색" padding="10px 20px" onClick={handleClick} />
    </Container>
  );
};

export default SearchBox;
