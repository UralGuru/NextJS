import RadioBox from "../../buttons/radioButton/RadioBox";
import s from './question.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {setChecked,  decrement} from "/slices/questionSlices";
import {useEffect} from "react";
import PressButton from "../../buttons/pressButton/pressButton";
import {Router, useRouter} from "next/router";
import NextPageButton from "../../buttons/nextButton/nextButton";
import SubmitPageButton from "../../buttons/submitButton/submitButton";

//Convert Seconds to Minutes and Seconds
function convertSecToMinSec(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    const padTo2Digits = (num) => num.toString().padStart(2, '0');
    return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
}

function Question({question}) {
    const totalSeconds = useSelector((state) => state.test.questions[question?.id-1]?.timeLimit);
    const questions = useSelector((state) => state.test.questions);
    const time = convertSecToMinSec(totalSeconds);
    const dispatch = useDispatch();
    const router = useRouter()
    const isLastPage = (+router.query.index[0])===(questions.length);


    useEffect(() => {
        const interval = setInterval(() => {dispatch(decrement(question.id-1));}, 1000);
        return ()=> clearInterval(interval)}, [question.id]);

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
        {!isLastPage && <NextPageButton id={+router.query.index[0]+1} count={questions.length}/>}
        {isLastPage && <SubmitPageButton id={+router.query.index[0]}/>}

    </div>
}

export default Question
