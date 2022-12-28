import styles from "./header.module.css";

const Header = () => {
    return <header className={styles.header}>
        <div className={styles.headerLeft}>
            <div style={{display: "flex", alignItems: "center", marginRight: '10px'}}>
                <img src='/question.svg' width={'50px'} alt='question'/>
                2/5
            </div>
            {/*<div style={{display: "flex", alignItems: "center"}}>*/}
            {/*    <img src='/clock.svg' width={'50px'} alt='clock'/>*/}
            {/*    60:00*/}
            {/*</div>*/}
        </div>
        <div style={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: '1.7em',
            color: '#828282'
        }}>
            РУСЬ И ЗОЛОТАЯ ОРДА
        </div>
        <div><img src='/bulb.svg' width={'50px'} alt='bulb'/></div>
    </header>
};

export default Header
