import RadioBox from "../../buttons/radioButton/RadioBox";
import s from './question.module.css';
import {useSelector, useDispatch} from 'react-redux';
// import {decrement, setTime} from '../../../slices/timerSlices';
import {setChecked, setTime, decrement} from "../../../slices/questionSlices";
import {useEffect} from "react";

function convertSecToMinSec(sec) {
    //Convert Seconds to Minutes and Seconds
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    const padTo2Digits = (num) => num.toString().padStart(2, '0');
    return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
}

function Question({question}) {
    const totalSeconds = useSelector((state) => state.test.questions[question.id-1].timeLimit);
    const time = convertSecToMinSec(totalSeconds);
    const dispatch = useDispatch();

    // console.log(totalSeconds)


    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(decrement(question.id-1));
        }, 1000);
        return ()=> clearInterval(interval)
    }, []);


    return <div className={s.mainContent}>
        <div className={s.timer}>{time}</div>

        <div className={s.question}>{question.questionTitle}</div>

        <div className={s.answers}>
            {question.answers?.map((a)=>(<div key={a.id} >
                <RadioBox text={a.answerTitle}
                          id={a.id}
                          checked={a.checked}
                          setChecked={setChecked}
                          disabled={a.disabled}/></div>
            ))}
        </div>
    </div>
}

export default Question
