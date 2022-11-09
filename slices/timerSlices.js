import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    time: 10,
}

export const counterSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        increment: (state) => {
            state.time += 1
        },
        decrement: (state) => {
            if(state.time>=1) state.time -= 1
        },
    },
})

export const { increment, decrement} = counterSlice.actions

export default counterSlice.reducer
