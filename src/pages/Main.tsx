import React from "react";
import { Tabs } from "joseph-ui-kit";
import { TabList, Tab, TabPanels, TabPanel } from "joseph-ui-kit";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchBox from "../components/SearchBox/SearchBox";
import PopularTabPanel from "../components/PopularTabPanel/PopularTabPanel";
import NowPlayingTabPanel from "../components/NowPlayingTabPanel/NowPlayingTabPanel";
import UpComingTabPanel from "../components/UpComingTabPanel/UpComingTabPanel";
import TopRatedTabPanel from "../components/TopRatedTabPanel/TopRatedTabPanel";

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
              <PopularTabPanel />
            </TabPanel>

            <TabPanel>
              <NowPlayingTabPanel />
            </TabPanel>

            <TabPanel>
              <UpComingTabPanel />
            </TabPanel>

            <TabPanel>
              <TopRatedTabPanel />
            </TabPanel>
          </TabPanels>
        </>
      </Tabs>
      <Footer />
    </>
  );
};

export default Main;
