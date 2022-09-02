import React, { useState } from "react";
import { Button, Search } from "joseph-ui-kit";
import { useNavigate } from "react-router-dom";
import * as Styled from "./SearchBox.styles";

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
    <Styled.Container>
      <Styled.Introduction>
        <Styled.FirstHeading>
          환영합니다. 수백만 개의 영화를 확인할 수 있습니다.
        </Styled.FirstHeading>
        <Styled.SecondHeading>지금 탐색해 보세요!</Styled.SecondHeading>
      </Styled.Introduction>

      <Styled.SearchWithButton>
        <div>
          <Search
            width="auto"
            placeholder="영화 검색"
            onKeyDown={pressEnter}
            onChange={(data) => setValue(data.value)}
          />
        </div>
        <Button name="검색" padding="10px 20px" onClick={handleClick} />
      </Styled.SearchWithButton>
    </Styled.Container>
  );
};

export default SearchBox;
