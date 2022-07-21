import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Main from "./pages/Main";
import Movie from "./pages/Movie";
import Result from "./pages/Result";

const Outer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  @media screen and (min-width: 1400px) {
    width: 1300px;
  }
  @media screen and (min-width: 1100px) and (max-width: 1400px) {
    width: 1000px;
  }
  @media screen and (min-width: 800px) and (max-width: 1100px) {
    width: 700px;
  }
  @media screen and (max-width: 800px) {
    width: 500px;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <Outer>
          <Inner>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/movie/:id" element={<Movie />} />
              <Route path="/result/:value" element={<Result />} />
            </Routes>
          </Inner>
        </Outer>
      </div>
    </BrowserRouter>
  );
}

export default App;
