import React from 'react';
import styles from "./answerCard.module.css";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";

const AnswerCard = (props) => {
    return (
        <div>
            <div className={styles.resultItem}>
                <div className={styles.resultItemStart}>
                    <div className={styles.resultItemNumber}>{props.id}</div>
                    <div>
                        <div>{props.question}</div>
                        <div className={styles.anwTxt}>{props.answer}</div>
                    </div>
                </div>

                <div className={styles.resIcon}>
                    {props.isAns && <AiOutlineCheck style={{color: '#2DC36A'}}/>}
                    {!props.isAns && <AiOutlineClose  style={{color: '#ef3124'}}/>}
                </div>
            </div>
        </div>
    );
};

export default AnswerCard;