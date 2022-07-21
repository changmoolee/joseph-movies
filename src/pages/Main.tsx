import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Tabs } from "joseph-ui-kit";
import {
  Tab,
  TabList,
  TabsDescription,
  TabsDescriptions,
} from "joseph-ui-kit/dist/components/Tabs/Tabs";
import Header from "../components/Header";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import SkeletonContents from "../components/SkeletonContents";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [popular, setPopular] = useState({});
  const [nowPlaying, setNowPlaying] = useState({});
  const [upComing, setUpComing] = useState({});
  const [topRated, setTopRated] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .all([
        axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1`
        ),
      ])
      .then(
        axios.spread((res1, res2, res3, res4) => {
          setPopular(res1.data);
          setNowPlaying(res2.data);
          setUpComing(res3.data);
          setTopRated(res4.data);
        })
      )
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <SearchBox />
      <Tabs width="100%">
        <>
          <TabList>
            <Tab>인기</Tab>
            <Tab>현재 상영중</Tab>
            <Tab>개봉 예정</Tab>
            <Tab>높은 평점</Tab>
          </TabList>
          <TabsDescriptions>
            <TabsDescription>
              {loading ? <SkeletonContents /> : <Contents data={popular} />}
            </TabsDescription>
            <TabsDescription>
              {loading ? <SkeletonContents /> : <Contents data={nowPlaying} />}
            </TabsDescription>
            <TabsDescription>
              {loading ? <SkeletonContents /> : <Contents data={upComing} />}
            </TabsDescription>
            <TabsDescription>
              {loading ? <SkeletonContents /> : <Contents data={topRated} />}
            </TabsDescription>
          </TabsDescriptions>
        </>
      </Tabs>
      <Footer />
    </>
  );
};

export default Main;
