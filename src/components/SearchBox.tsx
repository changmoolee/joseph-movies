import React, { useState } from "react";
import styled from "styled-components";
import { Button, Search, FixedHeadingStyles } from "joseph-ui-kit";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [value, setValue] = useState<string>("");

  const navigate = useNavigate();

  const goToResult = () => {
    navigate(`/result/${value}`);
  };

  const handleClick = () => {
    if (value === "") {
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
      <Introduction>
        <FirstHeading>환영합니다.</FirstHeading>
        <SecondHeading>영화 이름을 검색해 보세요!</SecondHeading>
      </Introduction>

      <SearchWithButton>
        <div>
          <Search
            width="auto"
            placeholder="영화 검색"
            onKeyDown={pressEnter}
            onChange={(data) => setValue(data.value)}
          />
        </div>
        <Button name="검색" padding="10px 20px" onClick={handleClick} />
      </SearchWithButton>
    </Container>
  );
};

export default SearchBox;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: 100%;
  background-position: center;
  background-image: url("https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/03/nope-poster-2.png?w=1075&ssl=1");
  background-repeat: no-repeat;
`;

const Introduction = styled.div`
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  @media screen and (min-width: 800px) {
    padding: 20px 50px;
  }
`;

const FirstHeading = styled.div`
  ${FixedHeadingStyles.external.heading04}
  color: white;
  @media screen and (min-width: 800px) {
    ${FixedHeadingStyles.external.heading05}
  }
`;
const SecondHeading = styled.div`
  ${FixedHeadingStyles.external.heading03}
  color: white;
  @media screen and (min-width: 800px) {
    ${FixedHeadingStyles.external.heading04}
  }
`;

const SearchWithButton = styled.div`
  display: flex;
  div {
    flex-grow: 1;
  }
`;
