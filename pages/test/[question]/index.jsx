import RadioBox from "../../components/buttons/radioButton/RadioBox";
import s from './question.module.css';
import {useRouter} from "next/router";

function Question({questionTitle, type, timeLimit, answers}) {
    const router = useRouter();
    const questionID = router.query.questionID;

    return <div className={s.mainContent}>
                <div className={s.timer}>00:45</div>

                <div className={s.question}>Question {questionID}</div>

                <div className={s.answers}>
                    <RadioBox checked={false} text={'Роман Мстиславич'} disabled={true}/>
                    <RadioBox checked={false} text={'Роман Алексеевич'} disabled={false}/>
                    <RadioBox checked={true} text={'Зигли Путба'} disabled={true}/>
                    <RadioBox checked={true} text={'Элвин Грей'} disabled={false}/>
                </div>
    </div>
  }

  export default Question
