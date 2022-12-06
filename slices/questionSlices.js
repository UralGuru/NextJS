import { createSlice } from '@reduxjs/toolkit';
import {test} from '../data/questionsData'

const initialState = {
    questions: test.questions,
};

export const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setChecked:(state, actions)=>{
            const toggleAnswCheckedID = state.questions[parseInt(actions.payload/10)-1].answers.find((answ)=>answ.id===actions.payload);
            toggleAnswCheckedID.checked = !toggleAnswCheckedID.checked;
            for (let e of state.questions[parseInt(actions.payload/10)-1].answers){
                if (e !== toggleAnswCheckedID) e.checked = false
            }
        },
        setQuestion: (state, action) => {
            state.questions = action.payload;
        },
        decrement: (state, action) => {
            (state.questions[action.payload].timeLimit>=1)
                ? (state.questions[action.payload].timeLimit -= 1)
                :  (state.questions[action.payload].answers.map((d)=> d.disabled=true))
        },
    }
})

export const { setChecked, decrement } = questionSlice.actions
export default questionSlice.reducer;
