import s from "./nextButton.module.css"
import Link from "next/link";

function NextPageButton({id, count}) {

    const hrefURL = (id !== count) ? `/test/${id}` : `/test/${id - 1}`;
    const activeClassName = (id !== count) ? s.button : s.diactive;



    return <div>
        <Link href={hrefURL}>
            <div className={activeClassName}>
                Далее
            </div>
        </Link>


    </div>
}

export default NextPageButton