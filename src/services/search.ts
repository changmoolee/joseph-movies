import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3` }),
  endpoints: (builder) => ({
    getSearchResult: builder.query({
      query: (keyword) =>
        `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1&query=${keyword}`,
    }),
  }),
});

export const { useGetSearchResultQuery } = searchApi;
