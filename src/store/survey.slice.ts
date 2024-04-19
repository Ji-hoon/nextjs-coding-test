import { createSlice } from "@reduxjs/toolkit";

const initialSurveyState = {
  isRegistered: false, // boolean
  registeredUserInfo: {
    teamName: undefined, // string
    memberName: undefined, // string
  },
  answers: [], // e.g. {id: params.id, value: number }, ...
  result: undefined, // number
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
    resetUserInfo(state) {
      state.isRegistered = false;
      state.registeredUserInfo = {
        teamName: undefined,
        memberName: undefined,
      };
    },
  },
});

export default surveySlice.reducer;
export const surveyActions = surveySlice.actions;
