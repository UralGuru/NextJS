import React from 'react';
import {useDispatch} from "react-redux";
import styles from "./radio.module.scss";


const RadioBox = ({text, setChecked, id, checked=false, disabled=false, }) => {
    const dispatch = useDispatch();

    return <>
        <div className={styles.grid} onClick={() => !disabled && dispatch(setChecked(id))}>
            <div className={`${styles.card}`}>
                <div className={`${styles.radio_button}
                                 ${checked ? styles.radio_button_checked : ''}
                                 ${disabled ? styles.radio_button_disabled : ''}`}
                />
                <div className={disabled ? styles.radio_button_disabled : ''}>{text}</div>
            </div>
        </div>
    </>
};

export default RadioBox;
