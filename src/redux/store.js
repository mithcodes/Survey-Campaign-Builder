import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./surveySlice";
import styleReducer from "./styleSlice";

export const store = configureStore({
  reducer: {
    survey: surveyReducer,
    style: styleReducer,
  },
});