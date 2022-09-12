import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { searchApi } from "../services/search";

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

setupListeners(store.dispatch);
