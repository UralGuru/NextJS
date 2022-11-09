import styles from "./navbar.module.css";

const Navbar = () => {
    return <div className={styles.navbar}>
        <div className={styles.arrow}>
            <i className={styles.arrowLeft}/>
        </div>
        {[...Array(5)].map((e, i) => <div className={styles.box} key={i}>{i + 1}</div>)}
    </div>
};

export default Navbar
