import s from "./submitButton.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";

function SubmitPageButton() {
    const questions = useSelector((state) => state.test.questions);
    const dispatch = useDispatch();
    const router = useRouter()


    console.log(questions)
    return (
        <>
            <div>
                <div className={s.button}>
                    Отправить
                </div>
            </div>
        </>)
}

export default SubmitPageButton;