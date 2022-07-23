import React, { useRef } from "react";
import styled from "styled-components";
import { Button, Search } from "joseph-ui-kit";
import { useNavigate } from "react-router-dom";

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

  const pressEnter = (event: any) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Container>
      <Welcome>환영합니다.</Welcome>
      <Guide>영화 이름을 검색해보세요!</Guide>
      <SubContainer>
        <div>
          <Search
            inputRef={inputRef}
            width="auto"
            placeholder="영화 검색"
            onKeyUp={pressEnter}
          />
        </div>
        <Button name="검색" padding="10px 20px" onClick={handleClick} />
      </SubContainer>
    </Container>
  );
};

export default SearchBox;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: blue;
`;

const Welcome = styled.div`
  font-size: 24px;
  padding: 10px 20px;
  color: white;
  box-sizing: border-box;
  @media screen and (min-width: 800px) {
    font-size: 36px;
    padding: 20px 40px 10px 40px;
  }
`;
const Guide = styled.div`
  padding: 10px 20px;
  color: white;
  box-sizing: border-box;
  @media screen and (min-width: 800px) {
    font-size: 24px;
    padding: 10px 40px 20px 40px;
  }
`;

const SubContainer = styled.div`
  display: flex;
  div {
    flex-grow: 1;
  }
`;
