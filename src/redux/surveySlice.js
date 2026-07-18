import { createSlice } from "@reduxjs/toolkit";
import createQuestion from "../utils/createQuestion";

const initialState = {
  surveyTitle: "Customer Feedback Survey",
  surveyDescription:
    "Help us improve by answering a few quick questions.",
  questions: [createQuestion()],

  thankYou: {
    enabled: false,
    mediaUrl: null,
    mediaName: null,
    mediaType: null,
    title: "Thank You!",
    subtitle: "Your response has been recorded.",
    buttonText: "Done",
    redirectType: "none",
    redirectUrl: "",
  },
};

const surveySlice = createSlice({
  name: "survey",
  initialState,

  reducers: {
    updateSurveyTitle: (state, action) => {
      state.surveyTitle = action.payload;
    },

    updateSurveyDescription: (state, action) => {
      state.surveyDescription = action.payload;
    },

    addQuestion: (state) => {
      state.questions.push(createQuestion());
    },

    deleteQuestion: (state, action) => {
      if (state.questions.length <= 1) return;

      state.questions = state.questions.filter(
        (question) => question.id !== action.payload
      );
    },

    updateQuestion: (state, action) => {
      const { id, field, value } = action.payload;

      const question = state.questions.find(
        (question) => question.id === id
      );

      if (question) {
        question[field] = value;
      }
    },

    updateOption: (state, action) => {
      const { questionId, optionIndex, value } = action.payload;

      const question = state.questions.find(
        (question) => question.id === questionId
      );

      if (question) {
        question.options[optionIndex] = value;
      }
    },

    addOption: (state, action) => {
      const question = state.questions.find(
        (question) => question.id === action.payload
      );

      if (question) {
        question.options.push(
          `Option ${question.options.length + 1}`
        );
      }
    },

    setQuestionCount: (state, action) => {
      const count = action.payload;

      while (state.questions.length < count) {
        state.questions.push(createQuestion());
      }

      while (state.questions.length > count) {
        state.questions.pop();
      }
    },

    deleteOption: (state, action) => {
      const { questionId, optionIndex } = action.payload;

      const question = state.questions.find(
        (question) => question.id === questionId
      );

      if (!question) return;

      if (question.options.length <= 2) return;

      question.options.splice(optionIndex, 1);
    },

    addLogicCondition: (state, action) => {
      const question = state.questions.find(
        (question) => question.id === action.payload
      );

      if (question) {
        question.logic.push({
          id: crypto.randomUUID(),
          optionIndex: 0,
          redirectTo: "next",
        });
      }
    },

    updateLogicCondition: (state, action) => {
      const { questionId, conditionId, field, value } = action.payload;

      const question = state.questions.find(
        (question) => question.id === questionId
      );

      if (!question) return;

      const condition = question.logic.find((c) => c.id === conditionId);

      if (condition) {
        condition[field] = value;
      }
    },

    deleteLogicCondition: (state, action) => {
      const { questionId, conditionId } = action.payload;

      const question = state.questions.find(
        (question) => question.id === questionId
      );

      if (!question) return;

      question.logic = question.logic.filter((c) => c.id !== conditionId);
    },

    toggleThankYou: (state, action) => {
      state.thankYou.enabled = action.payload;
    },

    updateThankYou: (state, action) => {
      const { field, value } = action.payload;
      state.thankYou[field] = value;
    },
  },
});

export const {
  updateSurveyTitle,
  updateSurveyDescription,
  addQuestion,
  deleteQuestion,
  updateQuestion,
  updateOption,
  addOption,
  deleteOption,
  setQuestionCount,
  addLogicCondition,
  updateLogicCondition,
  deleteLogicCondition,
  toggleThankYou,
  updateThankYou,
} = surveySlice.actions;

export default surveySlice.reducer;
