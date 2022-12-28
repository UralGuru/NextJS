import styles from './res.module.css'
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";
import AnswerCard from "../../components/cards/answerCard/answerCard";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";


const Index = () => {
    const isAns = true
    const router = useRouter()

    const questions = useSelector((state) => state.test.questions);
    const userAnswers = useSelector((state) => state.test.answers);
    const trueAnswers = useSelector((state) => state.test.trueAnswers);


    return (
        <div className={styles.appWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.header}>Pезультаты</div>
                <div className={styles.resultText}>Вы ответили правильно на 4/5 вопросов</div>
                <div className={styles.results}>
                    {questions.map(q => <AnswerCard key={q.id}
                                                    id={q.id}
                                                    question={q.questionTitle}
                                                    answer={'Ответ'}
                                                    isAns={userAnswers[q.id] === trueAnswers[q.id]}/>)}
                </div>

                <div onClick={() => router.push('/')}>
                    <div className={styles.btnGoHome}>Вернуться на главную</div>
                </div>
            </div>
        </div>
    );
};

export default Index;