import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "./slices/timerSlices";

export const store = configureStore({
    reducer: {
        timer: CounterReducer,
    },
})
