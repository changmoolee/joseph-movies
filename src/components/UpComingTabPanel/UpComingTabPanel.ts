import React, { useState } from "react";
import { add } from "date-fns";
import PanelComponent from "../PanelComponent/PanelComponent";

const UpComingTopPanel = () => {
  const [upComing, setUpComing] = useState([]);

  const firstRequestConfig = (page: number) => {
    return {
      method: "get",
      baseURL: "https://api.themoviedb.org/3",
      url: "movie/upcoming",
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
        "release_date.gte": add(new Date(), { days: 4 }),
        "release_date.lte": add(new Date(), { weeks: 3 }),
        show_me: 0,
        "vote_average.gte": 0,
        "vote_average.lte": 10,
        with_release_type: 3,
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
        "release_date.gte": add(new Date(), { days: 4 }),
        "release_date.lte": add(new Date(), { weeks: 3 }),
        show_me: 0,
        "vote_average.gte": 0,
        "vote_average.lte": 10,
        with_release_type: 3,
        "with_runtime.gte": 0,
        "with_runtime.lte": 400,
      },
    };
  };

  return PanelComponent({
    data: upComing,
    setData: setUpComing,
    firstRequestConfig,
    sortedRequestConfig,
    moreSortedRequestConfig,
  });
};

export default UpComingTopPanel;
