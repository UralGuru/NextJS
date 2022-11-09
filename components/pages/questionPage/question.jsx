import RadioBox from "../../buttons/radioButton/RadioBox";
import s from './question.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../../slices/timerSlices';
import {useEffect} from "react";

function convertSecToMinSec(sec) {
    //Convert Seconds to Minutes and Seconds
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    const padTo2Digits = (num) => num.toString().padStart(2, '0');
    return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
}

function Question() {
    const totalSeconds = useSelector((state) => state.timer.time);
    const time = convertSecToMinSec(totalSeconds);
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(decrement());
        }, 1000);
        return ()=> clearInterval(interval)
    }, []);


    return <div className={s.mainContent}>
        <div className={s.timer}>{time}</div>

        <div className={s.question}>Какой автор имел более 50 псевдонимов?</div>

        <div className={s.answers}>
            <RadioBox text={'Сергей Есенин'}/>
            <RadioBox text={'Антон чехов'}/>
            <RadioBox text={'Лев Толстой'}/>
            <RadioBox text={'Владимир Маяковский'}/>
        </div>
    </div>
}

export default Question
