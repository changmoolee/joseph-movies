import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { Outer, Inner } from "./styles/layout";
import Main from "./pages/Main";
import Movie from "./pages/Movie";
import SearchResult from "./pages/SearchResult";

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
              <Route path="/result/:keyword" element={<SearchResult />} />
            </Routes>
          </Inner>
        </Outer>
      </div>
    </BrowserRouter>
  );
}

export default App;
