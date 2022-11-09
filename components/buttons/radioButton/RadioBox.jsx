import React, {useState} from 'react';
import styles from "./radio.module.scss";

const RadioBox = ({text, checked=false, disabled=false}) => {
    const [val, setVal] = useState(checked);

    return <>
        <div className={styles.grid} onClick={() => !disabled && setVal(!val)}>
            <div className={`${styles.card}`}>
                <div className={`${styles.radio_button}
                                 ${val ? styles.radio_button_checked : ''}
                                 ${disabled ? styles.radio_button_disabled : ''}`}/>
                <div className={disabled ? styles.radio_button_disabled : ''}>{text}</div>
            </div>
        </div>
    </>
};

export default RadioBox;
