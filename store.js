import { configureStore } from '@reduxjs/toolkit';
import QuestionReducer from "./slices/questionSlices";

export const store = configureStore({
    reducer: {
        test: QuestionReducer,
    },
})
