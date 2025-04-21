import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  quizzes: [],
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, { payload: quizzes }) => {
      state.quizzes = quizzes;
    },
    addQuiz: (state, { payload: quiz }) => {
      const newQuiz: any = {
        _id: uuidv4(),
        title: quiz.title,
        // course: assignment.course,
        // description: assignment.description,
        // points: assignment.points,
        // dueDate: assignment.dueDate,
        // availableDate: assignment.availableDate,
      };
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter((q: any) => q._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q
      ) as any;
    },
    publishQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quizId ? { ...q, published: true } : q
      ) as any;
    },
  },
});

export const { setQuizzes, addQuiz, deleteQuiz, updateQuiz } =
  quizzesSlice.actions;
export default quizzesSlice.reducer;
