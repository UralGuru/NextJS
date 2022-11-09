import styles from "./navbar.module.css";
import Link from "next/link";
import {decrement} from "../../../slices/questionSlices";
import {useDispatch} from "react-redux";

const Navbar = ({len}) => {
    const dispatch = useDispatch();
    return <div className={styles.navbar}>
        <div className={styles.arrow}>
            <i className={styles.arrowLeft}/>
        </div>
        {[...Array(len)].map((e, i) =>
            <Link href={`/test/${i + 1}`} key={i}>
                <div className={styles.box}
                     >{i + 1}</div>
            </Link>)}
    </div>
};

export default Navbar
