import React, { useState } from "react";
import { add } from "date-fns";
import PanelComponent from "../PanelComponent/PanelComponent";

const TopRatedTopPanel = () => {
  const [topRated, setTopRated] = useState<Array<any>>([]);

  const firstRequestConfig = (page: number) => {
    return {
      method: "get",
      baseURL: "https://api.themoviedb.org/3",
      url: "movie/top_rated",
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: "ko",
        page: page,
      },
    };
  };
  const sortedRequestConfig = (selected: {
    id: number | string;
    value: number | string;
  }) => {
    return {
      method: "get",
      baseURL: "https://api.themoviedb.org/3",
      url: "discover/movie",
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: "ko",
        page: 1,
        sort_by: selected.id,
        "air_date.lte": add(new Date(), { months: 6 }),
        certification_country: "KR",
        ott_region: "KR",
        "release_date.lte": add(new Date(), { months: 6 }),
        show_me: 0,
        "vote_average.gte": 0,
        "vote_average.lte": 10,
        "vote_count.gte": 300,
        "with_runtime.gte": 0,
        "with_runtime.lte": 400,
      },
    };
  };

  const moreSortedRequestConfig = (
    selected: {
      id: number | string;
      value: number | string;
    },
    sortedPage: number
  ) => {
    return {
      method: "get",
      baseURL: "https://api.themoviedb.org/3",
      url: "discover/movie",
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: "ko",
        page: sortedPage,
        sort_by: selected.id,
        "air_date.lte": add(new Date(), { months: 6 }),
        certification_country: "KR",
        ott_region: "KR",
        "release_date.lte": add(new Date(), { months: 6 }),
        show_me: 0,
        "vote_average.gte": 0,
        "vote_average.lte": 10,
        "vote_count.gte": 300,
        "with_runtime.gte": 0,
        "with_runtime.lte": 400,
      },
    };
  };

  return PanelComponent({
    data: topRated,
    setData: setTopRated,
    firstRequestConfig,
    sortedRequestConfig,
    moreSortedRequestConfig,
  });
};

export default TopRatedTopPanel;
