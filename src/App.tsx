import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Main from "./pages/Main";
import Movie from "./pages/Movie";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/result/:value" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
