import { createSlice, current  } from '@reduxjs/toolkit';
import {test} from '../data/questionsData'

const initialState = {
    questions: test.questions,
};

export const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setChecked:(state, actions)=>{
            const toggleAnswCheckedID = state.questions[0].answers.find((answ)=>answ.id===actions.payload);
            toggleAnswCheckedID.checked = !toggleAnswCheckedID.checked;
            for (let e of state.questions[0].answers){
                if (e !== toggleAnswCheckedID) e.checked = false
            }
        },
        setTime: (state, action) => {
            // state.time = action.payload;
        },
        decrement: (state, action) => {
            // console.log(current(state.questions[action.payload].timeLimit))
            (state.questions[action.payload].timeLimit>=1)
                ? (state.questions[action.payload].timeLimit -= 1)
                :  (state.questions[action.payload].answers.map((d)=> d.disabled=true))
        },
    }
})

export const {setChecked, setTime, decrement} = questionSlice.actions
export default questionSlice.reducer;
