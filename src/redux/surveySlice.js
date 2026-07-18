import { createSlice } from "@reduxjs/toolkit";
import createQuestion from "../utils/createQuestion";

const initialState = {
  surveyTitle: "Customer Feedback Survey",
  surveyDescription:
    "Help us improve by answering a few quick questions.",
  questions: [createQuestion()],
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
} = surveySlice.actions;

export default surveySlice.reducer;