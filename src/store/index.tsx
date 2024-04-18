"use client";

import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./survey.slice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    survey: surveyReducer,
  },
});

function SurveyProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
export default SurveyProvider;
