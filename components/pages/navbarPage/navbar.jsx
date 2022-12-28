import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = ({len}) => {
    return <div className={styles.navbar}>
        <div className={styles.arrow}>
            {/*<i className={styles.arrowLeft}/>*/}
        </div>
        {[...Array(len)].map((e, i) =>
            <Link href={`/test/${i + 1}`} key={i}>
                <div className={styles.box}>{i + 1}</div>
            </Link>)}
    </div>
};

export default Navbar
