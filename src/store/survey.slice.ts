import { createSlice } from "@reduxjs/toolkit";
import { AnswerProps } from "../global/types";

const initialSurveyState = {
  isRegistered: false, // boolean
  registeredUserInfo: {
    teamName: undefined, // string
    memberName: undefined, // string
    result: 0, // number
  },
  answers: <AnswerProps[]>[], // e.g. {id: params.id, value: number }, ...
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
        result: state.registeredUserInfo.result,
      };
    },
    resetUserInfo(state) {
      state.isRegistered = false;
      state.registeredUserInfo = {
        teamName: undefined,
        memberName: undefined,
        result: 0,
      };
      state.answers = [];
    },
    updateAnswers(state, action) {
      const newAnswer = {
        id: action.payload.id,
        value: action.payload.value,
      };

      const newAnswers = [...state.answers];
      const targetAnswerIndex = newAnswers.findIndex(
        (answer) => answer.id === action.payload.id
      );

      if (targetAnswerIndex === -1 || newAnswers.length === 0)
        newAnswers.push(newAnswer);
      if (targetAnswerIndex !== -1)
        newAnswers[targetAnswerIndex].value = action.payload.value;

      const values = newAnswers.map((answer) => {
        return answer.value;
      });
      const sum = values
        .flat()
        .map((value) => parseInt(value))
        .reduce((acc, value) => acc + value, 0);

      state.answers = newAnswers;
      state.registeredUserInfo.result = sum;
    },
  },
});

export default surveySlice.reducer;
export const surveyActions = surveySlice.actions;
