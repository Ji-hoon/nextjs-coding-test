import { createSlice } from "@reduxjs/toolkit";

const initialSurveyState = {
  isRegistered: false,
  registeredUserInfo: {
    teamName: String,
    memberName: String,
  },
};

const surveySlice = createSlice({
  name: "survey",
  initialState: initialSurveyState,
  reducers: {
    registerInfo(state, action) {
      const { teamName, memberName } = action.payload;
      state.isRegistered = true;
      state.registeredUserInfo = {
        teamName,
        memberName,
      };
    },
  },
});

export default surveySlice.reducer;
export const surveyActions = surveySlice.actions;
