import React from "react";
import { Tabs } from "joseph-ui-kit";
import { TabList, Tab, TabPanels, TabPanel } from "joseph-ui-kit";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import PopularTopPanel from "../components/PopularTopPanel";
import NowPlayingTopPanel from "../components/NowPlayingTopPanel";
import UpComingTopPanel from "../components/UpComingTopPanel";
import TopRatedTopPanel from "../components/TopRatedTopPanel";

const Main = () => {
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
          <TabPanels>
            <TabPanel>
              <PopularTopPanel />
            </TabPanel>

            <TabPanel>
              <NowPlayingTopPanel />
            </TabPanel>

            <TabPanel>
              <UpComingTopPanel />
            </TabPanel>

            <TabPanel>
              <TopRatedTopPanel />
            </TabPanel>
          </TabPanels>
        </>
      </Tabs>
      <Footer />
    </>
  );
};

export default Main;
