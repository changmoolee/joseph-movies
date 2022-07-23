import React from "react";
import { Tabs } from "joseph-ui-kit";
import {
  Tab,
  TabList,
  TabsDescription,
  TabsDescriptions,
} from "joseph-ui-kit/dist/components/Tabs/Tabs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import Popular from "../components/Popular";
import NowPlaying from "../components/NowPlaying";
import UpComing from "../components/UpComing";
import TopRated from "../components/TopRated";

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
          <TabsDescriptions>
            <TabsDescription>
              <Popular />
            </TabsDescription>

            <TabsDescription>
              <NowPlaying />
            </TabsDescription>

            <TabsDescription>
              <UpComing />
            </TabsDescription>

            <TabsDescription>
              <TopRated />
            </TabsDescription>
          </TabsDescriptions>
        </>
      </Tabs>
      <Footer />
    </>
  );
};

export default Main;
