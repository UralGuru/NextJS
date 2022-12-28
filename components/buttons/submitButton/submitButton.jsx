import s from "./submitButton.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";

function SubmitPageButton({id}) {
    const questions = useSelector((state) => state.test.questions);
    const dispatch = useDispatch();
    const router = useRouter()



    const sub = () => {
        router.push('/result')
    }

    return (
        <>
            <div>
                <div className={s.button} onClick={sub}>
                    Отправить
                </div>
            </div>
        </>)
}

export default SubmitPageButton;